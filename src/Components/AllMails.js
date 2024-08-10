'use client'
import React, { useEffect } from 'react'
import Image from 'next/image';

const AllMails=({ data, onMailClick })=> {
  const formatDate = (dateString) => {
    const date = new Date(dateString);
    const options = { day: '2-digit', month: 'short' };
    const formattedDate = date.toLocaleDateString('en-GB', options).replace(',', '');
    return formattedDate;
  };
  useEffect(() => {
  }, [data])

  return (
    <div className='px-2 border-r-[1px] border-[#E0E0E0] dark:border-[#33383F] h-screen basis-1/4 '>
      <div className=' flex flex-col gap-2'>
        <div className='flex justify-between items-center px-2 py-4'>
          <div className='flex flex-col gap-2 pt-[7px]'>
            <span className='text-[#4285F4] font-sans font-bold text-xl p-[10px]'>All Inbox(s)</span>
            <span className='text-[#343A40] dark:text-white text-sm font-medium py-[2px] px-[10px]'>25/25 <span className='text-[#7F7F7F]'>Inboxes selected</span></span>
          </div>
          <button className='h-8 w-8 bg-white dark:bg-[#25262B] border-[1px] dark:border-0 border-[#DFE3E8] flex justify-center items-center rounded-[4px] p-2'>
            <Image width={30} height={30} src='/reload.svg' className='invert dark:invert-0' alt=''></Image>
          </button>
        </div>
        <div>
          <div className='p-2 flex flex-col gap-4'>
            <div className='flex bg-[#F4F6F8] dark:bg-[#23272C] border-[1px]  border-[#ffffff1d] py-1 px-[6px] rounded-md gap-2'>
              <Image width={20} height={20} src='/search1.svg' className='invert dark:invert-0'  alt=''></Image>
              <input className='bg-transparent text-[#ADBAC7] dark:text-[#ffffff2b] outline-none dark:placeholder:text-[#ffffff2b] placeholder:text-[#ADBAC7]' placeholder='Search' type="text" />
            </div>
          </div>
          <div className='flex justify-between py-[3px] px-2'>
            <div className='flex items-center gap-4 '>
              <span className='w-[34px] h-[26px] bg-[#ECECEC] dark:bg-[#222426] px-2 py-[3px] rounded-[17px] text-[#5C7CFA] font-semibold text-sm'>26</span>
              <span className='text-[#172B4D] dark:text-[#E6E6E6] text-sm font-semibold'>New Replies</span>
            </div>
            <div className='flex items-center gap-4'>
              <span className='text-[#172B4D] dark:text-[#E6E6E6] text-sm font-semibold'>Newest</span>
              <Image width={15} height={15} src='/downArrow.svg' className='invert dark:invert-0' alt=''></Image>
            </div>
          </div>
        </div>
        <div className='px-[9px]'>
          <div className='flex flex-col gap-2 border-t-[2px] border-[#ffffff0c] py-[12px] px-2'>
            <div className='flex flex-col gap-3'>
              {data?.data.map((mail) => (
                <div key={mail.id} onClick={() => onMailClick(mail.threadId)} className='flex cursor-pointer hover:bg-[#F4F6F8] dark:hover:bg-[#16161daa]'>
                  <div className='flex flex-col gap-2 w-full border-l-[3px] border-l-[#5C7CFA] p-3 border-t-[1px] border-b-[1px] border-[#ffffff0f]'>
                    <div className='w-full'>
                      <div className='flex items-center justify-between w-full'>
                        <span className='text-[#343A40] dark:text-[#FFFFFF] text-sm font-medium'>{mail.fromEmail}</span>
                        <span className='text-[#919EAB] dark:text-[#fcfcfc59] text-xs font-normal'>{formatDate(mail.sentAt.substring(0, 10))}</span>
                      </div>
                      <div>
                        <span className='text-[#172B4D] dark:text-[#FFFFFF] text-xs font-medium'>{mail.subject}</span>
                      </div>
                    </div>
                    <div className='flex gap-2'>
                      <div className='flex bg-[#F0F0F0] dark:bg-[#222426] py-[3px] px-2 gap-2 rounded-[17px] w-fit items-center'>
                        <div className='h-2 w-2 rounded-full bg-[#E6D162] '> </div>
                        <span className='text-[#E6D162] text-[12px] font-semibold pt-0.5'>Meeting Completed</span>
                      </div>
                      <div className='flex bg-[#F0F0F0] dark:bg-[#222426] py-[3px] px-2 gap-2 rounded-[17px] w-fit items-center'>
                        <Image width={13} height={13} src='/cn.svg' alt=''></Image>
                        <span className='text-[#637381] dark:text-[#ffffff81] text-[12px] font-semibold'>Campaign Name</span>
                      </div>
                    </div>

                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}

export default AllMails
