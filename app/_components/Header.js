"use client"
import Image from 'next/image'
import { useParams, usePathname } from 'next/navigation';
import React from 'react'
import { IoSearch } from "react-icons/io5";
function Header() {

    const path = usePathname();
    const params = useParams();
    return (


        <div className='w-full py-2 px-4 flex justify-between items-center'>
            <div>
                {/* <h1 className='text-3xl font-[600]'>{path}</h1> */}
            </div>
            <div className='flex gap-5 items-center '>
                <div className=' px-4 h-[35px] text-gray-400 flex gap-2  items-center rounded-md border border-gray-200'>
                    <IoSearch className='' />
                    <input placeholder='Search' className='outline-none p-0 text-sm' />
                </div>
                <div className='flex gap-2 items-center'>
                    <Image className=' rounded-md' src={'/personImage.jpg'} width={60} height={60} />
                    <div className=''>
                        <h1 className='text-md font-[500] '>Michael Scott</h1>
                        <h6 className='text-[10px] font-[400] text-gray-400'>UX-Developer</h6>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default Header
