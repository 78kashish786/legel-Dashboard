"use client"
import Link from 'next/link'
import { usePathname, useRouter } from 'next/navigation'
import React from 'react'
import { IoHomeOutline } from 'react-icons/io5'

function MainMenu() {
    const router = usePathname();
    const menu = [{ name: 'Dashboard', icon: '', link: '/dashboard', },
    // { name: 'Calender', icon: '', link: '/calender' },
    { name: 'Tasks', icon: '', link: '/tasks' },
    // { name: 'Matters', icon: '', link: '/' },
    { name: 'Contacts', icon: '', link: '/contacts' },
    // { name: 'Activities', icon: '', link: '/' },
    // { name: 'Billing', icon: '', link: '/' },
    { name: 'Reports', icon: '', link: '/reports' },
    { name: 'Documents', icon: '', link: '/documents' },
    { name: 'Integration', icon: '', link: '/integration' },


    ]
    const accmenu = [
        { name: 'Support', icon: '' },
        { name: 'Settings', icon: '' },

    ]

    return (
        <div>
            <h1 className=' px-2 my-4 font-[700] text-sm text-gray-700'>MAIN MENU</h1>

            <ul className='my-4'>
                {menu.map((item, index) => (
                    <Link href={item.link}>
                        <li key={index} className={router == `${item.link}` ? ` bg-[#eff2f4]  border-l-[#7842e8] flex gap-4 items-center p-2 text-gray-800 pl-2 border-l-4 border-white mt-1` : `  hover:bg-[#eff2f4] hover:border-l-[#7842e8] flex gap-4 items-center p-2 text-gray-500 pl-2 border-l-4 border-white mt-1`}>
                            <IoHomeOutline size={20} />
                            <h1 className=' text-sm font-[500]'>{item.name}</h1>
                        </li>
                    </Link>
                ))}

            </ul>

            <h1 className=' px-2 my-4 font-[700] text-sm text-gray-700'>ACCOUNT SUPPORT</h1>
            <ul className='my-4'>
                {accmenu.map((item, index) => (
                    <li key={index} className=' hover:bg-[#eff2f4] hover:border-l-[#7842e8] font-[500] flex gap-4 items-center p-2 text-gray-600 pl-2 border-l-4 mt-1'>
                        <IoHomeOutline size={20} />
                        <h1 className='text-sm'>{item.name}</h1>
                    </li>
                ))}

            </ul>
        </div>
    )
}

export default MainMenu
