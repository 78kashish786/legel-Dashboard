'use client'
import Main from '@/app/_components/Main'
import React from 'react'
import ContactTable from './_components/ContactTable'
import { BiHomeCircle } from 'react-icons/bi'
import { usePathname } from 'next/navigation'

function Contacts() {
  const path = usePathname();
  return (
    <Main >
      <div className='bg-white p-4 rounded-sm '>
        <h6 className='flex items-center text-sm text-green-500'><BiHomeCircle />{path}</h6>
        <div className='flex justify-between items-center '>
          <h1 className='text-3xl font-[600] text-gray-700'>Contacts</h1>
          <button className='px-4 py-2 rounded-sm border text-gray-500 font-[400] hover:bg-purple-400 transition ease-in-out hover:text-white hover:shadow-sm duration-50'>View All</button>
        </div>
        <ContactTable />
      </div>
    </Main>
  )
}

export default Contacts
