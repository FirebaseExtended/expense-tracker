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

import functions from 'firebase-functions';
import vision from '@google-cloud/vision';
import admin from 'firebase-admin';

// Ensure these are the same as the one in ../firebase/messaging
export const FCM_TOKEN_COLLECTION = 'fcmTokens';
export const FCM_TOKEN_KEY = 'fcmToken'; 

// Ensure this is the same as the one in ../firebase/firestore
export const RECEIPT_COLLECTION = 'receipts';

admin.initializeApp();
export const readReceiptDetails = functions.storage.object().onFinalize(async (object) => {
  const imageBucket = `gs://${object.bucket}/${object.name}`;
  const client = new vision.ImageAnnotatorClient();

  const [textDetections] = await client.textDetection(imageBucket);
  const [annotation] = textDetections.textAnnotations;
  const text = annotation ? annotation.description : '';
  
  // Parse text

  // Get user ID
  const re = /(.*)\//;
  const uid = re.exec(object.name)[1];

  // Check whether receipt already exists by checking for existing imageBucket so a document isn't 
  // created for the same receipt
  let doc = await admin.firestore().collection(RECEIPT_COLLECTION).where('imageBucket', '==', imageBucket).get();
  if (doc.empty) {
    const receipt = {
        address: '123 Happy St, Bestcity, World 67890', 
        amount: '23.45',
        date: new Date(),
        imageBucket,
        items: 'best appetizer, best main dish, best dessert',
        isConfirmed: false,
        locationName: 'Best Restaurant',
        uid
    }
    await admin.firestore().collection(RECEIPT_COLLECTION).add(receipt);
  }

  

});