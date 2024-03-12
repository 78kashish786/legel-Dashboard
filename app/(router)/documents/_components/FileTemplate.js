import { File } from 'lucide-react'
import Image from 'next/image'
import React from 'react'

function FileTemplate({ name, author }) {
    return (
        <div className='flex hover:bg-gray-200 justify-between items-center py-3 px-4 my-1  rounded-sm bg-gray-100 w-[70%]'>
            <div className='flex justify-between items-center gap-5'>
                <File />
                <h1 className='font-[500] text-gray-800 text-md'>{name}</h1>
            </div>
            <div className='flex justify-between items-center gap-2'>
                <Image src='/personImage.jpg' width={25} height={25} className='rounded-full object-contain' />
                <h1 className='text-sm text-gray-400'>{author}</h1>
            </div>
        </div >
    )
}

export default FileTemplate
