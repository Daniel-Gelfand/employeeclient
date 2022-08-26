import React,{useState,useEffect} from "react";
import {useNavigate, useLocation, useParams} from "react-router-dom";
import axios from "axios";
import "./addEdit.css"
import {toast} from "react-toastify";


const initialState = {
    employeeFirstName: null,
    employeeLastName: null,
    employeeEmail:null
}

const AddEdit = () => {

    const [state,setState] = useState(initialState);
    const { firstName : employeeFirstName  , lastName: employeeLastName ,email: employeeEmail } = initialState;



    const [filteredData,setFilteredData] = useState(state);
    const handleSearch = (event) =>{
    }



    const {email} = useParams();

    const navigate = useNavigate();

    //TODO : search button ?
    useEffect(()=> {
        if (email){
            getSingleUserByEmail(email);
        }
    },[email])

    const getSingleUserByEmail = async (email) => {
        // const response = await axios.get(`http://localhost:8080/employee/${email}`)
        // console.log("response.data[1]= ",response.data[1])
        // console.log("response.data[1]= ",response.data[0])
        // if (response.data == '200'){
        //     setState({...response.data[0]})
        //
        // }
        try{
            const response = await axios.get(`http://localhost:8080/employee/${email}`)
            console.log("response.data[1]= ",response.data)
            if (response.data == '200'){
                setState({...response.data[0]})

            }
        }
        catch (e){
            toast.error(e.message)
        }
    }


    const handleInputChange = (e) => {
        let {name,value} = e.target;
        setState({...state,[name]:value })
    }

    const handleSubmit = (e) => {
        console.log("firstname = " ,state.employeeFirstName)
        console.log("lastname = " ,state.employeeLastName)
        console.log("email = " ,state.employeeEmail)
        e.preventDefault();
        if (state.employeeFirstName == null || state.employeeLastName == null || state.employeeEmail == null){
            toast.error("Please provide value into each input fields")
        }
        else {
            if (!email){
                console.log("addEmployee Was entered")

                addEmployee(state);
            }
            else{
                console.log("updateEmployee Was entered")
                updateEmployee(state,email);
            }
            setTimeout(()=> navigate("/"),500);
        }

    }

    const addEmployee = async (data) => {
        // const response = await axios.post("http://localhost:8080/employee",data).catch((error)=>{
        //     console.log("CATCH",error.response)
        //     console.log("CATCH",error.response.data)
        // })
        // console.log("status",response.status)
        // console.log("response data" , response.data)
        // if (response.status == '200'){
        //     toast.success("Employee Adding Successfully")
        // }
        // else {
        //     toast.error(JSON.stringify(response.data.message))
        // }
        try{
            const response = await axios.post("http://localhost:8080/employee",data)
            console.log("status",response.status)
            console.log("response data" , response.data)
            if (response.status == '200'){
                toast.success("Employee Adding Successfully")
            }
            else{
                toast.error(JSON.stringify(response.data.message));
            }

        }
        catch (e){
            toast.error(e.message);
        }
    }

    const updateEmployee = async (data,email) => {
        try{
            const response = await axios.put(`http://localhost:8080/employee/${email}`,data)
            console.log("PUT RESPONSE STATUS" ,response.status)
            if (response.status == '200'){
                toast.success("Employee Updated Successfully");
            }
            else {
                toast.error(JSON.stringify(response.data.message));
            }
        }
        catch (e){
            console.log(e)
            toast.error(e.message);
        }

    }





    return (
        <div style={{marginTop: "100px"}}>
            <form style={{margin : "auto",padding :"15px",maxWidth: "400px",alignContent:"center"}} onSubmit={handleSubmit}>
                <label htmlFor="employeeFirstName">First Name</label>
                <input type="text" id="employeeFirstName" name="employeeFirstName" placeholder="Enter Name..." onChange={handleInputChange} value={employeeFirstName} required={true}/>
                <label htmlFor="employeeLastName">Last Name</label>
                <input type="text" id="employeeLastName" name="employeeLastName" placeholder="Enter Last Name..." onChange={handleInputChange} value={employeeLastName} required={true}/>
                <label htmlFor="employeeEmail">Email</label>
                <input type="email" id="employeeEmail" name="employeeEmail" placeholder="Enter Email..." onChange={handleInputChange} value={employeeEmail} required={true}/>
                <input type="submit" value={email ? "Update" : "Add"}/>
            </form>
        </div>
    )
}

export default AddEdit;