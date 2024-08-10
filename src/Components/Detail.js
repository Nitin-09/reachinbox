import React from 'react'
import Image from 'next/image'

const Detail=()=> {
    return (
        <div className='basis-1/4 p-4 border-l-[1px] border-[#33383F]'>
            <div className='bg-[#ECEFF3] dark:bg-[#23272C] py-2 px-3 rounded-lg'>
                <span className='text-[#454F5B] dark:text-white font-semibold text-sm'>Lead Details</span>
            </div>
            <div className='px-3 pt-4 py-2 flex flex-col gap-5'>
                <div className='flex justify-between'>
                    <span className='text-[#637381] dark:text-white font-normal font-sans text-xs'>Name</span>
                    <span className='text-black dark:text-[#B9B9B9] font-normal font-sans text-sm'>Orlando</span>
                </div>
                <div className='flex justify-between'>
                    <span className='text-[#637381] dark:text-white font-normal font-sans text-xs'>Contact No</span>
                    <span className='text-black dark:text-[#B9B9B9] font-normal font-sans text-sm'>+54-9062827869</span>
                </div>
                <div className='flex justify-between'>
                    <span className='text-[#637381] dark:text-white font-normal font-sans text-xs'>Email ID</span>
                    <span className='text-black dark:text-[#B9B9B9] font-normal font-sans text-sm'>orlando@gmail.com</span>
                </div>
                <div className='flex justify-between'>
                    <span className='text-[#637381] dark:text-white font-normal font-sans text-xs'>Linkedin</span>
                    <span className='text-black dark:text-[#B9B9B9] font-normal font-sans text-sm'>linkedin.com/in/timvadde/</span>
                </div>
                <div className='flex justify-between'>
                    <span className='text-[#637381] dark:text-white font-normal font-sans text-xs'>Company Name</span>
                    <span className='text-black dark:text-[#B9B9B9] font-normal font-sans text-sm'>Reachinbox</span>
                </div>
            </div>
            <div className='bg-[#ECEFF3] dark:bg-[#23272C] py-2 px-3 rounded-lg'>
                <span className='text-[#454F5B] dark:text-white font-semibold text-sm'>Activities</span>
            </div>
            <div className='p-4 flex flex-col gap-5'>
                <span className='text-[#172B4D] dark:text-white font-semibold text-sm'>Campaign Name</span>
                <div className='flex gap-3'>
                    <span className='text-[#454F5B] dark:text-white font-semibold text-xs border-r-[1px] border-[#403F3F] pr-2'>3 Steps</span>
                    <span className='text-[#454F5B] dark:text-white font-semibold text-xs'>5 Days in Sequence</span>
                </div>
                <div className='flex flex-col gap-8 h-full relative'>
                    <div className='border-l-[1px] border-[#DFE3E8] dark:border-[#41464B] h-3/4 my-3 absolute left-4 z-0'></div>
                    <div className='flex gap-4 relative z-10'>
                        <div className='w-8 h-8 bg-[#EEF1F4] dark:bg-[#23272C] border-[1px] rounded-full border-[#DFE3E8] dark:border-[#41464B] flex justify-center items-center'>
                            <Image width={20} height={20} src='/mail.svg' alt=''></Image>
                        </div>
                        <div className='flex flex-col gap-2'>
                            <span className='text-[#172B4D] dark:text-white font-semibold text-sm'>Step 1: Email</span>
                            <div className='flex gap-2'>
                                <Image width={10} height={10} src='/cn.svg' alt=''></Image>
                                <span className='text-[#637381] dark:text-[#B9B9B9] font-normal text-[12px]'>Sent</span>
                                <span className='text-[#637381] dark:text-[#B9B9B9] font-medium text-[12px]'>3rd, Feb</span>
                            </div>
                        </div>
                    </div>
                    <div className='flex gap-4 relative z-10'>
                        <div className='w-8 h-8 bg-[#EEF1F4] dark:bg-[#23272C] border-[1px] rounded-full border-[#DFE3E8] dark:border-[#41464B] flex justify-center items-center'>
                            <Image width={20} height={20} src='/mail.svg' alt=''></Image>
                        </div>
                        <div className='flex flex-col gap-2'>
                            <span className='text-[#172B4D] dark:text-white font-semibold text-sm'>Step 1: Email</span>
                            <div className='flex gap-2'>
                                <Image width={10} height={10} src='/cn.svg' alt=''></Image>
                                <span className='text-[#637381] dark:text-[#B9B9B9] font-normal text-[12px]'>Sent</span>
                                <span className='text-[#637381] dark:text-[#B9B9B9] font-medium text-[12px]'>3rd, Feb</span>
                            </div>
                        </div>
                    </div>
                    <div className='flex gap-4 relative z-10'>
                        <div className='w-8 h-8 bg-[#EEF1F4] dark:bg-[#23272C] border-[1px] rounded-full border-[#DFE3E8] dark:border-[#41464B] flex justify-center items-center'>
                            <Image width={20} height={20} src='/mail.svg' alt=''></Image>
                        </div>
                        <div className='flex flex-col gap-2'>
                            <span className='text-[#172B4D] dark:text-white font-semibold text-sm'>Step 1: Email</span>
                            <div className='flex gap-2'>
                                <Image width={10} height={10} src='/cn.svg' alt=''></Image>
                                <span className='text-[#637381] dark:text-[#B9B9B9] font-normal text-[12px]'>Sent</span>
                                <span className='text-[#637381] dark:text-[#B9B9B9] font-medium text-[12px]'>3rd, Feb</span>
                            </div>
                        </div>
                    </div>
       
                </div>
            </div>
        </div>
    )
}

export default Detail
