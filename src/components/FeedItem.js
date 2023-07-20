import React from 'react'
import { LikeIcon } from '../icon/icon'

const FeedItem = ({ avatar, content, displayName, images, timeStamp, userName }) => {
    return (
        <article className='flex space-x-2 md:space-x-3 border-gray-extraLight px-4 py-3 cursor-pointer justify-center relative'>
            <img src={images} alt="Profile" className='w-11 h-11 rounded-full' />
            <div className='flex-1'>
                <div className='flex items-center text-sm'>
                    <h4 className='font-bold'>{displayName}</h4>
                    <span className='text-gray-dark ml-2'>{userName}</span>
                    <div className='mx-2 bg-gray-dark h-1 w-1 border rounded-full' />
                    <span className='text-gray-dark'>
                        {timeStamp?.toDate().toLocaleTimeString("tr-TR")}
                    </span>
                </div>

                <p className='mt-2 text-gray-900 text-sm'>
                    {content}
                </p>
                {images && <img src={images} className="rounded-xl my-2" />}

                <ul className='-ml-1 flex justify-between max-w-md '>
                    <li className='group flex items-center space-x-3 text-gray-dark text-sm'>
                        <div className='group-hover:bg-primary-base rounded-full flex items-center justify-center w-8 h-8'>   
                        <LikeIcon className={"w-5 h-5 "}/>
                        </div>
                        <span className='group-hover:text-primary-base'>7</span>
                    </li>   
                    <li className='group flex items-center space-x-3 text-gray-dark text-sm'>
                        <div className='group-hover:bg-primary-base rounded-full flex items-center justify-center w-8 h-8'>   
                        <LikeIcon className={"w-5 h-5 "}/>
                        </div>
                        <span className='group-hover:text-primary-base'>7</span>
                    </li>   
                    <li className='group flex items-center space-x-3 text-gray-dark text-sm'>
                        <div className='group-hover:bg-primary-base rounded-full flex items-center justify-center w-8 h-8'>   
                        <LikeIcon className={"w-5 h-5 "}/>
                        </div>
                        <span className='group-hover:text-primary-base'>7</span>
                    </li>   
                    <li className='group flex items-center space-x-3 text-gray-dark text-sm'>
                        <div className='group-hover:bg-primary-base rounded-full flex items-center justify-center w-8 h-8'>   
                        <LikeIcon className={"w-5 h-5 "}/>
                        </div>
                        <span className='group-hover:text-primary-base'>7</span>
                    </li>   
                </ul>

            </div>
        </article>
    )
}

export default FeedItem
