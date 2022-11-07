import React, { Fragment } from 'react';
import Head from './Head';
import './Detailedapplication.css';
import { useState } from 'react';

export default function Detailedapplication() {
  const[dateOfBirth, setDateOfBirth] = useState('');
  const[cname, setCname] = useState('');
  const[aadharNo, setAadharNo] = useState('');
  const[country, setCountry] = useState('');
  const[blood, setBlood] = useState('');

  const cnme = (e) => {
    setCname(e.target.value);
}
  const dob = (e) => {
    setDateOfBirth(e.target.value);
}
  const adhno = (e) => {
    setAadharNo(e.target.value);
}
  const cntry = (e) => {
    setCountry(e.target.value);
}
  const bld = (e) => {
    setBlood(e.target.value);
}  





  const fetchNames = async () => {
    try {
      const res = await Promise.all([
        fetch("./names.json"),
        fetch("./names-mid.json"),
        fetch("./names-old.json")
      ]);
      const data = await Promise.all(res.map(r => r.json()))
      console.log(data.flat());
    } catch {
      throw Error("Promise failed");
    }
};
  
return (
  <div>
    <div>
      <Head/>
    </div>
    <div className='detail'>
      <h4 className='man'>* Mandatory Fields</h4><br/><h4 className='do'>Do Not Enter(+)In Phone Number Fields</h4>
      <nav className='nav1'>

        <div className='div1'>
          <Fragment>
            <label>Programtype :</label>

            <label>Program :</label>


            <label>First Preference :</label>

          </Fragment>
          </div>

      </nav>

      <nav className='nav2'>
        <div className='div2'>
        
          <h5 className='students'>Students Basic Info</h5>
         
          <Fragment className="f1">
          <label><span>*</span>Candidate's Name as printed on CLASS 10(SSLC) Records :</label>
          <input className='text1' type="text" name="name" onChange={cnme}
          value={cname} required="required" /><br/>
            <label><span>*</span>Date Of Birth(DD/MM/YYYY) : </label>
            <input type="date" id="birthday" name="birthday" value={dateOfBirth}
            onChange={dob} className='date' required="required"/><br/>
           
            <label><span>*</span>Country Of Citizenship :</label>
            <input className='text1' type="text" name="countryName" value={country}
             onChange={cntry} required="required" /><br/>
            <label><span>*</span>Aadhar No (12 digits) :</label>
            <input className='text1' type="number" name="name" value={aadharNo}
             onChange={adhno} required="required" /><br/>
            <div className='nhg'><label><span>*</span>Gender:</label>
            <input type="radio" className='text2' name="gender" value="male" required="required"/> Male&nbsp;
            <input className='text3' type="radio" name="gender" value="female"/> Female<br/></div>
            <div className='nhj'><label><span>*</span>Participated in sports/ extra curricular activity :</label>
            <input type="radio" className='text4' name="ok" value="yes" required="required"/> Yes&nbsp;&nbsp;
            <input className='text5' type="radio" name="ok" value="not ok" required="required"/> No</div><br/>
            <div className='nhg'><label><span>*</span>Are you differently abled? :</label>
            <br/><input type="radio" className='text6' name="abled" value="yes" required="required"/> Yes&nbsp;&nbsp;
            <input className='text7' type="radio" name="abled" value="no" required="required"/> No</div><br/>
            <label><span>*</span>Blood :</label> 
            <select required="required" className='text8'
            value={blood} onChange={bld}>
              <option>-Select-</option>
            <option>A+</option>
            <option>A-</option>
            <option>B+</option>
            <option>B-</option>
            <option>AB+</option>
            <option>AB-</option>
            <option>O+</option>
            <option>O-</option></select><br/>
            </Fragment>
           
          </div>
          
            <h5 className='birth'>Birth Place Details</h5>
          <div className='div3'>
            <label><span>*</span>Place :</label>
            <label><span>*</span>Country :</label>
            <label><span>*</span>State :</label>
          </div>
          
          <h5 className='birth'>Resident Info</h5>
          <div className='div3'>
            <label><span>*</span>Student Domicile (Domicile Status):</label>
            <label><span>*</span>Religion:</label>
            <label><span>*</span>Category :</label>
          </div>

          <div className='div4'>
            <Fragment className="f3">1.<h6 className='k3'>Students Claiming seats under any of the category other than General Merit and OC are required to upload valid income and Caste certificate.</h6></Fragment>
            <Fragment className="f3">2.<h6 className='k3'>Non Karnataka students Claiming reservation under backward community are required to select OBC.</h6></Fragment>
            <Fragment className="f3">3.<h6 className='k3'>Roman Catholic candidates are required to upload Baptism Certificate.</h6></Fragment>
            <Fragment className="f3">4.<h6 className='k3'>Candidates claiming admission under EX-Serviceman quota are required to upload parents Discharge Certificate from Defence services.</h6></Fragment>

            <label className="lable"><span>*</span>Belongs To :</label>
            <input type="radio" className='text2' name="country" value="Rural" required="required"/> Rural
            <input className='text3' type="radio" name="country" value="Urban" required="required"/>Urban<br/>
            <div>
            <label className="lable1">Phone :</label>
            <div className='lkj'>
            <label>Country Code(+) : </label>  
            <input className='class' type="text" name="country code" defaultValue="+91"/><br/>
             <nav className='areacode'><label>Area Code : </label>
              <input className='class' type="number" name="pin" maxLength={6} /></nav><br/>
             <nav className='areacode1'><label>Phone No: </label> 
             <input className='class' type="number" placeholder='Enter your phone number'/></nav><br/>
            </div>
            <div>
            <label className="lable1"><span>*</span>Student Mobile :</label>
            <div className='lkj'>
            <label>Country Code(+) :  </label>
             <input className='class' type="text" required="required" name="country code" defaultValue="+91"/><br/>
             <nav className='areacode'><label>Mobile No : </label>
              <input className='class' required="required" type="number" placeholder='Enter your mobile number'/></nav><br/>
            </div>
            </div>
            </div>
            <label className='lable3'><span>*</span>e-mail : </label><br/>
            <label className='lable3'><span>*</span>Re-confirm e-mail : </label>
          </div>
          <h5 className='birth'>Extra Details</h5>
          <div className='div5'>
          <label className='lable'><span>*</span>Mother Tongue :</label>
          <select className='texts' required="required">
            <option>-Select-</option>
            <option>English</option>
            <option>Karnataka</option>
            <option>Telugu</option>
            </select><br/>
          </div>
           <h5 className='birth'>Current Address</h5>
          <div className='div6'>
          <label className='label8'><span>*</span>Address Line1 :</label>
          <input className='text18' type="address" name="address" required="required" /><br/>
            <label className='label8'><span>*</span>Address Line2 :</label>
            <input className='text18' type="text" name="text" required="required" /><br/>
            <label className='label8'><span>*</span>Taluk :</label>
            <input className='text19' type="text" name="taluk" required="required" /><br/>
            <label className='label8'><span>*</span>District :</label>
            <input className='text20' type="text" name="District" required="required" /><br/>
            <label className='label8'><span>*</span>City :</label>
            <input className='text21' type="text" name="City" required="required" /><br/>
            <label className='label8'><span>*</span>Country :</label>
            <input className='text22' type="text" name="Country" required="required" /><br/>
            <label className='label8'><span>*</span>State :</label>
            <input className='text23' type="text" name="state" required="required" /><br/>
            <label className='label8'><span>*</span>Zip Code :</label>
            <input className='text24' type="text" name="text" required="required" /><br/>
           <h5 className='same'>Is permanent Address same as Current Address ?</h5> <div className='permanent'><input type="radio"  name="same" value="accept"/> Yes <input  type="radio" name="same" value="decline"/>No<br/></div>
           </div>
          <h5 className='birth'>Permanent Address</h5>
          <div className='div7'>
          <label className='label8'><span>*</span>Address Line1 :</label>
          <input className='text18' type="address" name="address" required="required" /><br/>
            <label className='label8'><span>*</span>Address Line2 :</label>
            <input className='text18' type="text" name="text" required="required" /><br/>
            <label className='label8'><span>*</span>Taluk :</label>
            <input className='text19' type="text" name="taluk" required="required" /><br/>
            <label className='label8'><span>*</span>District :</label>
            <input className='text20' type="text" name="District" required="required" /><br/>
            <label className='label8'><span>*</span>City :</label>
            <input className='text21' type="text" name="City" required="required" /><br/>
            <label className='label8'><span>*</span>Country :</label>
            <input className='text22' type="text" name="Country" required="required" /><br/>
            <label className='label8'><span>*</span>State :</label>
            <input className='text23' type="text" name="state" required="required" /><br/>
            <label className='label8'><span>*</span>Zip Code :</label>
            <input className='text24' type="text" name="text" required="required" /><br/>
            </div>
            <h5 className='birth'>Educational Info</h5>
          
       

      </nav>
   
    
    
    
    </div>

    
  </div>
)
}
