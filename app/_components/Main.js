import React from 'react'
import Contacts from '../(router)/contacts/page'

function Main({ children }) {
    return (
        <div className='p-4 bg-[#eff2f4] h-[91.5%] overflow-y-scroll no-scrollbar '>
            {children}
        </div>
    )
}

export default Main
