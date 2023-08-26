import React from 'react';

const Cart = ({cart}) => {
    // console.log(cart);
    let total = 0;
    let totalShipping = 0;
    for(const product of cart){
         total = total + product.price ;
         totalShipping = totalShipping + product.shipping;
    }
    const grandTotal = total + totalShipping;
    return (
        <div>
             <p>Selected Item : {cart.length} </p>
             <p>Total Price : {total}</p>
             <p>Total Shipping Charge : {totalShipping} </p>
             <p>Grand Total : {grandTotal} </p>
        </div>
    );
};

export default Cart;