/**
 * @license
 * Copyright 2022 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */

import { useState, useEffect } from 'react';
import { useAuth } from '../firebase/auth';
import { updateReceipt } from '../firebase/firestore';
import { replaceImage, uploadImage } from '../firebase/storage';
import { RECEIPTS_ENUM } from '../pages/dashboard';
import styles from '../styles/expenseDialog.module.scss';
import AdapterDateFns from '@mui/lab/AdapterDateFns';
import DatePicker from '@mui/lab/DatePicker';
import LocalizationProvider from '@mui/lab/LocalizationProvider';
import { Avatar, Box, Button, Dialog, DialogActions, DialogContent, DialogTitle, TextField } from '@mui/material';

const DEFAULT_FILE_NAME = "No file selected";
const DEFAULT_FORM_STATE = {
  address: "",
  amount: "",
  date: null,
  fileName: DEFAULT_FILE_NAME,
  file: null,
  imageBucket: "",
  imageUrl: "",
  isConfirmed: false,
  items: "",
  locationName: "",
};

const ADD_EXPENSE_TITLE = "Add Expense";
const EDIT_EXPENSE_TITLE = "Edit Expense";
const CONFIRM_EXPENSE_TITLE = "Confirm Expense";

/* 
 Dialog to input receipt information
 
 props:
  - receipt is the receipt to edit if the dialog is being opened to edit, otherwise {}
  - action is the action for which this dialog was opened
  - onError emits to notify error occurred
  - onSuccess emits to notify successfully saving receipt
  - onCloseDialog emits to close dialog
 */
export default function expenseDialog(props) {
  const isAdd = props.action === RECEIPTS_ENUM.add;
  const isEdit = props.action === RECEIPTS_ENUM.edit;
  const isConfirm = props.action === RECEIPTS_ENUM.confirm;
  
  // Set dialog title based on action
  let dialogTitle = ADD_EXPENSE_TITLE;
  if (isEdit) {
    dialogTitle = EDIT_EXPENSE_TITLE;
  } else if (isConfirm) {
    dialogTitle = CONFIRM_EXPENSE_TITLE;
  }
  const { authUser } = useAuth();
  const [formFields, setFormFields] = useState((isEdit || isConfirm) ? props.receipt : DEFAULT_FORM_STATE);
  const [isSubmitting, setIsSubmitting] = useState(false);

  useEffect(() => {
    setFormFields((isEdit || isConfirm) ? props.receipt : DEFAULT_FORM_STATE)
  }, [props.receipt])

  const isDisabled = () => 
    !isAdd ? 
      formFields.fileName === DEFAULT_FILE_NAME || !formFields.date || formFields.locationName.length === 0 
             || formFields.address.length === 0 || formFields.items.length === 0 || formFields.amount.length === 0 :
      formFields.fileName === DEFAULT_FILE_NAME;

  const setFileData = (target) => {
    const file = target.files[0];
    setFormFields(prevState => ({...prevState, fileName: file.name}));
    setFormFields(prevState => ({...prevState, file}));
  }

  const storeImage = async (receiptEnum) => {
    // Store image into Storage
    // Want to store the bucket because need to replace image, need to know where to delete from Storage
    const bucket = isAdd ? await uploadImage(formFields.file, authUser.uid) : await replaceImage(formFields.file, formFields.imageBucket);
    if (!bucket) {
      props.onError(receiptEnum);
      props.onCloseDialog();
      throw error;
    }
    return bucket;
  }

  const handleSubmit = async () => {
    setIsSubmitting(true);

    // Adding receipt
    if (isAdd) {
      try {
        // Store image into Storage
        await storeImage(props.action);
      } catch (error) {
        props.onError(props.action);
        props.onCloseDialog();
        return;
      }
    } else {
      // Confirming or editing receipt
      let bucket = formFields.imageBucket;

      // Check whether image was changed - fileName will be not null
      if (formFields.fileName) {
        try {
          // Store image into Storage
          bucket = await storeImage(props.action);
        } catch (error) {
          props.onError(props.action);
          props.onCloseDialog();
          return;
        }
      }

      // Update receipt in Firestore
      try {
        await updateReceipt(formFields.id, authUser.uid, formFields.date, formFields.locationName, formFields.address, formFields.items, formFields.amount, bucket, true);
      } catch (error) {
        props.onError(props.action);
        props.onCloseDialog();
        return;
      }
    }

    // Clear all form data
    props.onCloseDialog();
    props.onSuccess(props.action);
  };

  return (
    <Dialog
      PaperProps={{
        style: {
          minWidth: '32em',
          padding: '0.5em',
        },
      }}
      onClose={props.onCloseDialog}
      open={isEdit || isConfirm || isAdd}
      component="form">
      <DialogTitle>{dialogTitle}</DialogTitle>
      <DialogContent>
        {!isConfirm &&
          <Box className={styles.box}>
            {(isEdit && !formFields.fileName) && 
              <Avatar alt="receipt image" src={formFields.imageUrl} sx={{ marginRight: '1em' }}/>
            }
            <div className={styles.box}>
              <Button variant="outlined" component="label">
                Upload Receipt
                <input type="file" hidden onInput={() => {setFileData(event.target)}} />
              </Button>
              <div className={styles.file}>{formFields.fileName}</div>
            </div>
          </Box>
        }
        {(isEdit || isConfirm) ?
          <div className={styles.fields}>
            <LocalizationProvider dateAdapter={AdapterDateFns}>
              <DatePicker
                label="Date"
                value={formFields.date}
                onChange={(newDate) => {
                  setFormFields(prevState => ({...prevState, date: newDate}));
                }}
                maxDate={new Date()}
                renderInput={(params) => <TextField {...params} />}
              />
            </LocalizationProvider>
            <TextField label="Location name" variant="standard" value={formFields.locationName} onChange={() => setFormFields(prevState => ({...prevState, locationName: event.target.value}))} />
            <TextField label="Location address" variant="standard" value={formFields.address} onChange={() => setFormFields(prevState => ({...prevState, address: event.target.value}))} />
            <TextField label="Items" variant="standard" value={formFields.items} onChange={() => setFormFields(prevState => ({...prevState, items: event.target.value}))}/>
            <TextField label="Amount" variant="standard" value={formFields.amount} onChange={() => setFormFields(prevState => ({...prevState, amount: event.target.value}))} />
          </div> : <div></div>
        }
      </DialogContent>
      <DialogActions className={styles.actions}>
        {isSubmitting ? 
          <Button variant="contained" disabled={true}>
            {isConfirm ? 'Confirming...' : 'Submitting...'}
          </Button> :
          <Button variant="contained" onClick={() => handleSubmit()} disabled={isDisabled()}>
            {isConfirm ? 'Confirm' : 'Submit'}
          </Button>
        }
      </DialogActions>
    </Dialog>
  )
}