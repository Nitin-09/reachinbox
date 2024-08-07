import React from 'react'
import Image from 'next/image'

function NoMails() {
    return (
        <div className='w-full h-full flex justify-center items-center '>
            <div className='flex flex-col justify-center items-center gap-12'>
                <Image width={250} height={250} className='cursor-pointer' src='/no.svg' alt='Text Formatting' />
                <div className='flex flex-col gap-6 justify-center items-center'>
                    <span className='text-black dark:text-[#FFFFFF] font-bold text-2xl'>It’s the beginning of a legendary sales pipeline </span>
                    <div className='flex flex-col justify-center items-center'>
                        <span className='text-black dark:text-[#9E9E9E] font-medium text-lg'>When you have inbound E-mails </span>
                        <span className='text-black dark:text-[#9E9E9E] font-medium text-lg'>you’ll see them here</span>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default NoMails
