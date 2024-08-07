'use client'
import Image from "next/image";

export default function Login() {
  const handleGoogleLogin = () => {
    window.location.href = "https://hiring.reachinbox.xyz/api/v1/auth/google-login?redirect_to=http://localhost:3000/onebox";
  };
  

  return (
    <div className="w-screen h-screen bg-black overflow-hidden flex flex-col">
      <div className="w-full h-16 flex justify-center items-center">
        <Image width={156.77} height={24} src="/logo.png"></Image>
      </div>
      <div className="w-full h-full flex justify-center items-center">
        <div className="border-[#343A40] border-[1px] w-[460px] h-[312px] bg-[#111214] rounded-[17px] pt-6 p-10 flex flex-col gap-12">
          <div className="flex flex-col justify-between items-center gap-6 w-full">
            <span className="text-white font-semibold text-xl font-sans">Create a new account</span>
            <button onClick={handleGoogleLogin} className="flex justify-center items-center gap-[10px] border-[1px] border-[#707172] px-4 py-2 w-full rounded-[4px]">
              <Image width={16} height={21} src='\google.svg'></Image>
              <span className="text-[#CCCCCC] font-sans font-normal text-base">Sign Up with Google</span>
            </button>
          </div>
          <div className="flex flex-col justify-end items-center gap-6">
            <button className="bg-gradient-to-bl from-[#4b63dd] to-[#0524BF] text-white px-[35px] py-[13px] text-sm font-sans font-semibold">Create an Account</button>
            <span className="text-[#909296] font-sans font-normal text-base">Already have an account? <a className="text-[#C1C2C5]" href="/">Sign In</a></span>
          </div>
        </div>
      </div>
      <div className="flex justify-center items-center h-6 p-2 bg-[#121212] border-[#25262B] border-[1px]">
        <span className="text-[#5C5F66] text-xs font-sans font-normal">© 2023 Reachinbox. All rights reserved.</span>
      </div>
    </div>
  );
}
