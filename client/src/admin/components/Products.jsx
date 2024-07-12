import React, { useEffect, useState } from 'react'
import axiosInstance from '../../api/api';
import Table from './Table';
import Header from './Header';
import { Link } from 'react-router-dom';

const columns = [
    {Header:"ID", accessor : "id"},
    {Header:"Photo", accessor : "productImage", Cell : ({value}) => <img src={'http://localhost:8000/'+ value} className='w-10 h-10 object-cover' />},
    {Header:"Name", accessor : "productTitle"},
    {Header:"Price", accessor : "productPrice"},
]


const Products = () => {
    const [products, setProducts] = useState([]);

    useEffect(()=>{
  const fetchProducts = async () => {

    try {      
    const res = await axiosInstance.get("/products");
    const data = res.data.data;
    const  dataWithID =  data.map((product, index)=>(
        {
            ...product,
            productTitle: product.productTitle.slice(0,76) + "...",
            id: index+1
        }
    ))
    setProducts(dataWithID)
    } catch (error) {
     console.log('Failed to fetch products.', error);   
    }


  }
  fetchProducts();
    },[])
  return (
    <div>
        <h4>Products</h4>
        <Link to={'/dashboard/add_product'} className='fixed top-16 right-2 bg-green-800 shadow-2xl rounded-sm text-white p-2'>Add Product</Link>
<Table columns={columns} data={products}/>
    </div>
  )
}

export default Products