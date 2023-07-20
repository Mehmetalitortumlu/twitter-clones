import React, { useState } from 'react'
import SideLink from '../components/SideLink'
import UserBox from '../components/UserBox'
import {
    TwitterIcon,
    HomeIcon,
    ExploreIcon,
    NotificationsIcon,
    MessagesIcon,
    BookmarksIcon,
    ListsIcon,
    ProfileIcon,
    MoreIcon
} from '../icon/icon'


const sideLinks = [
    {
        name: "Home",
        icon: HomeIcon
    },
    {
        name: "Explore",
        icon: ExploreIcon
    },
    {
        name: "Notifications",
        icon: NotificationsIcon
    },
    {
        name: "Messages",
        icon: MessagesIcon
    },
    {
        name: "Bookmarks",
        icon: BookmarksIcon
    },
    {
        name: "Lists",
        icon: ListsIcon
    },
    {
        name: "Profile",
        icon: ProfileIcon
    },
    {
        name: "More",
        icon: MoreIcon
    },
]

const Sidebar = () => {
    const [active, setActive] = useState('Home');
    const handleMenuItemClik = (name) => {
        setActive(name)
    }
    return (
        <div className='h-screen sticky top-0 w-20 md:w-32 lg:w-72 flex flex-col justify-between px-2 '>

            <div>
                {/* menu */}
                <div className='mt-1 mb-4 ml-1 w-12 h-12 flex justify-center items-center text-primary-base hover:bg-primary-light rounded-full transform transition-colors duration-200'>
                    <TwitterIcon className="w-9 h-9" />
                </div>

                <nav className='mb-4'>
                    <ul>
                        {
                            sideLinks.map(({ name, icon }) => (
                                <SideLink name={name} Icon={icon} key={name} active={active} handleMenuItemClik={handleMenuItemClik} />
                            ))
                        }
                    </ul>
                </nav>
                <button className='bg-primary-base hover:bg-primary-dark transform transition-colors duration-200 text-white rounded-full px-8 py-3 w-11/12 shadow-lg hidden lg:block'>Tweet</button>
            </div>

            {/* userbox */}
            <UserBox />
        </div>
    )
}

export default Sidebar
