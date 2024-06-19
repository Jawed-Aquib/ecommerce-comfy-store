import React from 'react'
import { Form, redirect } from 'react-router-dom';
import FormInput from './FormInput';
import SubmitBtn from './SubmitBtn';
import { customFetch, formatPrice } from '../utils';
import { toast } from 'react-toastify';
import { clearCart } from '../features/cart/cartSlice';

export const action = (store) => async ({request}) =>{

   // console.log(store)
    const formData = await request.formData()
    const {name, address} = Object.fromEntries(formData)

    const user = store.getState().userState.user
    const {cartItems, orderTotal, numItemsInCart} = store.getState().cartState
    const info = {name, address, chargeTotal:orderTotal, orderTotal:formatPrice(orderTotal),
        cartItems, numItemsInCart
    }
    try{
      const response = await customFetch.post('/orders', {data:info},{
        headers:{
            Authorization: `Bearer ${user.token}`
        }
      })
      console.log(response)
      toast.success('Order placed successfully')
      store.dispatch(clearCart())
      return redirect('/orders')
    }
    catch(error){
        const errorMsg = error?.response?.data?.error?.message || 
        'Error occurred while placing order'
        toast.error(errorMsg)
        if(error.response.status === 401){
            localStorage.removeItem('user')
            redirect('/login')
        }
    }

  //  console.log('info is', info)

    return null
}

const CheckoutForm = () => {
  return (
        <Form method='POST' className='flex flex-col gap-y-4'>
          <h4 className='font-medium text-xl'>Shipping Information</h4>
          <FormInput label='first name' name='name' type='text' />
          <FormInput label='address' name='address' type='text' />
          <div className='mt-4'>
            <SubmitBtn text='Place Your Order' />
          </div>
        </Form>
  )
}

export default CheckoutForm
