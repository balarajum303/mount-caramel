
import React,{useState} from 'react';
import Head from './Head';
import { useEffect } from 'react';
import './Head.css';
import { useNavigate } from 'react-router-dom';

export default function Guidelines() {
  const [user, setUser] = useState([]);
  const[agree,setAgree]=useState(true);
  const navigate=useNavigate();
  const checkHandler=()=>{
    
    setAgree(!agree)
  }
  const btnHandler=()=>{
    if(!agree){
      navigate("/detailedapplication");
    }
    else{
      alert("Please accept Terms & Conditions");
    }
    
  }
 
  
  const fetchData = () => {
    //console.log(localStorage.getItem("token"))
    return fetch("http://localhost:8080/user/onlineApplicationSubmit/termsAndConditions",{
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
  console.log(user.templateDescription)
  return (
    <div>
		<div>
		  <Head/>
		</div>
    <div className='terms'>
    <div className='term' dangerouslySetInnerHTML={{__html:user.templateDescription}}>
    </div>
    <div className='checkbox'>
    <input type="checkbox" onChange={checkHandler} required="required" className="box"></input><h6 className="nm">Yes. I have understood the application fee terms and procedure.</h6>
    </div> 
    <div className='buttons'>
        <button type="submit"  className="button1" onClick={btnHandler}>Accept</button>
        <button type="submit" className="button2" onClick={()=>navigate("/guidelines")}>Decline</button>
      </div> 
      </div>
      </div>
  )
}
