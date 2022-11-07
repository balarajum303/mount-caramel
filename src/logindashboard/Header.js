import { Button, InputLabel, TextField } from "@material-ui/core";
import { Dashboard, DataUsage, InboxOutlined, Message, NotificationsActive } from "@material-ui/icons";
import { DomainVerification, Logout } from "@mui/icons-material";
import React from "react";
import { NavLink } from "react-router-dom";
import Inbox from "./Inbox";

export default function Header() {
	return (
	<div>
    <div className="header">
		<nav className="navbar justify-content-center">
			<div className="nav-link">
				<NavLink to="/dashboard" className="nav-link">
					<Dashboard/>
        <div className="button">
					<Button>DashBoard</Button>
        </div>
				</NavLink>
			</div>
			<div className="nav-link">
				<NavLink to="/status" className="nav-link">
					<DataUsage/>
        <div className="button">
					<Button>Status</Button>
        </div>
				</NavLink>
			</div>
			<div className="nav-link">
				<NavLink to="/inbox" className="nav-link"  element={<Inbox />}>
					<InboxOutlined/>
        <div className="button">
					<Button>Inbox</Button>
        </div>
				</NavLink>
			</div>
			<div className="nav-link">
				<NavLink to="/sms" className="nav-link" >
					<Message/>
        <div className="button">
					<Button>SMS</Button>
        </div>
				</NavLink>
			</div>
			<div className="nav-link">
				<NavLink to="/alerts" className="nav-link" >
					<NotificationsActive/>
        <div className="button">
					<Button>Alerts</Button>
        </div>
				</NavLink>
			</div>
			<div className="nav-link">
				<NavLink to="/applyCourse" className="nav-link" >
					<DomainVerification/>
        <div className="button">
					<Button>ApplyCourse</Button>
        </div>
				</NavLink>
			</div>
			<div className="nav-link">
				<NavLink
					to="/login"
					onClick={() => localStorage.clear()}
					className="nav-link"
					>
					<Logout/>
          <div className="button">
					<Button>Logout</Button>
          </div>
				</NavLink>
			</div>		
		</nav>
    </div>
	</div>
	
	);
}
