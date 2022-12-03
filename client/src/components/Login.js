import axios from "axios"
import React, { useState } from "react"
import { useNavigate } from "react-router-dom"
import "./login.css"
const Login = () => {
    const navigate = useNavigate()
    const [data, setData] = useState({mail:"",password:""})

    function handlelogin(e){
        e.preventDefault();
        axios({
            url:"http://localhost:3003/login/login",
            method:"POST",
            headers :{},
            data:data
        }).then((res)=>{
            localStorage.setItem("authorization", res.data.authToken);
            navigate("/viewprop");
            setData({mail:"",password:""})
            console.log(res);
        }).catch((err)=>{
            alert("Invalid email and password");
            console.log(err);
        })
    }

    return (
        <div className="main">
            {console.log(data)}
            <div className="container">
                <h1>Member Login</h1>
                <form>
                    <input type="text" placeholder="Enter email" value={data.mail} onChange={(e) => setData(e.target.value)} />
                    <input type="password" placeholder="Enter Password" value={data.password} onChange={(e) => setData(e.target.value)} />
                    <div className="login" onClick={handlelogin}>Login</div>
                    <div className="or">or</div>
                    <div className="register" onClick={() => navigate("/register")}>Register</div>

                    <p>Forget password?</p>
                </form>
            </div>
        </div>
    )
}
export default Login