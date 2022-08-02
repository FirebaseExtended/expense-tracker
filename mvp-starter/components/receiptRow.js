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

import { Avatar, IconButton, Stack, Typography } from '@mui/material';
import DeleteIcon from '@mui/icons-material/Delete';
import EditIcon from '@mui/icons-material/Edit';
import {format} from 'date-fns';
import styles from '../styles/receiptRow.module.scss';

/* 
Each row with receipt information

props: receipt data
 - id (doc id of receipt)
 - uid (user id of user who submitted the receipt)
 - date
 - locationName
 - address
 - items
 - amount
 - imageUrl

 - onEdit emits to notify needing to update receipt
 - onDelete emits to notify needing to delete receipt
 */
export default function ReceiptRow(props) {
    const receipt = props.receipt;
    return (
        <div>
            <Stack direction="row" justifyContent="space-between" sx={{ margin: "1em 0" }}>
                <Stack direction="row" spacing={2} sx={{ alignItems: "center" }}>
                    <Avatar alt="receipt image" src={receipt.imageUrl} />
                    <Stack direction="row" className={styles.contentRow}>
                        <Stack direction="column" sx={{ flexGrow: 1 }}>
                            <Typography variant="h3">
                                {format(receipt.date, 'MM/dd/yy')}
                            </Typography> 
                            <Typography variant="h4">
                                ${receipt.amount}
                            </Typography>
                        </Stack>
                        <Stack direction="column" sx={{ flexGrow: 1 }}>
                            <Typography variant="h5">
                                {receipt.locationName} ({receipt.address})
                            </Typography>
                            <Typography variant="h5">
                                {receipt.items}
                            </Typography>                
                        </Stack>
                    </Stack>
                </Stack>
                <Stack direction="row" className={styles.actions}>
                    <IconButton aria-label="edit" color="secondary" onClick={props.onEdit}>
                        <EditIcon />
                    </IconButton>
                    <IconButton aria-label="delete" color="secondary" onClick={props.onDelete}>
                        <DeleteIcon />
                    </IconButton>
                </Stack>
            </Stack>
        </div>
    )
}