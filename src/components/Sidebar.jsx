import React, { useEffect, useState } from 'react'
import styled from 'styled-components'
import { useSearchParams } from "react-router-dom"

const Sidebar = () => {

  const [searchParams, setSearchParams] = useSearchParams()

  const initialCategory = searchParams.getAll("category")
  const initialGender = searchParams.getAll("gender")
  const initialOrder = searchParams.get("order")

  const [category, setCategory] = useState(initialCategory || [])
  const [gender, setGender] = useState(initialGender || [])

  const [order, setOrder] = useState(initialOrder || "")


  useEffect(() => {
    let params = {
      gender,
      category,

    }

    order && (params.order = order)
    setSearchParams(params)

  }, [category, gender, order])


  const handleCategory = (e) => {

    const { value } = e.target;

    let newCategory = [...category]

    if (newCategory.includes(value)) {
      newCategory = newCategory.filter((element) => element !== value)
    }
    else {
      newCategory.push(value)
    }

    setCategory(newCategory)

  }

  const handleGender = (e) => {

    const { value } = e.target;

    let newGender = [...gender]

    if (newGender.includes(value)) {
      newGender = newGender.filter((el) => el !== value)
    }
    else {
      newGender.push(value)
    }

    setGender(newGender)

  }


  // Sorting

  const handleSortOrder = (e) => {
    const { value } = e.target;
    setOrder(value)
  }


  return (
    <DIV>
      <h3>Filter by Category</h3>
      <div>
        <input type='checkbox' value={"top-wear"}
          onChange={handleCategory}
          checked={category.includes("top-wear")} />
        <label>Top Wear</label>
      </div>
      <div>
        <input type='checkbox' value={"bottom-wear"}
          onChange={handleCategory}
          checked={category.includes("bottom-wear")} />
        <label>Bottom Wear</label>
      </div>
      <div>
        <input type='checkbox' value={"foot-wear"}
          onChange={handleCategory}
          checked={category.includes("foot-wear")} />
        <label>Footwear</label>
      </div>

      <br />
      <h3>Filter by Gender</h3>
      <div>
        <input type='checkbox' value={"male"}
          onChange={handleGender}
          checked={gender.includes("male")} />
        <label>Men</label>
      </div>
      <div>
        <input type='checkbox' value={"female"}
          onChange={handleGender}
          checked={gender.includes("female")} />
        <label>Women</label>
      </div>
      <div>
        <input type='checkbox' value={"kids"}
          onChange={handleGender}
          checked={gender.includes("kids")} />
        <label>Kids</label>
      </div>

      <br />
      <h3>Sort by Price</h3>
      <div onChange={handleSortOrder}>
        <div>
          <input type='radio' name='order' value={"asc"} defaultChecked={order === "asc"} />
          <label>Ascending</label>
        </div>
        <div>
          <input type='radio' name='order' value={"desc"} defaultChecked={order === "desc"} />
          <label>Descending</label>
        </div>
      </div>

    </DIV>
  )
}

export default Sidebar


const DIV = styled.div`
  display: flex;
  flex-direction: column;
  align-items: baseline;
  padding: 15px;
  border-right: 1px solid black;
  min-height: 80vh;
`