import React from 'react';
import { Link } from 'react-router-dom';
import { BsFillPencilFill } from 'react-icons/bs';

export default function Header() {
  return (
    <header className='flex justify-between items-center p-2 border-b-2'>
      <Link className='flex items-center' to='/'>
        <img className='w-10 h-10' src='/favicon.ico' alt='사이트 로고' />
        <h1 className='text-3xl text-red-400'>Shoppy</h1>
      </Link>
      <nav>
        <ul className='flex items-center gap-4'>
          <li>
            <Link to='/products'>Products</Link>
          </li>
          <li>
            <Link to='/carts'>Carts</Link>
          </li>
          <li>
            <Link to='/products/new'>
              <BsFillPencilFill />
            </Link>
          </li>
          <li>Login</li>
        </ul>
      </nav>
    </header>
  );
}
