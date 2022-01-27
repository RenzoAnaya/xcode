import React from 'react';
import ReactDOM from 'react-dom';
import App from './App';
import 'bootstrap/dist/css/bootstrap.min.css';
import { getFirestore } from './config/getFirestoreApp';

getFirestore()

ReactDOM.render(
    <App />,
  document.getElementById('root')
);

