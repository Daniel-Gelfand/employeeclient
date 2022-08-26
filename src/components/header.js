import React,{useState,useEffect} from "react";
import {Link,useLocation} from "react-router-dom";
import "./header.css"



const Header = () => {

    const [activeTab,setActiveTab] = useState("Home");

    const location = useLocation();
   useEffect(()=> {
       if (location.pathname === "/"){
           setActiveTab("Home");
       }
       else if (location.pathname === "/add"){
           setActiveTab("AddUser");
       }
       else if (location.pathname === "/about"){
           setActiveTab("About");
       }

   },[])
    return (
        <div className="header">
            <p className="logo"> Employee</p>
            <p className="logo2">Point</p>
            <div className="header-right">
                <Link to="/">
                    <p className={`${activeTab === "Home" ? "active" : ""}`} onClick={()=> setActiveTab("Home")}> Home</p>
                </Link>
                <Link to="/add">
                    <p className={`${activeTab === "AddEmployee" ? "active" : ""}`} onClick={()=> setActiveTab("AddEmployee")}> Add Employee</p>
                </Link>
                <Link to="/about">
                    <p className={`${activeTab === "About" ? "active" : ""}`} onClick={()=> setActiveTab("About")}> About</p>
                </Link>
            </div>
        </div>
    )
}

export default Header;