import React from 'react'

const SideLink = ({ name, Icon, handleMenuItemClik, active }) => {
    const isActive = active === name
    return (
        <li className='group' onClick={() => handleMenuItemClik(name)}>
            <a href={name.toLowerCase()} className="block text-xl pointer-events-none">
                <div className='inline-block'>
                    <div className={`flex items-center group-hover:bg-primary-light rounded-full group-hover:text-primary-base pl-3  ${isActive ? "text-primary-base" : ""} `}>
                        <Icon />
                        <span className='ml-4 font-bold py-3  pr-8 '>{name}</span>
                    </div>
                </div>
            </a>
        </li>
    )
}

export default SideLink
