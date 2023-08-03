import React from 'react';
import { Link } from 'react-router-dom';
import { BsFillPencilFill } from 'react-icons/bs';

export default function Header() {
  return (
    <header>
      <Link to='/'>
        <img src='/favicon.ico' alt='사이트 로고' />
        <h1>Shoppy</h1>
      </Link>
      <nav>
        <ul>
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
