import {Route, Routes} from "react-router-dom";
import Homepage from "../pages/homepage";
import Signup from "../pages/signup";
import Login from "../pages/login";
import Notepage from "../pages/Allnotes";

export default function Allroutes(){
    return <Routes>
        <Route path="/" element={<Homepage/>}/>
        <Route path="/register" element={<Signup/>}/>
        <Route path="/login" element={<Login/>}/>
        <Route path="/notes" element={<Notepage/>}/>
    
    </Routes>
}