import React from 'react'

const UserBox = () => {
    return (
        <div className='flex items-center justify-between mb-6 hover:bg-primary-light cursor-pointer rounded-full py-2 px-4 transform transition-colors duration-200'>
            <img src="https://pbs.twimg.com/profile_images/1559599279718764544/eB1Nw98b_400x400.jpg" className='w-11 h-11 rounded-full' alt="" />

            <div className='flex flex-col'>
                <span className='font-bold text-md'>Mehmet Ali Tortumlu</span>
                <span className='text-sm text-gray-dark'>ali_tortumlu </span>
            </div>

            <div className='flex space-x-1'>
                <div className='w-1 h-1 bg-gray-800 rounded-full' />
                <div className='w-1 h-1 bg-gray-800 rounded-full' />
                <div className='w-1 h-1 bg-gray-800 rounded-full' />
            </div>

        </div>
    )
}

export default UserBox
