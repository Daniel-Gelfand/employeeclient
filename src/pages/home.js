import React,{useState,useEffect} from 'react'
import {Link, useNavigate} from "react-router-dom";
import "./home.css"
import axios from "axios"
import {toast} from "react-toastify";


const Home = () => {

    const [allEmployees,setAllEmployees] = useState([]);

    const [query,setQuery] = useState("")



    useEffect(()=> {
        getEmployees();

    },[])

    const getEmployees = async () => {
        try{
            const response = await axios.get("http://localhost:8080/employee");
            if (response.status === 200){
                setAllEmployees(response.data);
            }
        }
        catch (e){
            toast.error(e.message)
        }
    };


    console.log("data=>", allEmployees);

    return (

        <div style={{marginTop: "150px"}}>
            <div>
                <input placeholder="Search by email..." className="search" onChange={event => setQuery(event.target.value)}/>
            </div>

            <table className="styled-table">
                <thead>
                <tr>
                    <th style={{textAlign: "center"}}>ID </th>
                    <th style={{textAlign: "center"}}>FIRST NAME </th>
                    <th style={{textAlign: "center"}}>LAST NAME </th>
                    <th style={{textAlign: "center"}}>EMAIL </th>
                    <th style={{textAlign: "center"}}>ACTION </th>
                </tr>
                </thead>

                <tbody>
                    {allEmployees && allEmployees.filter((employee)=> employee.employeeEmail.toLowerCase().includes(query))
                        .map((item,index) => {
                        return (
                            <tr key={index}>
                                <td>{item.employeeID}</td>
                                <td>{item.employeeFirstName}</td>
                                <td>{item.employeeLastName}</td>
                                <td>{item.employeeEmail}</td>
                                <td>
                                    <Link to={`/update/${item.employeeEmail}`}>
                                        <button className="btn btn-edit">Update</button>
                                    </Link>
                                </td>
                            </tr>
                        );
                    })}
                </tbody>

            </table>

        </div>
    )
}

export default Home;