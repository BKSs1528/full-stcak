import React, { useState } from "react"
import { useNavigate } from "react-router-dom"
import axios from "axios"
import "./register.css"
const Register = () => {
  const navigate = useNavigate()
  const [user, setUser] = useState({
    mail: "",
    password: "",
    reenterPassword: ""
  })
  let email = user.mail
  let pwd = user.password
  console.log(email, pwd);
  function handlesignup(e) {
    e.preventDefault();
    // if (email.length === 0) {
    //   alert("Enter your email");
    // } else if (pwd.length < 7) {
    //   alert("Minimum 7 letters required for password");
    // } else if (user.password !== user.reenterPassword) {
    //   alert("Password does not match")
    // } else {
    //   axios({
    //     url: "http://localhost:3001/register/reg",
    //     method: "POST",
    //     headers: {},
    //     data: user
    //   }).then((res) => {
    //     navigate("/");
    //     setUser({ mail: "", password: "", confirmpassword: "" })
    //     console.log(res);
    //     alert("User craeted sucessfully")
    //   }).catch((err) => {
    //     alert("User Already Exist")
    //   })
    // }
    axios({
      url: "http://localhost:3003/register/reg",
      method: "POST",
      headers: {},
      data: user
    }).then((res) => {
      console.log(res);
      navigate("/");
      setUser({ mail: "", password: "", confirmpassword: "" })
      // console.log(res);
      alert("User craeted sucessfully")
    }).catch((err) => {
      alert("User Already Exist", err)
    })
  }


  return (
    <div className="main1" >
      {/* {console.log(user)} */}
      <div className="container">
        <h1>Member Register</h1>
        <form onSubmit={handlesignup}>
          <input type="text" placeholder="Enter email" value={user.mail} onChange={(e) => setUser(e.target.value)} />
          <input type="password" placeholder="Enter Password" value={user.password} onChange={(e) => setUser(e.target.value)} />
          <input type="password" placeholder="Reenter Password" value={user.reenterPassword} onChange={(e) => setUser(e.target.value)} />
          {/* <button className="register" onClick={handlesignup}>Register</button> */}
          <input className="register" value="Signup" type="submit" />
          <p onClick={() => navigate("/")}>Member Login</p>
        </form>
      </div>
    </div>
  )
}
export default Register 