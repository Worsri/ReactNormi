import React  from "react";
import Navbar from "./components/Navbar";
import Footer from "./components/Footer";
import Registration from "./components/Registration";
import { BrowserRouter, Route, Routes } from "react-router-dom";
import Login from "./components/Login";
import Aboutus from "./adminPages/Aboutus";
import Home from "./components/Home";
import FAQs from "./adminPages/FAQs";
import AdminHome from "./adminPages/AdminHome";




function App() {
 
  
  return (
    <div >
      
      <BrowserRouter>
          <Navbar />
        <Routes>
          <Route path="/" element={<Home/>}/>
          <Route path="pages/Login.js" element={<Login/>}/>
          <Route path="pages/Aboutus.js" element={<Aboutus />} />
          <Route path="/registration" element={<Registration />} />
          <Route path="/adminzone/adminPages" element={<AdminHome/> } />
          <Route path="pages/FAQs.js" element={<FAQs />} />
          
           
         
        </Routes>
        <Footer />
      </BrowserRouter>
    </div>
  );
}

export default App;
