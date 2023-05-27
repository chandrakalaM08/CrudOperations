import React, { useState } from 'react'
import styled from "styled-components"
import {useDispatch} from "react-redux"
import { postProduct } from '../redux/Products/action'


const initialProduct = {
  title: "",
  brand: "",
  price: "",
  image: "",
  category: "",
  gender : ""
}

const Admin = () => {

  const [product, setProduct] = useState(initialProduct)
  
  const dispatch = useDispatch()

  const handleChange = (e) => {
    const { value, name } = e.target;
    console.log(name, value)
    
    setProduct((prev) => {
      return { ...prev, [name]: name === "price" ? +value : value }
    })
  }

  const handleSubmit = (e) => {
    e.preventDefault()
    dispatch(postProduct(product))
    setProduct(initialProduct)
  }

  return (
    <DIV>
      <h2>Add Products</h2>
      <form onSubmit={handleSubmit}>
        <input type='text'
          placeholder='Image'
          value={product.image}
          onChange={(e) => handleChange(e)}
          name='image'/>
        
        <input type='number'
          placeholder='Price'
          value={product.price}
          onChange={(e) => handleChange(e)}
          name='price'/>
        
        <input type='text'
          placeholder='Brand'
          value={product.brand}
          onChange={(e) => handleChange(e)}
          name='brand'/>
        
        <input type='text'
          placeholder='Title'
          value={product.title}
          onChange={(e) => handleChange(e)}
          name='title'/>
        
        <select name='category' value={product.category}
          onChange={(e) => handleChange(e)}>
          <option value="">Select a category</option>
          <option value="top-wear">Top Wear</option>
          <option value="bottom-wear">Bottom Wear</option>
          <option value="foot-wear">Footwear</option>
        </select>

        <select name='gender' value={product.gender}
          onChange={(e) => handleChange(e)}>
          <option value="">Select Gender</option>
          <option value="male">Men</option>
          <option value="female">Women</option>
          <option value="kids">Kids</option>
        </select>

        <button type='submit'>Add Product</button>
      </form>
    </DIV>
  )
}

export default Admin

const DIV = styled.div`

padding: 20px;
width:500px;
margin:auto;
border : 1px solid black;

  form{
    display: flex;
    flex-direction: column;
    align-items: center;
  }
  
  input{
    height:30px;
    font-size: large;
    width : 90%;
     margin-top:15px;
  }
  
  select{
    height:30px;
    font-size: large;
    width : 90%;
     margin-top:15px;
  }

  button{
    height:40px;
    font-size: large;
    width : 50%;
    cursor: pointer;
    border: none;
    background-color : #eaea90;
     margin-top:15px;
     border-radius:5px
  }
`