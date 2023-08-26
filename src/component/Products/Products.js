import React, { useEffect, useState } from 'react';
import Product from '../Product/Product';
import Cart from '../Cart';

const Products = () => {
    const [products,setProducts] = useState([]);
    const [cart,setCart] = useState([]);

    useEffect(() => {
        fetch('products.json')
        .then(res => res.json())
        .then(data => setProducts(data))
    } , []);

    const handleAddToCart = (product)=>{
        //  console.log(product);
        const newCart = [...cart,product];
        setCart(newCart);
    }
    return (
        <div className='w-11/12 m-auto flex flex-col-reverse md:flex-row'>
           <div className='md:w-9/12 grid md:grid-cols-3 gap-3'>            
            {
                products.map(product => <Product
                    key={product.id}
                    product={product}
                    handleAddToCart={handleAddToCart}

                ></Product> )
            }            
           </div>
           <div className='md:w-3/12 h-96 bg-pink-500 text-white font-bold'>
              <Cart cart={cart}></Cart>
           </div>
        
        </div>
    );
};

export default Products;