import React from 'react';
import './register.css';
import { useState } from 'react';
import { Link, useNavigate } from 'react-router-dom';
import { ToastContainer, toast } from 'react-toastify';

function Signup() {
    const [data, setData] = useState({ name:"" ,email: "", password: "" })
    const navigator = useNavigate();
    const onSubmit = (e) => {
        e.preventDefault()
     
        fetch("http://localhost:5000/user/register", {
            method: "post",
            headers: {
                "Content-Type": "application/json"
            },
            body: JSON.stringify({
                name:data.name,
                email: data.email,
                password: data.password,
               
            })

        }).then(res => res.json())
            .then((data) => {
                if (data.message === "user already exists") {
                    return alert("user already exists")
                }
                toast.success("user registered successfully")
                navigator("/");
            })
    }
    return (
        <>
            <div className='main'>
                <div className='signup-box'>
                    <div className='logo'>SIGN UP</div>
                    <form className='signup-form'>
                    <input className='signup-input' type="text" placeholder="name" name="name" required onChange={(e) => { setData({ ...data, name: e.target.value }) }} /><br />
                        <input className='signup-input' type="email" placeholder="Enter emailId" name="email" required onChange={(e) => { setData({ ...data, email: e.target.value }) }} /><br />
                        <input className='signup-input' type="password" placeholder="Enter password" name="password" required onChange={(e) => { setData({ ...data, password: e.target.value }) }} /> <br />
                       
                        <input className='signup-checkbox' type="checkbox" required /><label>I agree with <a href='#'>Terms & Conditions</a></label><br />
                        <button className='signup-btn' type='submit' onClick={onSubmit} >Continue</button>
                    </form>

                </div>

            </div>
            <ToastContainer />
        </>
    )
}
export default Signup;