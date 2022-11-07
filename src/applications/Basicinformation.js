import { Button, FormControl } from '@material-ui/core'
import React from 'react'
import { useEffect } from 'react';
import { useState } from 'react';
import { Navigate, useNavigate } from 'react-router-dom';
import Head from './Head';
import "./Basicinformation.css"

 
const Basicinformation= () => {
  const navigate=useNavigate();
  const [errorMsg, setErrorMsg] = useState(null);
  const[programType, setProgramType] = useState('');
  const[stream, setStream] = useState('');
  const[firstPrefrence, setFirstPrefrence] = useState('');
  const[name, setName] = useState('');
  const[dateOfBirth, setDateOfBirth] = useState('');
  const[category, setCategory] = useState('');
  const[email, setEmail] = useState('');
  const[confirmEmail, setConfirmEmail] = useState('');
  const[countryCode, setCountryCode] = useState('');
  const[mobileNo, setMobileNo] = useState('');
  const [user, setUser] = useState([]);
  const [users, setUsers] = useState([]);
  const [courses, setCourses] = useState([]);
  const [categorys, setCategorys] = useState([]);
  const [basics, setBasics] = useState([]);
  
  
  const crse = (e) => {
    setFirstPrefrence(e.target.value);
}
  const pgrm = (e) => {
    setStream(e.target.value);
}
  const ptype = (e) => {
   setProgramType(e.target.value);
}
  const nme = (e) => {
    setName(e.target.value);
}
  const dmc = (e) => {
    setCategory(e.target.value.id);
}
  const eml = (e) => {
  setEmail(e.target.value);
}
  const ceml = (e) => {
  setConfirmEmail(e.target.value);
}
  const dte = (e) => {
    setDateOfBirth(e.target.value);
}
  const ccode = (e) => {
  setCountryCode(e.target.value);
}
  const mbno = (e) => {
  setMobileNo(e.target.value);
}

  const fetchData = () => {
    console.log(localStorage.getItem("token"))
    return fetch("http://localhost:8080/user/onlineApplicationSubmit/programType",{
      headers: {
        'Authorization': `Bearer ${localStorage.getItem("token")}`,
        'Content-Type': 'application/json',
         
    },
    })
          .then((response) => response.json())
          .then((data) => setUser(data));
  }
  useEffect(() => {
    fetchData();
  },[])
 
  const fetchPrgramData = () => {
    console.log(localStorage.getItem("token"))
    return fetch("http://localhost:8080/user/onlineApplicationSubmit/programs?programTypeId=1",{
      headers: {
        'Authorization': `Bearer ${localStorage.getItem("token")}`,
        'Content-Type': 'application/json',
         
    },
    })
          .then((response) => response.json())
          .then((data) => setUsers(data));
  }
  useEffect(() => {
    fetchPrgramData();
  },[])

  const fetchCourseData = () => {
    console.log(localStorage.getItem("token"))
    return fetch("http://localhost:8080/user/onlineApplicationSubmit/courses?programId=1",{
      headers: {
        'Authorization': `Bearer ${localStorage.getItem("token")}`,
        'Content-Type': 'application/json',
         
    },
    })
          .then((response) => response.json())
          .then((data) => setCourses(data));
  }
  useEffect(() => {
    fetchCourseData();
  },[])
 
  
  const fetchCategoryData = () => {
    console.log(localStorage.getItem("token"))
    return fetch("http://localhost:8080/user/onlineApplicationSubmit/residentAllCategory",{
      headers: {
        'Authorization': `Bearer ${localStorage.getItem("token")}`,
        'Content-Type': 'application/json',
         
    },
    })
          .then((response) => response.json())
          .then((data) => setCategorys(data));
  }
  useEffect(() => {
    fetchCategoryData();
  },[])

  const fetchBasicData = () => {
    console.log(localStorage.getItem("token"))
    return fetch("http://localhost:8080/user/onlineApplicationSubmit/getBasicInformation",{
      headers: {
        'Authorization': `Bearer ${localStorage.getItem("token")}`,
        'Content-Type': 'application/json',
         
    },
    })
          .then((response) => response.json())
          .then((data) => setBasics(data));
  }
  useEffect(() => {
    fetchBasicData();
  },[])

 function submitRequest() {
    const reqBody = {
      programType: programType,
      stream: stream,
      firstPrefrence: firstPrefrence,
      name: name,
      dateOfBirth: dateOfBirth,
      email: email,
      category: category,
      confirmEmail: confirmEmail,
      countryCode: countryCode,
      mobileNo: mobileNo,
    };
  
    fetch("http://localhost:8080/user/onlineApplicationSubmit/basicinformation", {
      headers: {
        'Authorization': `Bearer ${localStorage.getItem("token")}`,
        'Content-Type': 'application/json',   
    },
      method: "post",
      body: JSON.stringify(reqBody),
    })
   
    .then((response) => {
      if (response.status === 200) return response.text();
      else if (response.status === 401 || response.status === 403) {
        setErrorMsg("Please Try Again!");
      }else{
        navigate("/guidelines");
      } 
    })

    .then((data) => {
      if (data) {
        navigate("/guidelines");
      }
    });
}
  return (
    <div>
		<div>
		  <Head/>
		</div>
    <form onSubmit={submitRequest}>
   
    <div className='basic'>
      <div className="mndtry">
      <h5 className='online'>Online Application Form</h5>
     
        <p className='field'><b>Field marked with <span>*</span> symbol should be filled compulsory</b></p>
      </div>
      <div className='border'>
      <div>
        
      <label required="required" className='pt'><b><span >*</span>Program Type : </b></label>
      <select className='pt1' name="program_type" id="program_type"
      placeholder='Program Type'
      type="select"
      value={programType}
      onChange={ptype}
      required>
       <option>-Select-</option>
      { user.map((userobj)=>(
          <option list={userobj.id}>{userobj.name}</option>
        ))
       } 
      </select><br/>
    

      
      <label for="programtype" required="required" className='program'><b><span>*</span>Program : </b></label>
      <select className='program1' name="ptype" id="demo-simple-select-outlined"
        inputProps={{ 'aria-label': 'Without label' }}
        type='select'
        value={stream}
        onChange={pgrm}
        required>
           <option>-Select-</option>
        { users.map((userobj)=>(
          <option list={userobj.id}>{userobj.name}</option>
        ))
       } 
        </select><br/>

      
      <label for="programtype" className='course' required="required"><b><span>*</span>Course : </b>&nbsp;</label>
      <select className="course1" name="course" id="demo-simple-select-outlined"
          inputProps={{ 'aria-label': 'Without label' }}
          value={firstPrefrence}
          onChange={crse}
          required
        >
           <option>-Select-</option>
          { courses.map((userobj)=>(
          <option list={userobj.id}>{userobj.name}</option>
        ))
       } 
        </select><br/>
      </div>
      <div className="second3">
      
      <label className='candidate' required="required"><b><span>*</span>Candidate Name : </b></label>
      <input type="text" name="name" id="name" className="candidate1"
      placeholder='Enter Your Name'
       value={name}
       onChange={nme}
       required
        /><br/>

      
      <label for="dob" required="required" className='dob'><b><span>*</span>Date Of Birth : (DD/MM/YYYY) </b></label>
       <input className='dob1'
       type="date"
       inputMode='date'
       value={dateOfBirth}
       onChange={dte}
       required/><br/>
  
      
      <label for="domicle" required="required" className='domicile'><b><span>*</span>Domicle Status : </b></label>
      <select className='domicile1' name="domicle" id="demo-simple-select-outlined"
          inputProps={{ 'aria-label': 'Without label' }}
          value={category}
          onChange={dmc}
          required
        >
           <option>-Select-</option>
            { categorys.map((userobj)=>(
          <option key={userobj.id}>{userobj.name}</option>
        ))
       } 
        </select> <br/>
      </div>
      <div className="third3">
      
      <label for="email" required="required" className='mail'><b><span>*</span>Email : </b></label>
      <input type="text" name="email" id="email" className='mail1'
      value={email}
      placeholder="Enter Email"
      onChange={eml} 
      required 
      /> <br/> 

      <label for="email" required="required" className='cmail'><b><span>*</span>Confirm Email :  </b></label>
      <input type="text" name="email" id="email" className='cmail1'
       value={confirmEmail}
       placeholder="Confirm Email"
       onChange={ceml} 
       required /> <br/>
      <label for="countrycode" required="required" className='country'><b><span>*</span>Country code : </b></label>
      <input type="number" name="countrycode" id="code" className='country1'
      defaultValue={"+91"}
      value={countryCode}
      onChange={ccode}
      required/><br/>

      </div>
     
      <label for="mobilenumber" required="required" className='mobile'><b><span>*</span>Mobile Number : </b></label>
      <input type="number" name="mobilenumber" id="number" className='mobile1'
      label="Phone Number"
      value={mobileNo}
      onChange={mbno}
      required /><br/>
       <div className='btns'>
       <div className="submit">
      	<Button  type="submit" style={{color:'white'}}>Continue</Button> 
      </div>

      <div className="back">
      	<Button  type="submit" style={{color:'white'}} onClick={() => navigate("/dashboard")}>Back</Button> 
      </div>
       </div>
      </div>
      </div>
      </form>
      </div>
    
  )
}
export default Basicinformation