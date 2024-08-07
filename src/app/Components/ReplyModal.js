// Components/ReplyModal.js
'use client';
import React, { useState } from 'react';
import Image from 'next/image';

const ReplyModal = ({ isVisible, onClose, threadId }) => {
  const [toName, setToName] = useState('');
  const [to, setTo] = useState('');
  const [from, setFrom] = useState('');
  const [fromName, setFromName] = useState('');
  const [subject, setSubject] = useState('');
  const [body, setBody] = useState('');
  
  if (!isVisible) return null;

  const handleSubmit = async (e) => {
    e.preventDefault();
    try {
      const response = await fetch(`https://hiring.reachinbox.xyz/api/v1/onebox/reply/${threadId}`, {
        method: 'POST',
        headers: {
          'Authorization': `Bearer ${process.env.NEXT_PUBLIC_API_TOKEN}`, // Ensure to replace with the appropriate method for fetching token
          'Content-Type': 'application/json'
        },
        body: JSON.stringify({
          toName,
          to,
          from,
          fromName,
          subject,
          body
        }),
      });

      if (!response.ok) {
        console.error(`HTTP error! status: ${response.status}`);
        const errorData = await response.json();
        console.error('Error response data:', errorData);
        return;
      }

      // Clear form fields and close the modal
      setToName('');
      setTo('');
      setFrom('');
      setFromName('');
      setSubject('');
      setBody('');
      onClose();
    } catch (error) {
      console.error('Fetch error:', error);
    }
  };

  return (
    <div className='absolute h-full w-full justify-center items-center z-20 flex'>
      <div className='w-[752px] h-[534px] border-[1px] border-[#4A5055] bg-[#141517] rounded-lg flex flex-col gap-2'>
        <div className='bg-[#23272C] flex justify-between w-full px-8 py-5 border-[1px] border-[#41464B] rounded-t-lg'>
          <span className='text-[#BAB9BD] font-bold text-xs'>Reply</span>
          <Image width={10} height={10} src='/cross.svg' alt='Close' onClick={onClose} className='cursor-pointer' />
        </div>
        <form onSubmit={handleSubmit} className='flex flex-col gap-2 px-8 py-2'>
          <div className='flex gap-2 items-center border-b-[1px] border-[#4A5055]'>
            <span className='text-[#BAB9BD] font-normal text-xs'>To : </span>
            <input value={toName} onChange={(e) => setToName(e.target.value)} className=' text-[#BAB9BD] bg-transparent outline-none' type="text" />
            <input value={to} onChange={(e) => setTo(e.target.value)} className=' text-[#BAB9BD] bg-transparent outline-none' type="text" />
          </div>
          <div className='flex gap-2 items-center border-b-[1px] border-[#4A5055]'>
            <span className='text-[#BAB9BD] font-normal text-xs'>From : </span>
            <input value={from} onChange={(e) => setFrom(e.target.value)} className=' text-[#BAB9BD] bg-transparent outline-none' type="text" />
            <input value={fromName} onChange={(e) => setFromName(e.target.value)} className=' text-[#BAB9BD] bg-transparent outline-none' type="text" />
          </div>
          <div className='flex gap-2 items-center border-b-[1px] border-[#4A5055]'>
            <span className='text-[#BAB9BD] font-normal text-xs'>Subject : </span>
            <input value={subject} onChange={(e) => setSubject(e.target.value)} className=' text-[#BAB9BD] bg-transparent outline-none' type="text" />
          </div>
          <div className='flex gap-2 items-center border-b-[1px] border-[#4A5055]'>
            <textarea rows={10} value={body} onChange={(e) => setBody(e.target.value)} className='w-full text-[#BAB9BD] bg-transparent outline-none' placeholder='write your mail here' />
          </div>
          <div className='flex items-center gap-5 h-fit'>
            <div className='w-fit p-4'>
              <button type='submit' className='bg-gradient-to-tr from-[#4B63DD] to-[#0524bff8] flex justify-center items-center gap-[10px] py-2 px-6 rounded w-full'>
                <span className='text-white font-semibold text-sm'>Send</span>
                <Image width={10} height={10} src='/downArrow.svg' alt='Send' />
              </button>
            </div>
            <div className='flex justify-center items-center gap-4 cursor-pointer'>
              <Image width={10} height={10} src='/thunder.svg' alt='Variables' />
              <span className='text-[#ADADAD] font-semibold text-sm'>Variables</span>
            </div>
            <div className='flex justify-center items-center gap-4 cursor-pointer'>
              <Image width={20} height={20} src='/eye.svg' alt='Preview Email' />
              <span className='text-[#ADADAD] font-semibold text-sm'>Preview Email</span>
            </div>
            <div className='flex justify-center items-center gap-3'>
              <Image width={20} height={20} className='cursor-pointer' src='/A.svg' alt='Text Formatting' />
              <Image width={20} height={20} className='cursor-pointer' src='/link.svg' alt='Insert Link' />
              <Image width={20} height={20} className='cursor-pointer' src='/gallary.svg' alt='Gallery' />
              <Image width={20} height={20} className='cursor-pointer' src='/emoji.svg' alt='Emoji' />
              <Image width={20} height={20} className='cursor-pointer' src='/person.svg' alt='Person' />
              <Image width={20} height={20} className='cursor-pointer' src='/code.svg' alt='Code' />
            </div>
          </div>
        </form>
      </div>
    </div>
  );
};

export default ReplyModal;
