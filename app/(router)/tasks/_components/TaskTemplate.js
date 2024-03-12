import { DeleteIcon } from 'lucide-react'
import Image from 'next/image'
import React from 'react'
import { BiDotsVertical } from 'react-icons/bi'

function TaskTemplate({ task, detail }) {
    return (
        <div className='p-3 mx-auto my-2 shadow-md bg-gray-200 rounded-md space-y-2'>
            <div className='flex justify-between items-start'>
                <div className='space-y-2'>
                    <h1 className='text-xl font-[500] text-gray-800 '>{task}</h1>
                    <p className='text-sm font-[400] text-gray-600'>{detail}</p>
                </div>
                <BiDotsVertical size={40} />
            </div>
            <ul className='flex felx-wrap gap-1'>
                <li className='px-2 py-1 rounded-sm border bg-gray-100 text-[10px]  items-center'>Prototyping</li>
                <li className='px-2 py-1 rounded-sm border bg-gray-100 text-[10px]  items-center'>IA</li>
                <li className='px-2 py-1 rounded-sm border bg-gray-100 text-[10px]  items-center'>UX</li>

            </ul>
            <div>
                <Image src='/personImage.png' width={15} height={15} className='rounded-[50%]' />
                <h1>21 January 2024</h1>
            </div>
        </div>
    )
}

export default TaskTemplate
