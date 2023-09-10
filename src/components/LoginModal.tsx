import { useAuthContext } from 'context/AuthContext';
import { MdOutlineCancel } from 'react-icons/md';

interface LoginModalProps {
    onModal(): void;
}

export default function LoginModal({ onModal }: LoginModalProps) {
    const { login } = useAuthContext();

    return (
        <section className='flex justify-center items-center fixed inset-0 z-10 bg-black/[.4] backdrop-blur-sm'>
            <div className='flex flex-col w-96 h-96 bg-white rounded-2xl p-4'>
                <div className='text-end'>
                    <button
                        className='text-2xl text-zinc-500 transition duration-300 hover:scale-110'
                        onClick={onModal}
                    >
                        <MdOutlineCancel />
                    </button>
                </div>
                <div className='flex flex-auto flex-col justify-around items-center'>
                    <h1 className='text-3xl text-brand'>LOGIN</h1>
                    <div className='flex flex-col items-center gap-4'>
                        <button>
                            <img src='/images/kakaoLogo.png' alt='카카오 로그인' />
                        </button>
                        <button onClick={login}>
                            <img src='/images/googleLogo.png' alt='구글 로그인' />
                        </button>
                    </div>
                </div>
            </div>
        </section>
    );
}
