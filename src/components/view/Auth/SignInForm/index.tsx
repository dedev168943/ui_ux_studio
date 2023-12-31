import React from 'react'
import personImg from 'assets/person.svg'
import logoImg from 'assets/logo-blk.png'
import { PasswordIcon, EmailIcon, GoogleIcon, AppleIcon } from 'components'
import pinkBgImg from 'assets/pink-bg.png'

export const SignInFormView: React.FC = () => {
  return (
    <div className="bg-[url('assets/sidebar-bgimg.png')] bg-no-repeat">
      <img src={pinkBgImg} className="absolute  z-10" alt="pink Img" />
      <div className="container flex mx-auto max-w-[1440px] min-h-screen">
        <img className="ml-60 mt-32 mb-24 mr-20" src={personImg} alt="" />
        <div className="flex flex-col mr-26 justify-center items-center">
          <img className="mt-18 mb-4" src={logoImg} alt="" />
          <div className="flex flex-col items-center rounded-3xl shadow shadow-white/15">
            <h1 className="tracking-0.5 leading-7 font-extrabold not-italic text-2xl font-poppins text-333333 mt-11">
              Log into account
            </h1>
            <h6 className="text-333333 font-poppins text-xs not-italic font-normal leading-7 tracking-0.5 mb-6">
              Use your credentials to access your account.
            </h6>

            <div className="relative mb-3">
              <div className="absolute inset-y-0 left-0 flex items-center pl-3.5 pointer-events-none">
                <EmailIcon className="w-5 h-5 fill-B8B8B8" />
              </div>
              <input
                type="text"
                id="input-group-1"
                className="w-96 h-14 bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-2xl focus:ring-blue-500 focus:border-blue-500 block  pl-10 p-2.5  dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500"
                placeholder="Enter your Email address"
              />
            </div>
            <div className="relative mb-3">
              <div className="absolute inset-y-0 left-0 flex items-center pl-3.5 pointer-events-none">
                <PasswordIcon className="w-6 h-6 fill-B8B8B8" />
              </div>
              <input
                type="text"
                id="input-group-1"
                className="w-96 h-14 bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-2xl focus:ring-blue-500 focus:border-blue-500 block  pl-10 p-2.5  dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500"
                placeholder="Password"
              />
            </div>
            <div className="flex flex-row justify-between w-96 text-[#666] mt-4 font-poppins text-">
              <div className="">
                <input type="checkbox" className="" /> Remember Me
              </div>
              <div>
                <a href="/forgot-pwd">Forgot password?</a>
              </div>
            </div>
            <div className="relative m-6">
              <button className="w-96 h-14 bg-575DFB rounded-[30px] text-white font-poppins text-16 not-italic font-medium tracking-[-0.176px] leading-7">
                Sign In
              </button>
            </div>

            <hr className="border-gray-400 border-t w-96 text-black text-opacity-50]" />
            <span className=" mt-[-15px] bg-white text-black text-opacity-50">
              or Log in with
            </span>
            <div className="flex flex-row gap-3">
              <button className="my-4 px-8 py-4 rounded-2xl border-black border border-opacity-10">
                <GoogleIcon />
              </button>
              <button className="my-4 px-8 py-4 rounded-2xl border-black border border-opacity-10">
                <AppleIcon />
              </button>
            </div>
            <div>
              <span className="text-black text-opacity-50 font-poppins not-italic text-base font-normal leading-9">
                Don’t have an account?&nbsp;
              </span>
              <a
                className="font-poppins font-semibold text-base leading-9"
                href="/signup"
              >
                Sign up
              </a>
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}
