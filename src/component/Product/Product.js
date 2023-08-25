import React from 'react';

const Product = (props) => {
    const {img, name, price,seller,ratings} = props.product;
    // console.log(props.product);
    const handleAddToCart = props.handleAddToCart;
    return (
        <div className='border-2 p-3 w-full h-full grid content-between grid-cols-1 '>
            <div>
            <img src={img} alt="" className='h-56 w-full' />          
            <h3 className='text-1xl font-bold'>{name}</h3>
            <p>Price : {price}</p>            
            <p>Seller : {seller}</p>
            <p>Rating : {ratings}</p>
            </div>
            <button onClick={()=>handleAddToCart(props.product)} className='text-center w-full bg-zinc-700 text-white py-2'>Add To Cart</button>
            
           
        </div>
    );
};

export default Product;