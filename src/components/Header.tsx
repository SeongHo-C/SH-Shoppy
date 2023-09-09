import Navbar from './Navbar';

export default function Header() {
    return (
        <header className='flex flex-col items-center'>
            <div className='w-full p-2 text-center text-sm bg-[#9e7470] text-white'>
                SH Shoppy에 방문해주셔서 감사합니다.
            </div>
            <Navbar />
        </header>
    );
}
