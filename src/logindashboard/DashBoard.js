import React from 'react';
import Header from './Header';
import "./Header.css"


const DashBoard = () => {
  return (
    <div>
    <div>
      <Header/>
    </div>
      
    <div className="board">
      <h3 className='has'>Welcome! <br/>
      Greetings from Mount Carmel College Autonomous.
      </h3><br/>
      <pre className='pre'>
        <h6>Thank you for creating an unique ID. You may use this login page to access the status of your application, quick reference to the programmes <br/>offered at 
         Mount Carmel College Autonomous, mails,messages and alerts on the various selection and admissions process<br/> from Mount Carmel College Autonomous.</h6><br></br>
         <h6>Once you have applied for the programme, you will be able to access the above details and track your application<br/> and the status for selection process.	</h6><br/>
        <h6>You must read through the sections like Overview, Application Guidelines, Admission Process, Selection Process, Eligibility, Fee Structure,FAQ, <br/>Important Dates Section, etc., under the related links menu of every programme on the College website before filling in the<br/>
                   online application form to avoid confusion and sending the wrong documents.</h6><br/>
        <h6>
        Feel free to contact us through email.<br/><br/>
     
     <h6>We wish you the best.</h6>	
     <h6 className='office'>Office of Admissions,<br/>
     Mount Carmel College (Autonomous).</h6><br></br>
        </h6>
        </pre>
    </div>
    </div>
  )
}

export default DashBoard;
