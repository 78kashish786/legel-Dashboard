import Image from 'next/image'
import React from 'react'
import { BiComment } from 'react-icons/bi'

function TeamTemplate({ name, position }) {
    return (
        <div className='flex justify-between items-center p-2 border rounded-sm shadow-sm mt-2 '>
            <div className='flex gap-1 items-center'>
                <Image src='/personImage.jpg' width={70} height={70} className='rounded-md' />
                <div>
                    <h1 className='text-md font-[600] text-gray-700'>{name}</h1>
                    <h2 className='text-sm font-[400] text-gray-400'>{position}</h2>
                </div>
            </div>
            <div className='p-2 border border-gray-300 rounded-md'>
                <BiComment />
            </div>
        </div>
    )
}

export default TeamTemplate
