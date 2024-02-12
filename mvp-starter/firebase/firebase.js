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
// Import the functions you need from the SDKs you need

import { initializeApp } from 'firebase/app';
import { getAuth } from 'firebase/auth';
import { getFirestore } from 'firebase/firestore';
import { getStorage } from 'firebase/storage';

const firebaseConfig = {
  apiKey: 'AIzaSyBZtLc5fN-NvwCc0tqvVqIKKZyGGDT9e7Q',
  authDomain: 'ololand-project.firebaseapp.com',
  databaseURL: 'https://ololand-project-default-rtdb.firebaseio.com',
  projectId: 'ololand-project',
  storageBucket: 'ololand-project.appspot.com',
  messagingSenderId: '860252520082',
  appId: '1:860252520082:web:663f8c94d2da7d9ea9b04b',
  measurementId: 'G-KWBSXY1NM9',
};

// Initialize Firebase
initializeApp(firebaseConfig);

// Initialize Firebase Authentication and get a reference to the service
export const auth = getAuth();
export const db = getFirestore();
export const storage = getStorage();
