import React from 'react'

function StatsCard({ no, topic, rate }) {
    return (
        <div className='p-3 hover:shadow-md border border-gray-200  text-center w-[30%] rounded-sm shadow-sm' >
            <div className='flex items-center gap-2 justify-center'>
                <h1 className='text-5xl font-semibold'>{no}</h1>
                {rate > 0 ? (<span className='bg-green-400 rounded-xl text-white p-1 text-[10px]'>+{rate}</span>) : (<span className='bg-red-400 rounded-xl text-white p-1 text-[10px]'>{rate}</span>)}
            </div>
            <h2 className='font-[400] text-gray-500  text-sm'>{topic}</h2>
        </div>
    )
}

export default StatsCard
