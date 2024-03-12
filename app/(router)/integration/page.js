import Main from '@/app/_components/Main'
import React from 'react'
import Card from './_components/Card'

function Integration() {
    return (
        <Main>
            <div className='p-4  bg-white' >
                <h1 className='text-3xl font-[600] text-gray-700'>Integration</h1>

                <div className='flex gap-5 flex-wrap mt-10'>
                    <Card />
                    <Card />
                    <Card />
                    <Card />
                    <Card />
                    <Card />


                </div>
            </div>
        </Main>
    )
}

export default Integration
