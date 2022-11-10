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

import { format } from 'date-fns';
import { deleteObject, getDownloadURL as getStorageDownloadURL, ref, uploadBytes } from 'firebase/storage';
import { storage } from './firebase';
 
// Bucket URL from Storage in Firebase Console
const BUCKET_URL = "";
 
// Uploads image and returns the storage bucket
export async function uploadImage(image, uid) {
  const formattedDate = format(new Date(), "yyyy-MM-dd'T'HH:mm:ss'Z'");
  const bucket = `${BUCKET_URL}/${uid}/${formattedDate}.jpg`;
  await uploadBytes(ref(storage, bucket), image);
  return bucket;
}

// Replaces existing image in storage and returns the storage bucket
export function replaceImage(image, bucket) {
  uploadBytes(ref(storage, bucket), image);
}

// Deletes existing image in storage
export function deleteImage(bucket) {
  deleteObject(ref(storage, bucket));
}

// Gets the download URL from the reference URL
export async function getDownloadURL(bucket) {
  return await getStorageDownloadURL(ref(storage, bucket));
}
