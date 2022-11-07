import { Button} from '@material-ui/core';
import { AccountCircle, Assignment, CheckBoxOutlined, Payment, Save } from '@material-ui/icons';
import React from 'react';
import {  NavLink } from 'react-router-dom';
import "./Head.css"


export default function Head() {
  return (
    <div className="heads">
			<div className="c">
				<NavLink to="/basicinformation" className="c" >
				<AccountCircle/>
        <div className="button" >
					<Button activeClassName="active">Basic information</Button>
        </div>
				</NavLink>
			</div>
			<div className="d">
				<NavLink to="/guidelines" className="d">
				<Assignment/>
        <div className="button">
					<Button>Guidelines</Button>
        </div>
				</NavLink>
			</div>
			<div className="e">
				<NavLink to="/termsconditions" className="e" >
				<CheckBoxOutlined/>
        <div className="button">
					<Button>Terms & Conditions</Button>
        </div>
				</NavLink>
			</div>
			<div className="f">
				<NavLink to="/detailedapplication" className="f">
					<Save/>
        <div className="button">
					<Button>Detailed Application</Button>
        </div>
				</NavLink>
			</div>
			<div className="g">
				<NavLink to="/payment" className="g" >
					<Payment/>
        <div className="button">
					<Button>Payment</Button>
        </div>
				</NavLink>
			</div>
    </div>
	
	
	);
}