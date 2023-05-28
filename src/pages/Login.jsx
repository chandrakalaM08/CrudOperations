import React, { useEffect, useState } from "react";
import styled from 'styled-components';
import { useDispatch, useSelector } from "react-redux";
import { login } from "../redux/Authentication/action";
import { useLocation, useNavigate } from "react-router-dom";

export const Login = ()=>{

  const [email,setEmail] = useState("")
  const [password, setPassword] = useState("")

  const location = useLocation()


  const dispatch = useDispatch()

  const auth = useSelector(store => store.AuthReducer.isAuth)
  const error = useSelector(store => store.AuthReducer.isError)

  const navigate = useNavigate()

  useEffect(() => {
    if (auth) {
      navigate(location.state, { replace: true })
    }
  }, [auth])

  const handleLogin = (e) => {
    e.preventDefault()
    let userData = {email,password}
    console.log(userData)
    dispatch(login(userData))
  }

  return <DIV auth={auth} error={error}>
    <h1>{ auth ? "Login Successfull !!" : "Login Here to Continue"}</h1>
    <form onSubmit={handleLogin}>
     <label>User Email: </label>   <input placeholder="Email"
        type="email" 
        value={email}
        onChange={(e)=>setEmail(e.target.value)}/>

      <br />
      <br/>
      <label>Password: </label>
        <input placeholder="Password"
        type="password" 
        value={password} 
        onChange={(e) => setPassword(e.target.value)} />
      <br />
      <br/>
      <button>Login</button>

    </form>

  </DIV>
}


const DIV = styled.div`

h1 {
  color: ${({auth})=> auth? "green" : "orange"}
}

   input {
    height: 40px;
    width: 400px;
    padding: 8px;
    font-size: 16px;
    border-radius: 4px;
    border : ${({error})=> error ? "1px solid red" : "1px solid green"}
  }

  button {
    height: 40px;
    width: 400px;
    padding: 8px;
    font-size: 16px;
    background-color: #007bff;
    color: #fff;
    border: none;
    border-radius: 4px;
    cursor: pointer;
  }

  border: 1px solid black;
  width: 50%;
  margin: auto;
  display: flex;
  flex-direction: column;
  gap: 15px;
  padding: 20px;


  

`;