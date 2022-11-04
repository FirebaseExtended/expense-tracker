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
/**
 * @internal
 */
export declare class DBWrapper {
    private _db;
    objectStoreNames: DOMStringList;
    constructor(_db: IDBDatabase);
    transaction(storeNames: string[] | string, mode?: IDBTransactionMode): TransactionWrapper;
    createObjectStore(storeName: string, options?: IDBObjectStoreParameters): ObjectStoreWrapper;
    close(): void;
}
/**
 * @internal
 */
declare class TransactionWrapper {
    private _transaction;
    complete: Promise<void>;
    constructor(_transaction: IDBTransaction);
    objectStore(storeName: string): ObjectStoreWrapper;
}
/**
 * @internal
 */
declare class ObjectStoreWrapper {
    private _store;
    constructor(_store: IDBObjectStore);
    index(name: string): IndexWrapper;
    createIndex(name: string, keypath: string, options: IDBIndexParameters): IndexWrapper;
    get(key: string): Promise<unknown>;
    put(value: unknown, key?: string): Promise<unknown>;
    delete(key: string): Promise<unknown>;
    clear(): Promise<unknown>;
}
/**
 * @internal
 */
declare class IndexWrapper {
    private _index;
    constructor(_index: IDBIndex);
    get(key: string): Promise<unknown>;
}
/**
 * @internal
 */
export declare function openDB(dbName: string, dbVersion: number, upgradeCallback: (db: DBWrapper, oldVersion: number, newVersion: number | null, transaction: TransactionWrapper) => void): Promise<DBWrapper>;
/**
 * @internal
 */
export declare function deleteDB(dbName: string): Promise<void>;
export {};
