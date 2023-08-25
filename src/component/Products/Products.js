import React, { useEffect, useState } from 'react';
import Product from '../Product/Product';

const Products = () => {
    const [products,setProducts] = useState([]);

    useEffect(() => {
        fetch('products.json')
        .then(res => res.json())
        .then(data => setProducts(data))
    } , [])
    return (
        <div className='w-11/12 m-auto flex'>
           <div className='w-9/12 grid grid-cols-3 gap-3'>            
            {
                products.map(product => <Product product={product}></Product> )
            }            
           </div>
           <div className='w-3/12 bg-pink-500 text-white font-bold'>
            <p>Selected Item : </p>
             <p>Total Price : </p>
             <p>Total Shipping Charge : </p>
             <p>Tax : </p>
          </div>
        
        </div>
    );
};

export default Products;