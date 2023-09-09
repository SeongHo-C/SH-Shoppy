import React from 'react';
import { Link } from 'react-router-dom';
import { BsFillPencilFill } from 'react-icons/bs';
import { AiFillHeart } from 'react-icons/ai';
import User from './User';
import Button from './ui/Button';
import { useAuthContext } from '../context/AuthContext';
import CartStatus from './CartStatus';

export default function Navbar() {
    const { user, login, logout } = useAuthContext();

    return (
        <div className='w-full flex justify-between items-center p-4 max-w-screen-2xl'>
            <div className='flex items-center'>
                <Link className='text-[#5a514b] text-2xl tracking-widest' to='/'>
                    <h1>SH Shoppy</h1>
                </Link>
                <nav className='flex items-center gap-6 font-semibold text-[#877b73] text-sm mx-8'>
                    <Link to='/'>Home</Link>
                    <Link to='/products'>Shop</Link>
                    <a
                        href='https://leeseong010.tistory.com/'
                        rel='noopener noreferrer'
                        target='_blank'
                    >
                        Blog
                    </a>
                </nav>
            </div>
            <div className='flex items-center text-sm'>
                {user?.isAdmin && (
                    <Link to='/products/new'>
                        <BsFillPencilFill />
                    </Link>
                )}
                {user && (
                    <div className='flex'>
                        <Link to='/products/like'>
                            <AiFillHeart />
                        </Link>
                        <Link to='/carts'>
                            <CartStatus />
                        </Link>
                    </div>
                )}

                {user && <User user={user} />}
                {!user && <Button text={'Login'} onClick={login} />}
                {user && <Button text={'Logout'} onClick={logout} />}
            </div>
        </div>
    );
}
