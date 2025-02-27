import React from 'react'
import { assets } from '../assets/frontend_assets/assets'
import { FaFacebook, FaTwitter, FaInstagram } from "react-icons/fa";

const Footer = () => {
    return (
        <div>
            <div className='flex flex-cols sm:grid grid-cols-[3fr_1fr_1fr] gap-14 my-10 mt-40 text-sm '>

                <div>
                    <img src={assets.logo} className='mb-5 w-32' alt="" />
                    <p className='w-full md:w-2/3 text-gray-600'>
                        © 2025 Forever Clothing. Embrace timeless fashion with styles designed to make you look and feel your best, every day.
                    </p>
                </div>

                <div>
                    <p className='text-xl font-medium mb-5'>COMPANY</p>
                    <ul className='flex flex-col gap-1 text-gray-600'>
                        <li>HOME</li>
                        <li>ABOUT</li>
                        <li>DELIVERY</li>
                        <li>PRIVACY</li>
                    </ul>
                </div>
                <div>
                    <p className='text-xl font-medium mb-3'>GET IN TOUCH</p>
                    <ul className='flex-row lg:flex gap-5 text-gray-600 cursor-pointer pl-1'>
                        <FaFacebook size={30} className="text-blue-600 pb-2" />
                        <FaTwitter size={30} className="text-blue-400 pb-2" />
                        <FaInstagram size={30} className="text-pink-500 pb-2" />
                    </ul>
                </div>
            </div>
            <div>
                <hr />
                <p className='py-5 text-sm text-center'>Copyright 2025@ forever.com - All Right Reserved.</p>
            </div>
        </div>
    )
}

export default Footer
