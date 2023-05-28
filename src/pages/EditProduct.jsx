import React, { useEffect, useState } from 'react'
import { useNavigate, useParams } from "react-router-dom"
import { useDispatch, useSelector } from "react-redux"
import { patchProduct } from '../redux/Products/action'

const EditProduct = () => {

  const { id } = useParams()

  const [price, setPrice] = useState(0)
  const [category, setCategory] = useState("")

  const products = useSelector((store => store.ProductsReducer.products))

  useEffect(() => {
    const item = products.find((element) => element.id === +id)
    setPrice(item.price)
    setCategory(item.category)
  }, [id])

  const dispatch = useDispatch()
  const navigate = useNavigate()

  const handleEdit = () => {
    let data = { price: +price, category }
    dispatch(patchProduct(id, data))
      .then((res) => {
        navigate("/")
      })
  }

  return (
    <div>
      <h1>Edit Product Id : {id}</h1>
      <input type='number' value={price} onChange={(e) => setPrice(e.target.value)} />
      <input type='text' value={category} onChange={(e) => setCategory(e.target.value)} />
      <button onClick={handleEdit}>Submit</button>
    </div>
  )
}

export default EditProduct