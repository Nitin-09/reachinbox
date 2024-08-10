'use client';
import React, { useState } from 'react';
import Image from 'next/image';

const OneBox =({ threadData, toggleModalVisibility }) => {
  const [viewAll, setViewAll] = useState(false);

  const handleViewAllClick = () => {
    setViewAll(true);
  };

  const formatDate = (dateString) => {
    const date = new Date(dateString);

    const day = date.getDate();
    const month = date.toLocaleString('en-GB', { month: 'long' });
    const year = date.getFullYear();
    const time = date.toLocaleTimeString('en-GB', { hour: '2-digit', minute: '2-digit', hour12: true });

    return `${day} ${month} ${year} : ${time}`;
  };

  const messagesToDisplay = viewAll ? threadData?.data : threadData?.data?.slice(0, 1);

  return (
    <div className='basis-1/2 flex flex-col '>
      <div className='flex justify-between items-center px-2 py-4 border-b-[1px] border-[#E0E0E0] dark:border-[#101113]'>
        <div className='p-1 flex flex-col gap-2'>
          <span className='text-[#343A40] dark:text-white text-sm font-semibold'>Orlando</span>
          <span className='text-[#343a40a0] dark:text-[#ffffff5f] text-xs font-normal'>orladom@gmail.com</span>
        </div>
        <div className='flex gap-4 justify-center items-center'>
          <div className='bg-white dark:bg-[#1F1F1F] border-[1px] border-[#DFE3E8] dark:border-[#343A40] rounded-[4px] text-[#172B4D] dark:text-[#D3D7DB] text-xs font-semibold flex gap-[6px] py-[6px] px-[8px]'>
            <div className='flex items-center gap-[6px]'>
              <div className='w-4 h-4 bg-[#E6D162] border-[3px] border-spacing-2 border-[#FBF5D9] dark:border-[#444234] rounded-full'></div>

              <span >Meeting Completed</span>
            </div>
            <Image width={15} height={15} src='/downArrow.svg' alt='' />
          </div>
          <div className='bg-white dark:bg-[#1F1F1F] border-[1px] border-[#DFE3E8] dark:border-[#343A40] rounded-[4px] text-[#172B4D] dark:text-[#D3D7DB] text-xs font-semibold flex items-center justify-center gap-[6px] py-[6px] px-[8px]'>
            <span>Move</span>
            <Image width={15} height={15} src='/downArrow.svg' alt='' />
          </div>
          <div className='bg-white dark:bg-[#1F1F1F] border-[1px] border-[#DFE3E8] dark:border-[#343A40] rounded-[4px] text-[#172B4D] dark:text-[#D3D7DB] text-xs font-semibold flex items-center justify-center gap-[6px] py-[6px] px-[8px]'>
            <span>...</span>
          </div>
        </div>
      </div>
      <div className='flex flex-col flex-1 overflow-hidden'>
        <div className='flex-1 overflow-y-auto p-5 custom-scrollbar'>
          <div className='flex flex-col gap-4'>
            <div>
              <div className='flex justify-center items-center relative'>
                <span className='text-[#637381] dark:text-white relative z-10 bg-[#EEF1F4] dark:bg-[#171819] p-2 text-[10px] font-semibold rounded-sm'>Today</span>
                <hr className='border-[#7777772d] dark:border-[#f8fafc4f] border-[1px] absolute w-full' />
              </div>
            </div>
            <div className={`flex flex-col gap-4 overflow-y-scroll ${viewAll ? 'h-[400px]' : ''}`}>
              {messagesToDisplay?.map((mail) => (
                <div key={mail.id} className='px-4 py-3 bg-[#F9F9F9] dark:bg-[#141517] rounded border-[#f8fafc4f] border-[1px]'>
                  <div className='flex flex-col gap-8'>
                    <div className='flex flex-col gap-3'>
                      <div className='flex justify-between'>
                        <span className='text-black dark:text-[#F8FAFC] font-semibold text-sm'>{mail.subject}</span>
                        <span className='text-[#637381] dark:text-[#7F7F7F] font-normal text-sm'>{formatDate(mail.sentAt)}</span>
                      </div>
                      <span className='text-[#637381] dark:text-[#AEAEAE] font-normal text-sm'>from : {mail.fromEmail} cc : {mail.cc}</span>
                      <span className='text-[#637381] dark:text-[#AEAEAE] font-normal text-sm'>to : {mail.toEmail}</span>
                    </div>
                    <div>
                      <p
                        className='w-full text-[#172B4D] dark:text-[#E1E0E0] font-normal text-sm'
                        dangerouslySetInnerHTML={{ __html: mail.body }}
                      />
                    </div>
                  </div>
                </div>
              ))}
            </div>
            {!viewAll && threadData?.data?.length > 1 && (
              <div>
                <div className='flex justify-center items-center relative'>
                  <div
                    className='flex gap-2 justify-center items-center bg-[#EEF1F4] dark:bg-[#171819] p-2 relative rounded-sm z-10 cursor-pointer'
                    onClick={handleViewAllClick}
                  >
                    <Image width={10} height={10} src='/view.svg' alt='' />
                    <span className='text-[#637381] dark:text-white text-[10px] font-semibold'>View all {threadData?.data?.length} replies</span>
                  </div>
                  <hr className='border-[#7777772d] dark:border-[#f8fafc4f] border-[1px] absolute w-full' />
                </div>
              </div>
            )}
          </div>
        </div>
        <div className='w-fit p-4 fixed bottom-1 z-10'>
          <button onClick={toggleModalVisibility} className='bg-gradient-to-tr from-[#4B63DD] to-[#0524bff8] flex justify-center items-center gap-[10px] py-2 pl-6 pr-10 rounded w-full'>
            <Image width={20} height={20} src='/reply.svg' alt='' />
            <span className='text-white font-semibold text-sm'>Reply</span>
          </button>
        </div>
      </div>
      <style jsx>{`
        .custom-scrollbar::-webkit-scrollbar {
          width: 6px; /* Small width for the scrollbar */
        }

        .custom-scrollbar::-webkit-scrollbar-track {
          background: #1f1f1f;
        }

        .custom-scrollbar::-webkit-scrollbar-thumb {
          background: #4a4a4a;
          border-radius: 4px;
        }

        .custom-scrollbar::-webkit-scrollbar-thumb:hover {
          background: #6d6d6d;
        }

        .custom-scrollbar {
          scrollbar-color: #4a4a4a #1f1f1f;
          scrollbar-width: thin; /* Thin scrollbar for Firefox */
        }
      `}</style>
    </div>
  );
}

export default OneBox;
