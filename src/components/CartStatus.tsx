import { AiOutlineShopping } from 'react-icons/ai';
import useCart from '../hooks/useCart';

export default function CartStatus() {
    const {
        cartQuery: { data: products },
    } = useCart();

    return (
        <div className='flex items-center'>
            <AiOutlineShopping />
            {products && (
                <p className='w-5 h-5 text-sm text-center bg-brand text-white font-semibold rounded-full ml-1'>
                    {products.length}
                </p>
            )}
        </div>
    );
}
