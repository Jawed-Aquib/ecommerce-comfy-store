import React from 'react'

import { formatPrice, generateAmountOptions } from '../utils';
import { removeItem, editItem } from '../features/cart/cartSlice';
import { useDispatch } from 'react-redux';
const CartItem = ({item}) => {
    const dispatch = useDispatch()
    const removeItemFromTheCart = () =>{
        dispatch(removeItem({cartID}))
    }

    const handleAmount = (e) =>{
        dispatch(editItem({cartID,
             amount:parseInt(e.target.value)}))
    }
    const {cartID, company, image, price,
        productColor, productID, title, amount} = item
  return (
    
    <article key={cartID} className='mb-12 flex flex-col gap-y-4 sm:flex-row
    flex-wrap borber-b border-base-300 pb-6 last:border-b-0'>

        {/**image */}
        <img src={image} alt={title} className='h-24 w-24 rounded-lg sm:h-32 sm:w-32
        object-cover'/>
        
           <div className='sm:ml-16 sm:w-48'>
             {/**title */}
         <h3 className='capitalise font-medium'>{title}</h3>
         {/**company */}
         <h4 className='mt-2 capitalise text-sm text-neutral-content'>{company}</h4>
           {/**color */}
           <p className='mt-4 text-sm capitalize flex items-center gap-x-2
           '>
            Color:
            <span className='badge badge-sm' style={{backgroundColor: productColor}}>
            </span>
           </p>
           </div>
           <div className='sm:ml-12'>
             {/**amount */}
             <div className='form-control max-w-xs'>
                <label htmlFor='amount' className='label p-0'>
                 <span className='label-text'>Amount</span>
                 <select name='amount' id='amount'
                 className='mt-2 ml-2 select select-base select-bordered select-xs'
                 value={amount}
                 onChange={handleAmount}
                 >
                  {generateAmountOptions(amount + 5)}
                 </select>
                </label>

             </div>
                   {/**remove */}
                   <button className='mt-2 link link-primary link-hover'
                   onClick={removeItemFromTheCart}>
                    remove

                   </button>
           </div>
        
              
                       {/**price */}
                       <p className='font-medium sm:ml-auto '>
                        {formatPrice(price)}
                       </p>
        </article>
      
   
  )
}

export default CartItem
