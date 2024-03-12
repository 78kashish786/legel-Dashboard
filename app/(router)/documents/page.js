"use client"
import Main from '@/app/_components/Main'
import { usePathname } from 'next/navigation'
import React from 'react'
import { BiHomeCircle } from 'react-icons/bi'
import Folder from './_components/Folder'
import FileTemplate from './_components/FileTemplate'

function Documents() {
    const path = usePathname();
    return (
        <Main>
            <div className='bg-white p-4 rounded-sm '>
                <h6 className='flex items-center text-sm text-green-500'><BiHomeCircle />{path}</h6>
                <div className='flex justify-between items-center '>
                    <h1 className='text-3xl font-[600] text-gray-700'>Documents</h1>
                    <button className='px-4 py-2 rounded-sm border text-white bg-blue-600 font-[400] hover:bg-white hover:text-black transition ease-in-out hover:text-white hover:shadow-sm duration-50'>Add New</button>
                </div>
                {/* <ContactTable />/ */}
                <hr className='border my-4 border-gray-100' />
                <div className='space-y-2'>
                    <h1 className='font-[500] text-gray-700'>Folders</h1>
                    <div className='flex gap-5'>
                        <Folder topic={'Medical Records'} files={24} size={244} />
                        <Folder topic={'Post-Mortem Records'} files={24} size={244} />
                        <Folder topic={'Criminal Records'} files={24} size={244} />
                        <div className='p-4 border-4 flex justify-center items-center rounded-sm bg-white border-dotted'>
                            <div className='text-center'>
                                <h1 className='text-4xl '>+</h1>
                                <h1>New Folder</h1>
                            </div>
                        </div>
                    </div>
                </div>

                <div className='mt-4'>
                    <h1 className='font-[500] text-gray-700'>Documents</h1>
                    <div className='my-2'>
                        <FileTemplate author={'Kashish'} name={'Medical Records for Medanta'} />
                        <FileTemplate author={'Kashish'} name={'Medical Records for Medanta'} />
                        <FileTemplate author={'Kashish'} name={'Medical Records for Medanta'} />
                        <FileTemplate author={'Kashish'} name={'Medical Records for Medanta'} />
                        <FileTemplate author={'Kashish'} name={'Medical Records for Medanta'} />
                        <FileTemplate author={'Kashish'} name={'Medical Records for Medanta'} />
                        <FileTemplate author={'Kashish'} name={'Medical Records for Medanta'} />
                        <FileTemplate author={'Kashish'} name={'Medical Records for Medanta'} />

                    </div>
                </div>
            </div>
        </Main>
    )
}

export default Documents
