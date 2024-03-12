"use client"
import Main from '@/app/_components/Main';
import { usePathname } from 'next/navigation'
import React from 'react'
import { BiHomeCircle } from 'react-icons/bi'
import Linechart from '../dashboard/_components/Linechart';
import { Download } from 'lucide-react';
import PieChart from './_components/PieChart';

function Reports() {
    const path = usePathname();
    return (
        <Main >
            <div className='bg-white p-4 rounded-sm '>
                <h6 className='flex items-center text-sm text-green-500'><BiHomeCircle />{path}</h6>
                <div className='flex justify-between items-center '>
                    <h1 className='text-3xl font-[600] text-gray-700'>Reports</h1>
                    <button className='px-4 py-2 rounded-sm border text-gray-500 font-[400] hover:bg-purple-400 transition ease-in-out hover:text-white hover:shadow-sm duration-50 flex gap-2 items-center'>Downlaod <Download /></button>
                </div>
                <div className='grid grid-cols-8 my-5 gap-2'>
                    <div className='col-span-5 '>
                        <Linechart />
                    </div>
                    {/* <div className='col-span-'>
                        <PieChart />
                    </div> */}
                </div>
            </div>
        </Main>
    )
}

export default Reports
