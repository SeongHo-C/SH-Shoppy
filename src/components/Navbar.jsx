import React from 'react';
import { Link } from 'react-router-dom';
import { FiShoppingBag } from 'react-icons/fi';
import { BsFillPencilFill } from 'react-icons/bs';

export default function Navbar() {
  return (
    <header className='flex justify-between items-center p-2 border-b border-gray-300'>
      <Link className='flex items-center text-4xl text-brand' to='/'>
        <FiShoppingBag />
        <h1 className='ml-2'>Shoppy</h1>
      </Link>
      <nav className='flex items-center gap-4 font-semibold'>
        <Link to='/products'>Products</Link>
        <Link to='/carts'>Carts</Link>
        <Link className='text-xl' to='/products/new'>
          <BsFillPencilFill />
        </Link>
        <button>Login</button>
      </nav>
    </header>
  );
}
