"use client"
import Main from '@/app/_components/Main';
import { PlusIcon } from 'lucide-react';
import { usePathname } from 'next/navigation'
import React from 'react'
import { BiHomeCircle } from 'react-icons/bi';
import TaskTemplate from './_components/TaskTemplate';

function Tasks() {
    const path = usePathname();
    return (
        <Main >
            <div className='bg-white p-4 rounded-sm '>
                <h6 className='flex items-center text-sm text-green-500'><BiHomeCircle />{path}</h6>
                <div className='flex justify-between items-center '>
                    <h1 className='text-3xl font-[600] text-gray-700'>Tasks</h1>
                    <button className='px-4 py-2 rounded-sm border text-gray-500 font-[400] hover:bg-purple-400 transition ease-in-out hover:text-white hover:shadow-sm duration-50'>View All</button>
                </div>
                {/* <ContactTable /> */}
                <div className='grid grid-cols-3 gap-5 mt-10'>
                    <div className='  p-4 border rounded-xl bg-gray-100   '>
                        <div className='flex justify-between  items-center'>
                            <h1 className='text-md font-[600[ text-black'>To Do</h1>
                            <PlusIcon size={22} />
                        </div>
                        <div>
                            <TaskTemplate task={'Design the UI'} detail={'Design the USer interface for the Application regading the Nipun indai'} />
                            <TaskTemplate task={'Design the UI'} detail={'Design the USer interface for the Application regading the Nipun indai'} />
                            <TaskTemplate task={'Design the UI'} detail={'Design the USer interface for the Application regading the Nipun indai'} />

                        </div>
                    </div>
                    <div className='  p-4 border rounded-xl bg-gray-100   '>
                        <div className='flex justify-between  items-center'>
                            <h1 className='text-md font-[600[ text-black'>In Progress</h1>
                            <PlusIcon size={22} />
                        </div>
                        <div>
                            <TaskTemplate task={'Design the UI'} detail={'Design the USer interface for the Application regading the Nipun indai'} />


                        </div>
                    </div>
                    <div className='  p-4 border rounded-xl bg-gray-100   '>
                        <div className='flex justify-between  items-center'>
                            <h1 className='text-md font-[600[ text-black'>Review</h1>
                            <PlusIcon size={22} />
                        </div>
                        <div>
                            <TaskTemplate task={'Design the UI'} detail={'Design the USer interface for the Application regading the Nipun indai'} />
                        </div>
                    </div>
                </div>
            </div>
        </Main>
    )
}

export default Tasks
