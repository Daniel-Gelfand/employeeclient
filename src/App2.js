import logo from './logo.svg';
import './App.css';
import {useState} from "react";

function App() {

  const [dataDetails,setDataDetails] = useState([]);
  const [ByEmail,SetByEmail] = useState({});

  const getAllEmployees = () =>{
    fetch(`http://localhost:8080/employee`,{method: 'GET', // *GET, POST, PUT, DELETE, etc.
      mode: 'cors', // no-cors, *cors, same-origin
      headers: {
        'Content-Type': 'application/json'
      }})
        .then((res) => {
          console.log(res.status)
          if (res.status == '200'){
            console.log("success")
            res.json().then(data => {
              console.log(data)
              setDataDetails(data);
            })
          }
          else{
            console.log("Failed")
          }
        })

  }

  const getDefaultEmployeeByEmail = () =>{
        fetch(`http://localhost:8080/employee/${`danoyoy@gmail.com`}`,{method: 'GET', // *GET, POST, PUT, DELETE, etc.
            mode: 'cors', // no-cors, *cors, same-origin
            headers: {
                'Content-Type': 'application/json'
            }})
            .then((res) => {
                console.log(res.status)
                if (res.status == '200'){
                    console.log("success")
                    res.json().then(data => {
                        console.log(data)
                        SetByEmail(data);
                    })
                }
                else{
                    console.log("Failed")
                }
            })

    }

  const insertDefaultEmployee = () =>{
        fetch(`http://localhost:8080/employee`, {
            method: 'POST', // *GET, POST, PUT, DELETE, etc.
            mode: 'cors', // no-cors, *cors, same-origin
            headers: {
                'Content-Type': 'application/json'
            },
            body: JSON.stringify({
                employeeFirstName: "Yakov",
                employeeLastName: "Dori",
                employeeEmail: "Yakov@Gmail.com"
            })
        }).then((res) => {
            if (res.status == '200'){
                console.log("success")
                res.json()
            }
        } )


    }

  const updateDefaultEmployee = () =>{
        fetch(`http://localhost:8080/employee/${`1`}`, {
            method: 'PUT', // *GET, POST, PUT, DELETE, etc.
            mode: 'cors', // no-cors, *cors, same-origin
            headers: {
                'Content-Type': 'application/json'
            },
            body: JSON.stringify({
                employeeFirstName: "string",
                employeeLastName: "string",
                employeeEmail: "string@Gmail.com"
            })
        }).then((res) => {
            if (res.status == '200'){
                console.log("success")
                res.json()
            }
        } )


    }

  return (
      <div className="App">
          <div>*********************************************************************************************************</div>
          <h1>getAllEmployees</h1>
          <button onClick={getAllEmployees}>getAll</button>
          <div>
              {
                  dataDetails.map(item => {
                      return (
                          <div>
                              {item.id} {item.employeeFirstName} {item.employeeLastName} {item.employeeEmail}
                          </div>
                      )
                  })
              }
          </div>
          <div>*********************************************************************************************************</div>
          <h1>Insert Default Values</h1>
          <button onClick={insertDefaultEmployee}>insertDefaultValues</button>
          <div>*********************************************************************************************************</div>
          <div>*********************************************************************************************************</div>
          <h1>Get By Email Default</h1>
          <button onClick={getDefaultEmployeeByEmail}>getEmailByDefault</button>
          <div>
                  <div>
                      {ByEmail.employeeFirstName} {ByEmail.employeeLastName} {ByEmail.employeeEmail}
                  </div>
          </div>

          <div>*********************************************************************************************************</div>
          <div>*********************************************************************************************************</div>
          <h1>Update Default</h1>
          <button onClick={updateDefaultEmployee}>updateDefaultEmployee</button>
          <div>*********************************************************************************************************</div>

      </div>
  );
}

export default App;
