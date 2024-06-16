import React from 'react';
import { Filters, PaginationContainer, ProductsContainer } from '../components';
import { customFetch } from '../utils';
import { useLoaderData } from 'react-router-dom';

const url = '/products';
export const loader = async ({ request }) => {
  console.log('request is', request)
  const params = Object.fromEntries([...new URL(request.url).searchParams.entries()])
  console.log(params)
  const response = await customFetch(url,{params});

  const products = response.data.data;
  const meta = response.data.meta;
  console.log('params', params)
  return { products, meta, params };
  
};
const Products = () => {
  const products = useLoaderData()
  return <>
        <Filters/>
        <ProductsContainer/>
        <PaginationContainer/>  
       </>;
};

export default Products;
