import React from 'react'
import { useSelector, useDispatch } from 'react-redux'
import decrement from '../actions/decrement'

const Alter = () => {
  const disPatch = useDispatch()
  const state = useSelector((state) => state.cart)

  return (
    <div>
      <h1>Value {state}</h1>
      <button
        onClick={() => {
          disPatch(decrement())
        }}
      >
        -
      </button>
    </div>
  )
}

export default Alter
