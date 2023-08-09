import React, { useEffect, useState } from 'react';
import { Link } from 'react-router-dom';
import { FiShoppingBag } from 'react-icons/fi';
import { BsFillPencilFill } from 'react-icons/bs';
import { login, logout, onUserStateChange } from '../api/firebase';

export default function Navbar() {
  const [user, setUser] = useState();

  const handleLogin = () => {
    login().then(setUser);
  };

  const handleLogout = () => {
    logout().then(setUser);
  };

  useEffect(() => {
    onUserStateChange((user) => setUser(user));
  }, []);

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
        {!user && <button onClick={handleLogin}>Login</button>}
        {user && <button onClick={handleLogout}>Logout</button>}
      </nav>
    </header>
  );
}
