import { useLayoutEffect } from "react";
import "./App.css";
import Footer from "./components/footer/footer";
import Header from "./components/header/header";
import Home from "./pages/home/home";
import { Route, Routes, useLocation } from "react-router-dom";
import loadjs from "loadjs";
import TermCondition from "./pages/aboutus/aboutus";
import AllTemplate from "./pages/allTemplate/allTemplate";
import ContactUs from "./pages/contactus/contactus";
import CreateBlog from "./pages/createblog/createblog";
import Invoice from "./pages/invoice/invoice";
import PricePlan from "./pages/pricePlan/pricePlan";
import AboutUs from "./pages/aboutus/aboutus";
import Blog from "./pages/blog/blog";
import Career from "./pages/career/carrer";
import Subscriptions from "./pages/subscriptions/subscriptions";
import Successful from "./pages/successfull/successfull";

function App() {
  const location = useLocation();
  // Scroll to top if path changes
  useLayoutEffect(() => {
    loadjs("assets/js/owl.js", () => {});
    window.scrollTo(0, 0);
  }, [location.pathname]);

  return (
    <>
      <Header />
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/createblog" element={<CreateBlog />} />
        <Route path="/contactus" element={<ContactUs />} />
        <Route path="/alltemplate" element={<AllTemplate />} />
        <Route path="/invoice" element={<Invoice />} />
        <Route path="/pricePlans" element={<PricePlan />} />
        <Route path="/term-condition" element={<TermCondition />} />
        <Route path="/aboutus" element={<AboutUs />} />
        <Route path="/blog" element={<Blog />} />
        <Route path="/career" element={<Career />} />
        <Route path="/subscriptions" element={<Subscriptions />} />
        <Route path="/successfull" element={<Successful />} />
      </Routes>
      <Footer />
    </>
  );
}

export default App;
