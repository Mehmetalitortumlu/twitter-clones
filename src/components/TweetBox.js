import { Timestamp } from 'firebase/firestore';
import React, { useState } from 'react'
import { EmojiIcon, ImageIcon, ScheduleIcon, GIFFIcon, PollIcon } from '../icon/icon';
import { collection, addDoc } from "firebase/firestore";
import { db } from '../firebase';
const TweetBox = () => {
    const [content, setContent] = useState('');

    const sendTweet = async () => {
        if (content !== "") {
            try {
                const docRef = await addDoc(collection(db, "feed"), {
                    displayName: "Mehmet",
                    userName: "@ali_tortumlu",
                    content,
                    timeStamp: Timestamp.now(),
                    avatar: "https://pbs.twimg.com/profile_images/1559599279718764544/eB1Nw98b_400x400.jpg",
                    images:"https://pbs.twimg.com/profile_images/1559599279718764544/eB1Nw98b_400x400.jpg"
                });
                setContent('')
            } catch (e) {
                console.error("Error adding document: ", e);
            }
        }
    };
    

    return (
        <div className='flex flex-col flex-1 mt-2 px-1 md:px-2'>
            <textarea value={content} onChange={(e) => setContent(e.target.value)} className='outline-none w-full text-xl placeholder:gray-dark overflow-hidden resize-none' placeholder='What"s Happening' />
            <div className='flex justify-between items-center'>

                <div className='flex -ml-3'>
                    <div className='hover:bg-gray-lightest rounded-full w-8 h-8 md:w-11 md:h-11 flex justify-center items-center'>
                        <ImageIcon className="w-6 h-6 text-primary-base" />
                    </div>
                    <div className='hover:bg-gray-lightest rounded-full w-8 h-8 md:w-11 md:h-11 flex justify-center items-center'>
                        <GIFFIcon className="w-6 h-6 text-primary-base" />
                    </div>
                    <div className='hover:bg-gray-lightest rounded-full w-8 h-8 md:w-11 md:h-11 flex justify-center items-center'>
                        <EmojiIcon className="w-6 h-6 text-primary-base" />
                    </div>
                    <div className='hover:bg-gray-lightest rounded-full w-8 h-8 md:w-11 md:h-11 flex justify-center items-center'>
                        <ScheduleIcon className="w-6 h-6 text-primary-base" />
                    </div>
                    <div className='hover:bg-gray-lightest rounded-full w-8 h-8 md:w-11 md:h-11 flex justify-center items-center'>
                        <PollIcon className="w-6 h-6 text-primary-base" />
                    </div>
                </div>

                <button onClick={sendTweet} className='bg-primary-base text-white rounded-full py-1 px-1 md:px-4 md:py-2 font-medium'>Tweet</button>
            </div>
        </div>
    )
}

export default TweetBox
