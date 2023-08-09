import React from 'react'
import { useEffect,useState } from 'react'
import axios from 'axios'

import './Product.css';

const Product = () => {
    const url="https://fakestoreapi.com/products"
    const[product,setProducts]=useState([])
    const fetchData=async()=> {
        try {
            const response=await axios(url)            
            const data=response.data;
            setProducts(data)           
       
        } catch (error) {
            console.log(error.message);
        }
    }
    useEffect(()=>{fetchData()},[]
        )
  return (
    <>
    <div className='parent' >
        <h1 className='header' md="auto">Product DashBoard</h1>
        <div>
        {JSON.stringify(product)}
        </div>
        
    </div>
    
    
        
    </>
  )
}

export default Product