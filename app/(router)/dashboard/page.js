"use client"
import Main from '@/app/_components/Main'
import { usePathname } from 'next/navigation'
import React from 'react'
import { BiHomeCircle } from 'react-icons/bi'
import TeamTemplate from './_components/TeamTemplate'
// import Linechart from './_components/linechart'
import StatsCard from './_components/StatsCard'
import Linechart from './_components/Linechart'

function Dashboard() {
    const path = usePathname();
    return (
        <Main >
            <div className='bg-white p-4 rounded-sm '>
                <h6 className='flex items-center text-sm text-green-500'><BiHomeCircle /> {path}</h6>
                <div className='flex justify-between items-center '>
                    <h1 className='text-3xl font-[600] text-gray-700'>Dashboard</h1>
                    <button className='px-4 py-2 rounded-sm border text-gray-500 font-[400] hover:bg-purple-400 transition ease-in-out hover:text-white hover:shadow-sm duration-50'>View All</button>
                </div>
                <div className='grid grid-cols-8 mt-5 gap-1'>
                    <div className='col-span-5 space-y-4'>
                        {/* <Linechart /> */}
                        <h1 className=' px-2 my-4 font-[700] text-sm text-gray-700'>Analytics</h1>
                        <div className='flex gap-2 flex-wrap'>
                            <StatsCard no={355} topic={'no of users'} rate={300} />
                            <StatsCard no={45} topic={'Conversions'} rate={-890} />
                            <StatsCard no={1000} topic={'Views'} rate={500} />
                        </div>
                        <Linechart />

                    </div>
                    <div className='col-span-3'>
                        <h1 className=' px-2 my-4 font-[700] text-sm text-gray-700'>TEAM MEMBERS</h1>

                        <div>
                            {[1, 2, 3, 4, 5, 6].map((item, index) => (
                                <TeamTemplate position={'UI Lead'} name={'Suraj Deswal'} />
                            ))}
                        </div>
                    </div>
                </div>
            </div>
        </Main>
    )
}

export default Dashboard
