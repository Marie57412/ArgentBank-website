import React from 'react';
import ReactDOM from 'react-dom/client';
import { BrowserRouter } from "react-router-dom";
import './css/main.css';
import App from './App';
import { store } from './app/store'
import { Provider } from 'react-redux'


const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
   <Provider store={store}>
 <BrowserRouter>
    <App />
 </BrowserRouter>
 </Provider>
);


