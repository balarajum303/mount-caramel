import Cookies from "js-cookie";
import { useUser } from "../UserProvider";
import { Grid, Paper, Avatar, Typography, TextField, Button, InputLabel, Select, MenuItem } from '@material-ui/core'
import AddCircleOutlineOutlinedIcon from '@material-ui/icons/AddCircleOutlineOutlined';
import Radio from '@material-ui/core/Radio';
import RadioGroup from '@material-ui/core/RadioGroup';
import FormControlLabel from '@material-ui/core/FormControlLabel';
import FormControl from '@material-ui/core/FormControl';
import FormLabel from '@material-ui/core/FormLabel';
import Checkbox from '@material-ui/core/Checkbox';
import '../components/login.css';
import { useState } from 'react';
import axios from "axios";
import { Link, Route } from "react-router-dom";

const Signup = (props) => {
    const user = useUser();
    const[userName, setUserName] = useState('');
    const[email, setEmail] = useState('');
    const[mobileNumber, setMobileNumber] = useState('');
    const[password, setPassword] = useState('');
    const[cpassword, setCpassword] = useState('');
    const[passwordError, setpasswordError] = useState(false);
    const paperStyle = { padding: 20, width: 350, margin: "10 auto" }
    const headerStyle = { margin: 0 }
    const avatarStyle = { backgroundColor: '#1bbd7e' }
    const btnstyle={margin:'25px 0'}
    const marginTop = { marginTop: 5 }

    const enteredUserName = (e) => {
        setUserName(e.target.value);
    }

    const enteredEmail = (e) => {
        setEmail(e.target.value);
    }

    const enteredMobileNumber = (e) => {
      setMobileNumber(e.target.value);
    }

    const enteredPassword = (e) => {
        setPassword(e.target.value);
    }

    const enteredCpassword = (e) => {
        setCpassword(e.target.value);
    }
    
    const passwordErrorMessage = (<Typography variant="caption" color="error" gutterBottom>
        Password and Confirm Password Should be Same</Typography>
    )

    const signupFormSubmitHandler = (e) => {
        e.preventDefault();
    
    if(password === cpassword){
    const signupData = {
        userName,
        email,
        password,
        cpassword,
    };
  }
}
 function createAndLoginUser() {
    const reqBody = {
      userName: userName,
      email: email,
      mobileNumber: mobileNumber,
      password: password,
  
    };

    fetch("http://localhost:8080/api/user/register", {
      headers: {
        "Content-Type": "application/json",
      },
      method: "post",
      body: JSON.stringify(reqBody),
    })
      .then((response) => {
        if (response.status === 200)
          return Promise.all([response.json(), response.headers]);
        else return Promise.reject("Invalid register attempt");
      })
      .then(([body, headers]) => {
        user.setJwt(Cookies.get("jwt"));
      })
 
  }
    return (
        <div>
        <Grid>
            <Paper style={paperStyle}>
                <Grid align='center'>
                    <Avatar style={avatarStyle}>
                        <AddCircleOutlineOutlinedIcon />
                    </Avatar>
                    <h2 style={headerStyle}>Registration</h2>
                </Grid>
                <form>
                    <TextField fullWidth label='Name' 
                    placeholder="Enter your name"
                    name='name'
                    value={userName} 
                    onChange={enteredUserName}
                    required/>
                    <TextField fullWidth label='Email'
                     placeholder="Enter your email" 
                     name='email'
                    value={email} 
                    onChange={enteredEmail}
                    required/>
                    <TextField fullWidth label='Phone Number' 
                    placeholder="Enter your phone number"
                    onChange={enteredMobileNumber}
                    value={mobileNumber} 
                    required />
                    <TextField fullWidth label='Password'
                    type='Password' 
                    placeholder="Enter your password"
                    name='password'
                    value={password} 
                    onChange={enteredPassword}
                    required/>
                    <TextField fullWidth label='Confirm Password' 
                    placeholder="Confirm your password"
                    name='cpassword'
                    type='Password'
                    value={cpassword} 
                    onChange={enteredCpassword}
                    error={passwordError ? true : false}
                    required/>

                    {passwordError && passwordErrorMessage}

                    <Button type='submit' variant='contained' style={btnstyle} color='primary'
                    onClick={() => createAndLoginUser()} >Sign up</Button>
                </form>
            </Paper>
        </Grid>
        </div>
    )
};

export default Signup;