import React, { useEffect, useState } from 'react'
import { collection, query, orderBy, onSnapshot } from "firebase/firestore";
import { db } from '../firebase';
import { TwitterBlueIcon } from '../icon/icon';
import TweetBox from '../components/TweetBox';
import Divider from '../components/Divider';
import FeedList from '../components/FeedList';

const Content = () => {
  const [tweet, setTweet] = useState([]);

  useEffect(() => {
    const q = query(collection(db, 'feed'), orderBy('timeStamp', 'desc'));
    const unsubscribe = onSnapshot(q, (snapshot) => {
      const tweetData = snapshot.docs.map((doc) => doc.data());
      setTweet(tweetData);
    });

    return () => unsubscribe();
  }, []);




  return (
    <main className='flex-1 border-r border-l flex flex-col border-gray-extraLight'>

      <header className='flex justify-between p-4 border-b border-gray-extraLight bg-white sticky top-0 z-10'>
        <span>Home</span>
        <TwitterBlueIcon className="w-7 h-7 text-primary-base" />
      </header>

      <div className='flex  px-4 py-3 space-x-4'>
        <img src="https://pbs.twimg.com/profile_images/1559599279718764544/eB1Nw98b_400x400.jpg" className='w-11 h-11 rounded-full' alt="" />

        <TweetBox />

      </div>
      <Divider />
      <FeedList tweets={tweet} />

    </main>
  )
}

export default Content
