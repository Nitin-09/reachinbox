import React from 'react'
import Image from 'next/image'

function Asidebar() {
    return (
        <div className='h-screen px-1 w-14 flex flex-col items-center gap-6 border-r-[1px] border-[#D8D8D8] dark:border-[#343A40] bg-[#FAFAFA] dark:bg-[#101113]'>
            <div className='w-12 h-[70px] flex justify-center items-center'>
                <Image width={32} height={32} alt="" className='' src="\logo.svg" alt=''></Image>
            </div>
            <div className='w-full h-full py-4 px-2'>
                <div className='flex flex-col justify-center items-center aspect-square w-7 gap-8'>
                    <Image width={24} height={24} alt="" className='object-contain' src="\home.svg" alt=''></Image>
                    <Image width={20} height={20} alt="" className='object-contain' src="\search.svg" alt=''></Image>
                    <Image width={20} height={20} alt="" className='object-contain' src="\email.svg" alt=''></Image>
                    <Image width={20} height={20} alt="" className='object-contain' src="\arrow.svg" alt=''></Image>
                    <Image width={20} height={20} alt="" className='object-contain' src="\list.svg" alt=''></Image>
                    <Image width={20} height={20} alt="" className='object-contain' src="\menu.svg" alt=''></Image>
                    <Image width={20} height={20} alt="" className='object-contain' src="\bar.svg" alt=''></Image>
                </div>
            </div>
            <div className='w-12 h-14 flex justify-center items-center'>
                <span className='h-8 w-8 rounded-full text-white bg-[#054F31] p-1 text-[15px] font-normal flex justify-center items-center '>
                    AS
                </span>
            </div>
        </div>
    )
}

export default Asidebar
