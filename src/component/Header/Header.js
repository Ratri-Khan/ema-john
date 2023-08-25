import React from 'react';
import logo from '../../images/Logo.svg'

const Header = () => {
    return (
        <div className='bg-zinc-700 w-full text-white flex flex-col md:flex-row justify-between items-center px-10 py-3'>
            <div className='md:w-4/5'><img src={logo} alt="" /></div>
             <ul className='flex w-full md:w-1/5 justify-between'>
                <li>Shop</li>
                <li>Order</li>
                <li>Inventory</li>
                <li>Login</li>
             </ul>
        </div>
    );
};

export default Header;