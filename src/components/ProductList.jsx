import React, { useEffect } from 'react'
import { useSelector, useDispatch } from "react-redux"
import styled from "styled-components"
import {getProducts} from "../redux/Products/action"
import ProductCard from './ProductCard'
import {useSearchParams} from "react-router-dom"

const ProductList = () => {

  const [searchParams] = useSearchParams()

  let paramObj = {
    params: {
      category: searchParams.getAll("category"),
      gender : searchParams.getAll("gender")
      
   }
 }

  const items = useSelector((store) => store.ProductsReducer.products)
  
  const dispatch = useDispatch()

  useEffect(() => {
  dispatch(getProducts(paramObj))
  }, [searchParams])
  


  return (
    <DIV>
      {
        items?.map((ele) => {
          return <ProductCard {...ele} key={ele.id} />
        })
     }
    </DIV>
  )
}

export default ProductList


const DIV = styled.div`
  display: grid;
  grid-template-columns: repeat(4,1fr);
  gap: 20px;

`