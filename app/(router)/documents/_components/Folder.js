import Image from 'next/image'
import React from 'react'

function Folder({ topic, files, size }) {
    return (
        <div className='w-[200px] h-auto shadow-sm m-1 p-3 rounded-md bg-gray-100 space-y-1'>
            <Image src='/folderIcon.png' width={50} height={50} />
            <h1 className='text-md font-[500] '>{topic}</h1>
            <div className='flex gap-2 text-sm font-[500] text-gray-600'>
                <h1>{files}files</h1>
                <h1>{size}kb</h1>
            </div>
        </div>
    )
}

export default Folder
