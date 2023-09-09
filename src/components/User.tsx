import React from 'react';

interface UserProps {
    user: {
        displayName: string;
    };
}

export default function User({ user: { displayName } }: UserProps) {
    return <span className='hidden md:block text-sm'>{displayName}</span>;
}
