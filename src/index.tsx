import React, { useEffect } from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';
import reportWebVitals from './reportWebVitals';
import Home from './pages/home/home';
import ContactUs from './pages/contactus/contactus';
import CreateBlog from './pages/createblog/createblog';
import AllTemplate from './pages/allTemplate/allTemplate';
import Invoice from './pages/invoice/invoice';
import TermCondition from './pages/term&condition/termCondition';
import App from './App';
import { BrowserRouter } from 'react-router-dom';
import ScrollToTop from 'react-scroll-to-top';

const root = ReactDOM.createRoot(
  document.getElementById('root') as HTMLElement
);

root.render(
  <React.StrictMode>

    <BrowserRouter>
      <App />
    </BrowserRouter>      
  </React.StrictMode>
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
