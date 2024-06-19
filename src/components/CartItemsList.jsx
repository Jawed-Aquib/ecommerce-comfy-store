import React from 'react'
import { useSelector } from 'react-redux'
import CartItem from './CartItem'
const CartItemsList = () => {

    const cartItems = useSelector((state) =>{
        console.log(state.cartState)
        return state.cartState.cartItems
    })
  return (
    <>
      {cartItems.map((item) =>{
             return <CartItem key = {item.cartID} item = {item}/>
      })}
    </>
  )
}

export default CartItemsList
