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

import { activate, isSupported, fetchAndActivate, fetchConfig, getValue } from 'firebase/remote-config';
import { remoteConfig } from './firebase';

export let ocrFeatureFlag = false;

export async function initRemoteConfig() {
    const rc = await remoteConfig();
    if (rc) {
        rc.settings.minimumFetchIntervalMillis = 0;
        rc.defaultConfig = {
            "ocr_feature_flag": false
        };

        // fetchConfig(); // values set on backend are fetched and cached
        // activate(); // make fetched values available to app
        await fetchAndActivate(rc);
        ocrFeatureFlag = getValue(rc, "ocr_feature_flag").asBoolean();
    }
}
initRemoteConfig();