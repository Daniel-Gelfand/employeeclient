import React,{useState,useEffect} from "react";
import {Link,useLocation} from "react-router-dom";
import "./header.css"



const Header = () => {

    /*
        Reload tabs when click...
     */
    const [activeTab,setActiveTab] = useState("Home");

    const location = useLocation();

    /*
        Reload tabs when change in pathname...
     */
   useEffect(()=> {
       if (location.pathname === "/"){
           setActiveTab("Home");
       }
       else if (location.pathname === "/add"){
           setActiveTab("AddEmployee");
       }
       else if (location.pathname === "/about"){
           setActiveTab("About");
       }

   },[location.pathname])
    return (
        <div className="header">
            <p className="logo"> EMPLOYEE</p>
            <p className="logo2">POINT</p>
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