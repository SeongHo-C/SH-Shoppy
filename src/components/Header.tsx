import Navbar from './Navbar';
import User from './User';
import { useAuthContext } from 'context/AuthContext';

export default function Header() {
    const { user } = useAuthContext();

    return (
        <header className='flex flex-col items-center font-semibold'>
            <div className='w-full flex p-2 justify-center text-sm bg-[#9e7470] text-white'>
                {user && <User user={user} />}
                {user && '님 '}
                SH Shoppy에 방문해주셔서 감사합니다.
            </div>
            <Navbar />
        </header>
    );
}
