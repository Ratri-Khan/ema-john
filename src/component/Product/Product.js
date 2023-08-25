import React from 'react';

const Product = (props) => {
    const {img, name, price,seller,ratings} = props.product;
    console.log(props.product);
    return (
        <div className='border-2 p-3 w-full h-full grid content-between grid-cols-1 '>
            <div>
            <img src={img} alt="" className='h-56 w-full' />          
            <h3 className='text-2xl font-bold'>{name}</h3>
            <p>Price : {price}</p>            
            <p>Seller : {seller}</p>
            <p>Rating : {ratings}</p>
            </div>
            <button className='text-center w-full bg-zinc-600 text-white py-2'>Add To Cart</button>
            
           
        </div>
    );
};

export default Product;