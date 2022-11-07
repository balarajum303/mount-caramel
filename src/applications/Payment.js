
import React,{useState} from 'react';
import Head from './Head';
import { useEffect } from 'react';

export default function Guidelines() {
  const [user, setUser] = useState([]);
  
  const fetchData = () => {
    //console.log(localStorage.getItem("token"))
    return fetch("http://localhost:8080/user/onlineApplicationSubmit/getBasicInformation",{
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
    <div dangerouslySetInnerHTML={{__html:user.studentName}}>
      {/* {user.map((element, index) => {
        return (
          <p key={index}>
            {element.templateDescription}
          </p>
        );
      })} */}
   
   
    </div>
      </div> 
  )
}
