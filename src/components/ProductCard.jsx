import React from 'react'
import styled from 'styled-components'
const ProductCard = ({ id, title, brand, price, image, category, gender }) => {
  
  return (
    <DIV>
      <img src={image} alt='pic' />
      <h3>{title}</h3>
      <p>Price : {price}</p>
      <p>Category : {category}</p>
      <p>Brand : {brand}</p>
      <p>Gender : {gender}</p>
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
