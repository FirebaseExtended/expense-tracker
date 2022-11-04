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

import functions, { logger } from 'firebase-functions';
import vision from '@google-cloud/vision';
import admin from 'firebase-admin';

export const RECEIPT_COLLECTION = 'receipts';

admin.initializeApp();
export const readReceiptDetails = functions.storage.object().onFinalize(async (object) => {
  const imageBucket = `gs://${object.bucket}/${object.name}`;
  const client = new vision.ImageAnnotatorClient();

  const [textDetections] = await client.textDetection(imageBucket);
  const [annotation] = textDetections.textAnnotations;
  const text = annotation ? annotation.description : '';
  logger.log(text);
  
  // Parse text

  // Get user ID
  // object.name is userID/timestamp
  const re = /(.*)\//;
  const uid = re.exec(object.name)[1];

  // Going to hardcode returned text for relevant fields
  const receipt = {
    address: '123 Happy St, Bestcity, World 67890', 
    amount: '23.45',
    date: new Date(),
    imageBucket,
    items: 'best appetizer, best main dish, best dessert',
    locationName: 'Best Restaurant',
    uid
  };

  admin.firestore().collection(RECEIPT_COLLECTION).add(receipt);
});