import React from 'react'

const NewsLetterBox = () => {

    const onSubmitHandler = (e) => {
        e.preventDefault();
    }

    return (
        <div className='text-center'>
            <p className='text-2xl font-medium text-gray-800'>SUBSCRIBE NOW AND GET 30% OFFER</p>
            <p className='text-gray-400 mt-3'>"Subscribe now and take advantage of an exclusive 30% discount on your purchase. Don't miss this limited-time offer!"</p>
            <form onSubmit={onSubmitHandler} className='w-full sm:w-1/2 flex items-center gap-3 mx-auto my-6 border border-black pl-5'>
                <input type="email" className='w-full sm:flex-1 outline-none' placeholder='ENTER YOUR EMAIL' required />
                <button className='bg-black text-white text-xs px-10 py-4' type='submit'>SUBSCRIBE</button>
            </form>
        </div>
    )
}

export default NewsLetterBox
