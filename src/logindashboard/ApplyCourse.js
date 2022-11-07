import { Button } from "@material-ui/core";
import React from "react";
import { useNavigate } from "react-router-dom";
import Header from "./Header";
import './Header.css'

export default function ApplyCourse() {
	const navigate=useNavigate();
	return (
		<div>
		<div>
		  <Header/>
		</div>
		<div className="tableapply">
		<div className="apply">
			<h5>Click on the below button to Apply for a New Course</h5>
			<div className="but">
			<Button type="submit" style={{color:'white'}} onClick={() => navigate("/basicinformation")}>Apply Now</Button>
			</div>
		</div>
		</div>
		</div>
	);
}
