
import React,{useState} from 'react';
import Head from './Head';
import { useEffect } from 'react';
import './Head.css';
import { useNavigate } from 'react-router-dom';

export default function Guidelines() {
  const [user, setUser] = useState([]);
  const navigate=useNavigate();
  const btnHandler=()=>{
    navigate("/basicinformation")

  }
  
  const fetchData = () => {
    //console.log(localStorage.getItem("token"))
    return fetch("http://localhost:8080/user/onlineApplicationSubmit/guidelines",{
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
    <div className='glines'>
    <div dangerouslySetInnerHTML={{__html:user.templateDescription}} className="zxc">
      
</div>
    <div className='bcb'>
    <button className='bali1' onClick={btnHandler} type='submit' autoFocus>Back</button>
    <button className='bali2' onClick={()=>navigate("/termsconditions")} type='submit'>Continue</button>
    </div>
      </div> 
      </div>
  )
}
