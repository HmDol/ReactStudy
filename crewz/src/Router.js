import {Component} from "react";
import { Route, Routes } from "react-router-dom";
import Home from "./Component/Moim/Home";
import SomoimHome from "./Component/Somoim/SomoimHome";
import Temp from "./Component/temp";

class Router extends Component{
    render(){
        return(
            <Routes>
                <Route exact path="/moim/home" element={<Home/>}/>
                <Route path="/somoim/home" element={<SomoimHome/>}/>
                <Route path="/temp" element={<Temp/>}/>
            </Routes>
        )
    }
} 
export default Router;  