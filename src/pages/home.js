import React,{useState,useEffect} from 'react'
import {Link} from "react-router-dom";
import "./home.css"
import axios from "axios"


const Home = () => {



    const [data,setData] = useState([]);

    const [query,setQuery] = useState("")

    useEffect(()=> {
        getEmployees();

    },[])

    const getEmployees = async () => {
        const response = await axios.get("http://localhost:8080/employee");
        if (response.status === 200){
            setData(response.data);
        }
    };

    console.log("data=>", data);

    return (

        <div style={{marginTop: "150px"}}>
            <div>
                <input placeholder="Search by email..." className="search" onChange={event => setQuery(event.target.value)}/>
            </div>

            <table className="styled-table">
                <thead>
                <tr>
                    <th style={{textAlign: "center"}}>ID </th>
                    <th style={{textAlign: "center"}}>FIRST_NAME </th>
                    <th style={{textAlign: "center"}}>LAST_NAME </th>
                    <th style={{textAlign: "center"}}>EMAIL </th>
                    <th style={{textAlign: "center"}}>ACTION </th>
                </tr>
                </thead>

                <tbody>
                    {data && data.filter((employee)=> employee.employeeEmail.toLowerCase().includes(query)).map((item,index) => {
                        return (
                            <tr key={index}>
                                {/*<th scope="row">{index + 1}</th>*/}
                                <td>{item.employeeID}</td>
                                <td>{item.employeeFirstName}</td>
                                <td>{item.employeeLastName}</td>
                                <td>{item.employeeEmail}</td>
                                <td>
                                    <Link to={`/update/${item.employeeEmail}`}>
                                        <button className="btn btn-edit">Update</button>
                                    </Link>
                                    {/*<Link to={`/view/${item.id}`}>*/}
                                    {/*    <button className="btn btn-view">View</button>*/}
                                    {/*</Link>*/}
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