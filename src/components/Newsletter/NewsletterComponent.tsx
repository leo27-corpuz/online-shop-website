'use client'
import React, { useState } from 'react';
import { robotoRegular, robotoRegularBold } from "@/fonts/font";
import FeatherIcon from 'feather-icons-react';
import ButtonLoading from '@/components/Loading/ButtonLoading';
const NewslettterComponents: React.FC  = () => {
    const [email, setEmail] = useState<string | number>('');
    const [submitStatus, setSubmitStatus] = useState<boolean>(false);
    const submitNewsletter = (e: React.FormEvent) => {
        e.preventDefault();
        setSubmitStatus(true)
    }
    return (
        <>
            <div className="container mx-auto mb-8">
                <div className="small-to-max lg:w-6/12 mx-auto">
                    <h1 className={`text-2xl tracking text-primaryTextColor text-center md:text-3xl lg:text-4xl ${robotoRegularBold.className}`}>Subscribe to our newsletter to get updates to our latest collections</h1>
                    <p className={`text-center mt-4 text-sm mx-auto text-primaryTextColor lg:text-base ${robotoRegular.className}`}>Get 20% off on your first order just by subscribing to our newsletter</p>
                </div>
                <div className="hr-container w-1/4 mx-auto lg:w-40">
                    <hr className="mb-8 mt-4 small-to-max" /> 
                </div>
                <form onSubmit={submitNewsletter} className='lg:w-5/12 mx-auto small-to-max'>
                   <div className="form-container flex justify-between">
                        <div className="input-container w-[70%] flex gap-2 border-l-2 border-t-2 border-b-2 border-inherit py-2 px-5 rounded-l-md bg-mainBg lg:w-4/5">
                            <div className="icon">
                                <FeatherIcon icon='mail' className="text-textColorInput w-5"/>
                            </div>
                            <input type="email" className="w-full text-base font-mono-regular bg-transparent text-textColorInput outline-none" placeholder='Enter your email' value={email}  onChange={((e: React.ChangeEvent<HTMLInputElement>) => {
                                setEmail(e.target.value)
                            })}/>
                        </div>
                        <button type='submit' disabled={submitStatus} className="w-[30%] text-base font-mono-regular overflow-hidden text-white bg-lightCoffee py-2 px-3 rounded-r-md lg:w-3/12">
                           {submitStatus ? <ButtonLoading /> : <span>Subscribe</span>}
                        </button>
                   </div>
                </form>
            </div>
        </>
    )
}

export default NewslettterComponents;