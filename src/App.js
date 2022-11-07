import React from 'react';
import './App.css';
import 'font-awesome/css/font-awesome.min.css';
import SignInOutContainer from './containers';
import { BrowserRouter, Routes, Route } from "react-router-dom";
import Dashboard from './Dashboard';
import Header from './logindashboard/Header';
import Status from './logindashboard/Status';
import Inbox from './logindashboard/Inbox';
import Sms from './logindashboard/Sms';
import Alerts from './logindashboard/Alerts';
import Head from './applications/Head';
import Basicinformation from './applications/Basicinformation';
import TermsConditions from './applications/TermsConditions';
import Detailedapplication from './applications/Detailedapplication';
import Payment from './applications/Payment';
import Guidelines from './applications/Guidelines';
import DashBoard from './logindashboard/DashBoard';
import ApplyCourse from './logindashboard/ApplyCourse';
import Firstpage from './components/firstpage';


function App() {
  return (

     
    <BrowserRouter>
    <Routes>
       <Route path="/" element={<Firstpage/>}/>
       <Route path="/login" element={<SignInOutContainer />}/>
        <Route path="/onlineApplication" element={<Header/>}/>
        <Route path="/dashboard" element={<DashBoard />}/>
        <Route path="/status" element={<Status/>}/>
        <Route path="/inbox" element={<Inbox/>}/>
        <Route path="/sms" element={<Sms/>}/> 
        <Route path="/applyCourse" element={<ApplyCourse/>}/> 
        <Route path="/alerts" element={<Alerts/>}/>
        <Route path="/courses" element={<Head/>} />
        <Route path="/basicinformation" element={<Basicinformation/>}/>
        <Route path="/guidelines" element={<Guidelines/>} />
        <Route path="/termsconditions" element={<TermsConditions/>} />
        <Route path="/detailedapplication" element={<Detailedapplication/>} />
        <Route path="/payment" element={<Payment/>} />
    </Routes>
    </BrowserRouter>
    
 
  );
}

export default App;
