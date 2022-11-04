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
import Head from 'next/head'
import { useRouter } from 'next/router';
import AddIcon from '@mui/icons-material/Add';
import NavBar from '../components/navbar';
import ReceiptRow from '../components/receiptRow';
import ExpenseDialog from '../components/expenseDialog';
import { useAuth } from '../firebase/auth';
import { deleteReceipt as deleteFromDb, getReceipts, getReceiptsMvp, getReceiptsOcr } from '../firebase/firestore';
import { Alert, Button, CircularProgress, Container, Dialog, DialogContent, DialogActions, Divider, IconButton, Snackbar, Typography, Stack } from '@mui/material';
import { ocrFeatureFlag } from '../firebase/remoteConfig';
import { deleteImage } from '../firebase/storage';
import styles from '../styles/dashboard.module.scss';

const ADD_SUCCESS_MVP = "Receipt was successfully added!";
const ADD_SUCCESS_OCR = "Receipt was successfully added, check back later to confirm receipt info!";
const ADD_ERROR = "Receipt was not successfully added!";
const CONFIRM_SUCCESS = "Receipt was successfully confirmed!";
const CONFIRM_ERROR = "Receipt was not successfully confirmed!";
const EDIT_SUCCESS = "Receipt was successfully updated!";
const EDIT_ERROR = "Receipt was not successfully updated!";
const DELETE_SUCCESS = "Receipt successfully deleted!";
const DELETE_ERROR = "Receipt not successfully deleted!";

export const RECEIPTS_ENUM = Object.freeze({
  none: 0,
  add: 1,
  edit: 2,
  delete: 3,
  confirm: 4,
});

const SUCCESS_MAP = {
  [RECEIPTS_ENUM.add]: ocrFeatureFlag ? ADD_SUCCESS_OCR : ADD_SUCCESS_MVP,
  [RECEIPTS_ENUM.edit]: EDIT_SUCCESS,
  [RECEIPTS_ENUM.delete]: DELETE_SUCCESS,
  [RECEIPTS_ENUM.confirm]: CONFIRM_SUCCESS
}

const ERROR_MAP = {
  [RECEIPTS_ENUM.add]: ADD_ERROR,
  [RECEIPTS_ENUM.edit]: EDIT_ERROR,
  [RECEIPTS_ENUM.delete]: DELETE_ERROR,
  [RECEIPTS_ENUM.confirm]: CONFIRM_ERROR
}

