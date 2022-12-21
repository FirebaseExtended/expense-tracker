# Expense Tracker

This repository contains sample code for some videos on the [Firebase
YouTube channel](https://www.youtube.com/c/firebase).

## How to use this project

This is an expense tracker web app used in the "Firebase Codealong: Build and Manage a Web App" video series. Feel free to clone to follow along.

We make this code available as-is.


``` shell
git clone https://github.com/FirebaseExtended/expense-tracker
cd expense-tracker
```

If you want to use the finished code, you will have to do the following before it'll work:
1. In `firebase/firebase.js`, find `firebaseConfig` and update the variable with your [project configuration](https://firebase.google.com/docs/web/setup). 
2. In `firebase/storage.js`, find `BUCKET_URL` and set it to the `storageBucket` from your `firebaseConfig` variable.
3. `npm install` in the home directory ("home directory" being any folder inside expense-tracker, ie expense-tracker/mvp) as well as the functions floder.

## License

The contents of this repository are licensed under the
[Apache License, version 2.0](http://www.apache.org/licenses/LICENSE-2.0).
