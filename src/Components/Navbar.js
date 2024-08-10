import React from 'react';
import Image from 'next/image';


const Navbar=({toggleTheme})=> {
  return (
    <div className='w-full bg-white dark:bg-[#1F1F1F] h-16 border-b-[1px] border-[#DEDEDE] dark:border-[#343A40] flex justify-between items-center p-6'>
      <span className='text-[#5B5F66] dark:text-white font-sans font-bold text-base'>Onebox</span>
      <div className='flex gap-[22px]'>
        <div
          className='flex border-2 w-fit bg-[#E9EAEC] dark:bg-[#222426] border-[#DADEE1] dark:border-[#343A40] gap-[7px] px-[5px] py-[3px] rounded-[80px] cursor-pointer'
          onClick={toggleTheme}
        >
          <Image width={20} height={20} alt='' src='\moon.svg'></Image>
          <Image width={20} height={20} alt='' src='\sun.svg'></Image>
        </div>
        <div className='flex gap-2 justify-center items-center'>
          <span className='font-sans font-semibold text-sm text-[#454F5B] dark:text-white'>Tim&apos;s Workspace</span>
          <span><Image width={20} height={20} src='\downArrow.svg' className='invert dark:invert-0' alt=''></Image></span>
        </div>
      </div>
    </div>
  );
}

export default Navbar;

