import {useLayoutEffect } from 'react';
import './App.css';
import Footer from './components/footer/footer';
import Header from './components/header/header';
import Home from './pages/home/home';
import { BrowserRouter as Router, Route,Link, Routes, useLocation } from 'react-router-dom';
import CreateBlog from './pages/createblog/createblog';
import AllTemplate from './pages/allTemplate/allTemplate';
import ContactUs from './pages/contactus/contactus';
import Invoice from './pages/invoice/invoice';
import TermCondition from './pages/term&condition/termCondition';
import loadjs from 'loadjs';

function App() {
  const location = useLocation();
  // Scroll to top if path changes
  useLayoutEffect(() => {
    loadjs('assets/js/owl.js', () => {});
    window.scrollTo(0, 0); 
  }, [location.pathname]);

  return (
    <>
      <Header/>
      <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/home" element={<Home />} />
          <Route path="/createblog" element={<CreateBlog />} />
          <Route path="/contactus" element={<ContactUs />} />
          <Route path="/alltemplate" element={<AllTemplate />} />
          <Route path="/invoice" element={<Invoice />} />
          <Route path="/term-condition" element={<TermCondition />} />
      </Routes>
      <Footer/>

   </>
  );
}

export default App;
