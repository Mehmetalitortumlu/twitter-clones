import React from 'react'
import FeedItem from './FeedItem'

const FeedList = ({ tweets }) => {
    return (
        <div >
            {
                tweets && tweets.map((tweet, i) => (
                    <FeedItem {...tweet} key={i} />
                ))
            }
        </div>
    )
}

export default FeedList
