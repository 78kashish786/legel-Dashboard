"use client"
import React from 'react'
import MainMenu from './MainMenu'
import { IoCodeWorkingSharp } from 'react-icons/io5'
import { BiLogOut } from "react-icons/bi";
import { useRouter } from 'next/router';
function Sidebar() {

    // const router= useRouter()

    return (
        <div className='  h-[100vh] flex-col justify-between '>
            <h1 className='flex gap-3 font-[500] mx-auto w-full p-5 text-[#7842e8] text-4xl'>
                <IoCodeWorkingSharp />
                Legel</h1>
            <MainMenu />

            <div className='my-2 border-t p-2'>
                <h1 className='flex gap-4 text-sm  text-gray-400 items-center'><BiLogOut size={25} />Log out</h1>
            </div>
        </div>
    )
}

export default Sidebar
