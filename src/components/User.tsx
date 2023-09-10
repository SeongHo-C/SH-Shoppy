import React from 'react';

interface UserProps {
    user: {
        displayName: string;
    };
}

export default function User({ user: { displayName } }: UserProps) {
    return <span className='text-sm'>{displayName}</span>;
}
