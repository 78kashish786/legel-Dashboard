import React from 'react'

function ContactTable() {
    return (
        <div>
            <table>
                <tr className='flex items-center px-1 py-2 rounded-md text-sm font-[500] justify-between gap-10 bg-gray-100 w-[75vw] mt-5'>
                    <td className='flex gap-3 items-center'><div className='w-[15px] h-[15px] rounded-sm bg-white border'></div>Name</td>
                    <td>Email</td>
                    <td>Address</td>
                    <td>Status</td>
                    <td>File</td>
                </tr>
                {
                    [1, 2, 3, 4, 5].map((item, index) => {
                        return (
                            <tr className='flex items-center px-1 py-4 rounded-md text-sm font-[500] justify-between gap-10 bg-white  border-b  w-[75vw] '>
                                <td className='flex gap-3 items-center'><div className='w-[15px] h-[15px] rounded-sm bg-white border'></div><div>
                                    <h1 className='font-[500] text-md text-gray-700'>Aryan Seth</h1>
                                    <h6 className='text-[12px] font-[400] text-gray-500'>+91 848993548</h6></div></td>
                                <td>aryan23@gmil.com</td>
                                <td>67554.rohtak</td>
                                <td>Status</td>
                                <td>File</td>
                            </tr>
                        )
                    })
                }

            </table>
        </div>
    )
}

export default ContactTable
