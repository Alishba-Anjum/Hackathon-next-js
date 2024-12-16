import React from 'react';

const Input = ({ label, placeholder }: { label: string, placeholder: string }) => {
    return (
        <div className='w-full sm:w-[530px] h-auto flex flex-col gap-2 sm:gap-4'>
            <label className='text-sm sm:text-lg font-semibold'>{label}</label>
            <input
                type="text"
                placeholder={placeholder}
                className='px-4 sm:px-6 border border-neutral-400 rounded-md w-full sm:w-[500px] h-[50px] sm:h-[75px]'
            />
        </div>
    );
};

export default Input;



