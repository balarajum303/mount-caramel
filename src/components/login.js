import React, { useState } from "react";
import { Grid,Paper, Avatar, TextField, Button, } from '@material-ui/core'
import { useNavigate } from "react-router-dom";
import { useUser } from "../UserProvider";
import LockOutlinedIcon from '@material-ui/icons/LockOutlined';

const Login= () => {
    const user = useUser();
    const navigate = useNavigate();
    const [username, setUsername] = useState("");
    const [password, setPassword] = useState("");
    const [errorMsg, setErrorMsg] = useState(null);
    const paperStyle={padding :40,height:'50vh',width:350, margin:"0 auto", }
    const avatarStyle={backgroundColor:'#1bbd7e'}
    const btnstyle={margin:'15px 0'}

function sendLoginRequest() {
        setErrorMsg("");
        const reqBody = {
          username: username,
          password: password,
        };
        
        fetch("http://localhost:8080/api/user/login", {
          method: "post",
          headers: {
            "Content-Type": "application/json",
            "Accept" : "application/json",
          },
          body: JSON.stringify(reqBody),
        })
        
          .then(response=>response.json())
          .then(data=>{
            if(data){
              console.log(data.authenticationToken)
              localStorage.setItem("token",data.authenticationToken)
              if(localStorage.getItem("token") !== 'undefined'){
                navigate("/dashboard");
              }else{
                setErrorMsg(
                        "Invalid Credentials!!"
                  );
              }
              }
          })
          
      }
    return(
      <div>
        <Grid>
            <Paper  style={paperStyle}>
                <Grid align='center'>
                     <Avatar style={avatarStyle}><LockOutlinedIcon/></Avatar>
                    <h2>Login</h2>
                </Grid>
                <div className="login">
                <TextField fullWidth label='Email' placeholder='Enter email' 
                value={username}
                onChange={(e) => setUsername(e.target.value)} 
                required/>
                <TextField fullWidth label='Password' placeholder='Enter password' 
                type='password' 
                value={password}
                onChange={(e) => setPassword(e.target.value)} 
                required/>
                </div>
                <div className="error">
                {errorMsg ? (
                   <div className="valerror" style={{ color: "red", fontWeight: "bold", align: "center"}}>
                      {errorMsg}
                   </div>
               ) : (
                <></>
                  )}
          </div>
                <Grid>
                <Button type='submit' color='primary' variant="contained" style={btnstyle} fullWidth onClick={() => sendLoginRequest()}>Sign in</Button>
                </Grid>
                {/* <Grid>
                  <Link href="#" underline="none"> {'Forgot Password ?'}</Link>
                </Grid> */}
            </Paper>
        </Grid>
        </div>
    )
}

export default Login