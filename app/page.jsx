import React from 'react'

const page = async () => {

    const response = await fetch('http://api.aladhan.com/v1/asmaAlHusna')
    const data = await response.json()

  return (
    <div className='font-dinNext'>
      <div className='text-xl sm:text-4xl text-center flex justify-center items-center py-6 w-full bg-black'>
<span>(اتدرب فقط على api)</span>
<p>موقع اسماء الله الحسنى </p> 

      </div>
      <div className='flex justify-center items-center flex-col gap-4 py-4'>
        {data.data.map((item, index) => (
          <div key={index} className='flex justify-between items-center flex-row-reverse w-[95%] sm:w-[60%] py-4 px-8 bg-slate-950 hover:bg-slate-800 duration-300 cursor-pointer rounded-lg'>
            <div className='text-xl'>{item.name}</div>
            <div className='text-xl'>{item.transliteration}</div>
          </div>
        ))}
      </div>
    </div>
  )
}

export default page