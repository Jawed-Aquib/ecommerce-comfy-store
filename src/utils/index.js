import axios from "axios";
import { generateAmountOptions } from "./utils";

const productionUrl = 'https://strapi-store-server.onrender.com/api';

export const customFetch = axios.create({
    baseURL: productionUrl
})

export const formatPrice = (number) => {
    return new Intl.NumberFormat('en-IN',{
      style:'currency',
      currency:'INR'  
    }).format(number/100)
}

export { generateAmountOptions } from './utils';