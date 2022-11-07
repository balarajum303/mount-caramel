import { useEffect, useState } from "react"
import { Navigate } from "react-router-dom";

const Dashboard = () => {
  const [authenticated, setauthenticated] = useState(null);
  useEffect(() => {
    const loggedInUser = localStorage.getItem("authenticated");
    if(loggedInUser) {
      setauthenticated(loggedInUser);
    }
  }, []);
  if (!authenticated){
    return <Navigate replace to="/Action" />
}
  else {
    return (
      <div>
        <h1>Welcome to dashboard!</h1>
      </div>
    )
  }
};
export default Dashboard;