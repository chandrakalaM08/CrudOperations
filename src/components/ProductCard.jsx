import React from 'react'
import { useDispatch } from 'react-redux'
import { Link } from 'react-router-dom'
import styled from 'styled-components'
import { deleteProduct, getProducts } from '../redux/Products/action'
const ProductCard = ({ id, title, brand, price, image, category, gender }) => {



  const dispatch = useDispatch()

  const handleDelete = () => {
    dispatch(deleteProduct(id))
      .then((res) => {
        dispatch(getProducts())
      })
  }

  return (
    <DIV>
      <img src={image} alt='pic' />
      <h3>{title}</h3>
      <p>Price : {price}</p>
      <p>Category : {category}</p>
      <p>Brand : {brand}</p>
      <p>Gender : {gender}</p>

      <button><Link to={`edit/${id}`}>Edit</Link></button>
      <button style={{ marginLeft: "20px" }} onClick={handleDelete}>❌</button>
    </DIV>
  )
}

export default ProductCard


const DIV = styled.div`
  img{
    width:50%
  }

  border: 1px solid blue;
  padding:5px;
  margin: 10px
`
