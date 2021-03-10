import React from 'react';
import ReactDOM from 'react-dom';
import './styles/index.css';
import './styles/tailwind.css';
import App from './App';
import reportWebVitals from './reportWebVitals';
import firebase from 'firebase';

import { firebaseConfig } from './firebase';
import { FirebaseAuthProvider } from '@react-firebase/auth';
import { FirestoreProvider } from '@react-firebase/firestore';

import { CometChat } from '@cometchat-pro/chat';

const APP_ID = '299185ded2c0f1d';
const REGION = 'eu';

const appSetting = new CometChat.AppSettingsBuilder()
  .subscribePresenceForAllUsers()
  .setRegion(REGION)
  .build();

CometChat.init(APP_ID, appSetting).then(
  () => {
    console.log('Initialization completed successfully');

    ReactDOM.render(
      <React.StrictMode>
        <FirebaseAuthProvider {...firebaseConfig} firebase={firebase}>
          <FirestoreProvider {...firebaseConfig} firebase={firebase}>
            <App />
          </FirestoreProvider>
        </FirebaseAuthProvider>
      </React.StrictMode>,
      document.getElementById('root')
    );
  },
  (error) => {
    console.log('Initialization failed with error:', error);
    // Check the reason for error and take appropriate action.
  }
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
