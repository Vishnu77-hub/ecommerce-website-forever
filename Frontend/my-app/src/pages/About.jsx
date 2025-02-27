import React from 'react'
import Title from '../components/Title'
import { assets } from '../assets/frontend_assets/assets'

const About = () => {
  return (
    <div>
      <div className='text-2xl text-cener pt-8 bprder-t'>
        <Title text1={'ABOUT'} text2={' US'} />
      </div>
      <div className='my-10 flex flex-col md:flex-row gap-16'>
        <img className='w-full md:max-w-[450px]' src={assets.about_img} alt="" />
        <div className='flex flex-col gap-6 justify-center md:w-2/4 text-gray-600'>
          <p>At Forever Clothing, we believe fashion is more than just clothing—it's a statement, a feeling, and a lifestyle. Our journey began with a simple vision: to create timeless, high-quality, and trend-forward apparel that makes everyone feel confident and stylish.</p>
          <p>With a focus on premium fabrics, modern designs, and sustainable practices, we craft collections that blend comfort with sophistication. Whether you’re looking for everyday essentials or bold statement pieces, Forever Clothing is here to redefine your wardrobe with elegance and edge.</p>
          <b className='text-gray-800'>Our Mission</b>
          <p>Our mission is to redefine fashion by blending modern designs with comfort, sustainability, and affordability. We strive to craft collections that not only follow the latest trends but also stand the test of time. Through premium fabrics, ethical production, and a customer-first approach, we aim to make fashion accessible to everyone, everywhere.</p>
        </div>
      </div>
      <div className='text-4xl py-4'>
        <Title text1={'OUR'} text2={' STORY'} />
      </div>
      <div className='flex flex-col md:flex-row text-sm mb-20'>
        <div className='border border-black px-8 md:px-10 py-8 sm:py-20 flex flex-col gap-3'>
          <b className='border border-gray-400 p-1'>Where It All Began:</b>
          <p>At Forever Clothing, we started with a simple idea—to create fashion that transcends fleeting trends and remains stylish forever. What began as a vision to craft timeless apparel soon turned into a mission to redefine everyday fashion with quality, comfort, and elegance.</p>
        </div>
        <div className='border border-black px-10 md:px-16 py-8 sm:py-20 flex flex-col gap-3'>
          <b className='border border-gray-400 p-1'>The Heart of Our Brand:</b>
          <p>We believe that fashion is more than just clothing—it’s an extension of your personality. That’s why every piece we design is a blend of premium fabrics, modern aesthetics, and sustainable practices. Our goal is to make you feel confident, empowered, and effortlessly stylish in everything you wear.</p>
        </div>
        <div className='border border-black px-10 md:px-16 py-8 sm:py-20 flex flex-col gap-3'>
          <b className='border border-gray-400 p-1'>A Community Beyond Fashion:</b>
          <p>Forever Clothing is not just a brand; it’s a movement. A place where creativity meets individuality, and where fashion lovers come together to embrace their unique style. We’re here to inspire, innovate, and evolve—because great fashion should last forever.</p>
        </div>
        <div className='border border-black px-10 md:px-16 py-8 sm:py-20 flex flex-col gap-3'>
          <b className='border border-gray-400 p-1'>Join Our Journey:</b>
          <p>We invite you to be part of our story. Discover fashion that speaks to you, that moves with you, and that lasts beyond seasons.
            <span className='text-lg'>Wear Forever. Stay Timeless.</span>
          </p>
        </div>

      </div>
    </div>
  )
}

export default About