export default function Home() {

  const { authUser, isLoading } = useAuth();
  const router = useRouter();
  const [action, setAction] = useState(RECEIPTS_ENUM.none);
  
  // State involved in loading, setting, deleting, and updating receipts
  const [allReceipts, setAllReceipts] = useState([]);
  const [isLoadingReceipts, setIsLoadingReceipts] = useState(true);
  const [deleteReceiptId, setDeleteReceiptId] = useState("");
  const [deleteReceiptImageBucket, setDeleteReceiptImageBucket] = useState("");
  const [pastReceipts, setPastReceipts] = useState([]);
  const [toConfirmReceipts, setToConfirmReceipts] = useState([]);
  const [updateReceipt, setUpdateReceipt] = useState({});

  // State involved in snackbar
  const [snackbarMessage, setSnackbarMessage] = useState("");
  const [showSuccessSnackbar, setSuccessSnackbar] = useState(false);
  const [showErrorSnackbar, setErrorSnackbar] = useState(false);

  const getAndSetReceipts = async () => {
    if (ocrFeatureFlag) {
      setToConfirmReceipts(await getReceiptsOcr(authUser.uid, false));
      setPastReceipts(await getReceiptsOcr(authUser.uid, true));
    } else {
      setAllReceipts(await getReceiptsMvp(authUser.uid))
    }
  }

  // Listen for changes on loading and authUser, redirect if needed
  useEffect(() => {
    if (!isLoading && !authUser) {
      router.push('/');
    }
  }, [authUser, isLoading])

  useEffect(async () => {
    if (authUser) {
      setIsLoadingReceipts(true);
      await getAndSetReceipts();
      setIsLoadingReceipts(false);
    }
  }, [authUser, ocrFeatureFlag])

  // Sets appropriate snackbar message on whether @isSuccess and updates shown receipts if necessary
  const onResult = async (receiptEnum, isSuccess) => {
    setSnackbarMessage(isSuccess ? SUCCESS_MAP[receiptEnum] : ERROR_MAP[receiptEnum]);
    isSuccess ? setSuccessSnackbar(true) : setErrorSnackbar(true);
    setAction(RECEIPTS_ENUM.none);
    if (isSuccess) {
      getAndSetReceipts();
    }
  }

  const onClickDelete = (id, imageBucket) => {
    setAction(RECEIPTS_ENUM.delete);
    setDeleteReceiptId(id);
    setDeleteReceiptImageBucket(imageBucket);
  }

  const onCloseReceiptDialog = () => {
    setAction(RECEIPTS_ENUM.none);
    setUpdateReceipt({});
  }

  const onUpdate = (receipt, action) => {
    setUpdateReceipt(receipt);
    setAction(action);
  }

  const resetDelete = () => {
    setAction(RECEIPTS_ENUM.none);
    setDeleteReceiptId("");
  }

  // Delete receipt image from Storage
  const onDelete = async () => {
    let isSucceed = true;
    try {
      await deleteFromDb(deleteReceiptId);
      await deleteImage(deleteReceiptImageBucket);
    } catch (error) {
      isSucceed = false;
    }
    resetDelete();
    onResult(RECEIPTS_ENUM.delete, isSucceed);
  }

  const getReceiptRows = (isConfirmedReceipts, receipts) => {
    const zeroStateText = isConfirmedReceipts ? 'No receipts to confirm' : 'No past receipts';
    const actionEnum = isConfirmedReceipts ? RECEIPTS_ENUM.confirm : RECEIPTS_ENUM.edit;
    return receipts.length > 0 ? 
      receipts.map((receipt) => (
        <div key={receipt.id}>
          <Divider light />
          <ReceiptRow toConfirm={ocrFeatureFlag ? isConfirmedReceipts : false} receipt={receipt}
                      onEdit={() => onUpdate(receipt, actionEnum)}
                      onDelete={() => onClickDelete(receipt.id, receipt.imageBucket)} />
        </div>)
      )
      :
    <Typography variant="h5">{zeroStateText}</Typography>
  }

  return ((!authUser || isLoadingReceipts) ? 
    <CircularProgress color="inherit" sx={{ marginLeft: '50%', marginTop: '25%' }}/> :
    <div>
      <Head>
        <title>Expense Tracker</title>
      </Head>

      <NavBar />
      <Container>
        <Snackbar open={showSuccessSnackbar} autoHideDuration={1500} onClose={() => setSuccessSnackbar(false)}
                  anchorOrigin={{ horizontal: 'center', vertical: 'top' }}>
          <Alert onClose={() => setSuccessSnackbar(false)} severity="success">{snackbarMessage}</Alert>
        </Snackbar>
        <Snackbar open={showErrorSnackbar} autoHideDuration={1500} onClose={() => setErrorSnackbar(false)}
                  anchorOrigin={{ horizontal: 'center', vertical: 'top' }}>
          <Alert onClose={() => setErrorSnackbar(false)} severity="error">{snackbarMessage}</Alert>
        </Snackbar>
        { ocrFeatureFlag && 
          <div>
            <Stack direction="row" sx={{ paddingTop: "1.5em" }}>
              <Typography variant="h4" sx={{ lineHeight: 2, paddingRight: "0.5em" }}>
                NEED CONFIRMATION
              </Typography>
            </Stack>
            { getReceiptRows(true, toConfirmReceipts) }
          </div>
        }
        <Stack direction="row" sx={{ paddingTop: "1.5em" }}>
          <Typography variant="h4" sx={{ lineHeight: 2, paddingRight: "0.5em" }}>
            EXPENSES
          </Typography>
          <IconButton aria-label="edit" color="secondary" className={styles.addButton}
                      onClick={() => setAction(RECEIPTS_ENUM.add)}>
            <AddIcon />
          </IconButton>  
        </Stack>
        { getReceiptRows(false, ocrFeatureFlag ? pastReceipts : allReceipts) }
      </Container>
      <ExpenseDialog key={action} receipt={updateReceipt}
                     action={action}
                     onError={(receiptEnum) => onResult(receiptEnum, false)}
                     onSuccess={(receiptEnum) => onResult(receiptEnum, true)}
                     onCloseDialog={() => onCloseReceiptDialog()}>
      </ExpenseDialog>
      <Dialog open={action === RECEIPTS_ENUM.delete} onClose={resetDelete}>
        <Typography variant="h4" className={styles.title}>DELETE EXPENSE</Typography>
        <DialogContent>
            <Alert severity="error">This will permanently delete your receipt!</Alert>
        </DialogContent>
        <DialogActions sx={{ padding: '0 24px 24px'}}>
          <Button color="secondary" variant="outlined" onClick={resetDelete}>
              Cancel
          </Button>
          <Button color="secondary" variant="contained" onClick={onDelete} autoFocus>
              Delete
          </Button>
        </DialogActions>
      </Dialog>
    </div>
  )
}