import { Link } from 'react-router-dom';
import { BsPencil } from 'react-icons/bs';
import { AiOutlineHeart } from 'react-icons/ai';
import { useAuthContext } from '../context/AuthContext';
import CartStatus from './CartStatus';
import { useState } from 'react';
import LoginModal from './LoginModal';

export default function Navbar() {
    const [isModalOpen, setIsModalOpen] = useState(false);
    const { user, logout } = useAuthContext();

    const handleModal = () => {
        setIsModalOpen(!isModalOpen);
    };

    return (
        <nav className='w-full flex justify-between items-center p-4 max-w-screen-2xl'>
            <div className='flex items-center'>
                <Link className='text-[#5a514b] text-2xl tracking-widest' to='/'>
                    SH Shoppy
                </Link>
                <ul className='flex items-center gap-6  text-brand text-sm ml-8'>
                    <li>
                        <Link to='/'>Home</Link>
                    </li>
                    <li>
                        <Link to='/products'>Shop</Link>
                    </li>
                    <li>
                        <a
                            href='https://leeseong010.tistory.com/'
                            rel='noopener noreferrer'
                            target='_blank'
                        >
                            Blog
                        </a>
                    </li>
                </ul>
            </div>
            <ul className='flex items-center gap-4 text-lg'>
                {user?.isAdmin && (
                    <li>
                        <Link to='/products/new'>
                            <BsPencil />
                        </Link>
                    </li>
                )}
                {user && (
                    <>
                        <li>
                            <Link className='flex items-center' to='/products/like'>
                                <AiOutlineHeart />
                                <p className='w-5 h-5 text-sm text-center bg-brand text-white font-semibold rounded-full ml-1'>
                                    0
                                </p>
                            </Link>
                        </li>
                        <li>
                            <Link to='/carts'>
                                <CartStatus />
                            </Link>
                        </li>
                    </>
                )}
                {!user && (
                    <button className='text-sm hover:underline decoration-1' onClick={handleModal}>
                        Login
                    </button>
                )}
                {isModalOpen && <LoginModal onModal={handleModal} />}
                {user && (
                    <button className='text-sm hover:underline decoration-1' onClick={logout}>
                        Logout
                    </button>
                )}
            </ul>
        </nav>
    );
}
