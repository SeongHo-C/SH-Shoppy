import React from 'react';

export default function Banner() {
    return (
        <section className='h-120 bg-yellow-900 relative'>
            <div className='w-full h-full bg-cover bg-banner opacity-80'></div>
            <div className='absolute w-full top-40 text-center text-gray-50 drop-shadow-xl'>
                <h2 className='text-6xl'>Shop With US</h2>
                <p className='text-2xl'>Best Products, High Quality</p>
            </div>
        </section>
    );
}
