import React from 'react'
import { Form, useLoaderData, Link } from 'react-router-dom';
import FormInput from './FormInput';
import FormSelect from './FormSelect';
import FormRange from './FormRange'
import FormCheckbox from './FormCheckbox';
const Filters = () => {
  const { meta, params} = useLoaderData()
 // console.log('params', params)
  const {search='', category='all', company='all',
   order='a-z', price='100000', shipping=true} = params
 //console.log('params', params)
  return (
    <Form className='bg-base-200 rounded-md px-8 py-8 grid 
    gap-x-4 gap-y-8 sm:grid-cols-2 md: grid-cols-3 lg:grid-cols-4 items-center'>
      {/*Search*/}
      <FormInput type='search'
       label='search product' 
       name='search'
        size='input-sm'
        defaultValue={search}/>

 {/*categories*/}
       <FormSelect label='select category'
       name='category'
       list={meta.categories}
       size='input-sm'
       defaultValue={category}
       />
         {/*companies*/}
         <FormSelect label='select company'
       name='company'
       list={meta.companies}
       size='input-sm'
       defaultValue={company}
       />
          {/*order*/}
          <FormSelect label='sort by'
       name='order'
       list={['a-z','z-a','high','low']}
       size='input-sm'
       defaultValue={order}
       />
       {/*Slider for price*/}
       <FormRange
       label='select price'
       name='price'
       size='range-sm'
       price = {price}/>
        {/*Shipping checkbox*/}
        <FormCheckbox
        label='Free Shipping'
        name='shipping'
        size='checkbox-sm'
        defaultValue={shipping}
        />
      {/*Button*/}
      <button type='submit' className='btn btn-primary btn-sm'>
        search
      </button>
      <Link to='/products' type='button' className='btn btn-accent btn-sm'>Reset</Link>
    </Form>
  )
}

export default Filters
