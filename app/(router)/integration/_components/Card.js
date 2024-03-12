import Image from 'next/image'
import React from 'react'
import { Switch } from "@/components/ui/switch"
function Card() {
    return (
        <div className=' w-[30%] hover:shadow-md h-auto bg-white  shadow-sm rounded-md space-y-2   px-2 py-4'>
            <div className='flex justify-between items-center'>
                <Image src='/stripe.png' width={60} height={60} className='rounded-md' />
                <div className="flex items-center space-x-2">
                    <Switch id="airplane-mode" />
                </div>
            </div>
            <h1 className='font-[600] text-gray-800 text-2xl'>Stripe</h1>
            <p className='text-sm font-[400] text-gray-500 leading-tight'>s simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a</p>
        </div>
    )
}

export default Card
