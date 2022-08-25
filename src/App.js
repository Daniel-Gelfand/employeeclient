import logo from './logo.svg';
import './App.css';
import {useState} from "react";
// import {BrowserRouter, Switch, Route,} from "react-router-dom";
import {
    BrowserRouter as Router,
    Route,
    Routes
} from "react-router-dom";
import  {ToastContainer} from 'react-toastify'
import 'react-toastify/dist/ReactToastify.css';
import Home from "./pages/home";
import addEdit from "./pages/addEdit";
import view from "./pages/view";
import about from "./pages/about";
import AddEdit from "./pages/addEdit";
import View from "./pages/view";
import About from "./pages/about";
import Header from "./components/header";

function App() {

    return (
        <Router>
            <div className="App">
                <Header/>
                <ToastContainer position="top-center"/>
                <Routes>
                    <Route exact path="/" element={<Home/>}/>
                    <Route exact path="/add" element={<AddEdit/>}/>
                    <Route exact path="/update/:email" element={<AddEdit/>}/>
                    <Route exact path="/view/:id" element={<View/>}/>
                    <Route exact path="/about" element={<About/>}/>
                </Routes>
            </div>
        </Router>
  );
}

export default App;
