import React from 'react'
import { Link } from "react-router-dom"
import styled from 'styled-components'

const Navbar = () => {
  return (
    <DIV>
      <h1>PRODUCT LIST</h1>

      <Link to="/">Home</Link>
      <Link to="/admin">Admin</Link>
      <Link to="/login">Login</Link>

    </DIV>
  )
}

export default Navbar


const DIV = styled.div`
  display:flex;
  align-items: center;
  gap:20px;
  margin:10px;
  border-bottom: 2px solid grey;
`