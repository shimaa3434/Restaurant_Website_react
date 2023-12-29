import React from 'react'
import img1 from "../../assets/biryani.png"
import img2 from "../../assets/biryani2.png"
import img3 from "../../assets/biryani3.png"

const servicesData = [
  {
    id: 1,
    img: img1,
    name: "lorem ipsum",
    description: " Lorem ipsum dolor sit amet consectetur adipisicing elit. Excepturi, neque. Aperiam minus vel quasi necessitatibus ad, eligendi pariatur id laboriosam"
  },
  {
    id: 2,
    img: img2,
    name: "lorem ipsum",
    description: " Lorem ipsum dolor sit amet consectetur adipisicing elit. Excepturi, neque. Aperiam minus vel quasi necessitatibus ad, eligendi pariatur id laboriosam"
  },
  {
    id: 3,
    img: img3,
    name: "lorem ipsum",
    description: " Lorem ipsum dolor sit amet consectetur adipisicing elit. Excepturi, neque. Aperiam minus vel quasi necessitatibus ad, eligendi pariatur id laboriosam"
  },
]
const Services = () => {
  return (
    <div className='py-10'>
        <div className="container">
          {/* header section */}
          <div className='text-center mb-20 max-w-[400px] mx-auto'>
            <p className='text-sm bg-clip-text text-transparent bg-gradient-to-r from-primary to-secondary'>our Services</p>
            <h1 className='text-3xl font-bold text-black dark:text-white'>Services</h1>
            <p className='text-xa text-gray-400'>
              Lorem ipsum dolor sit amet consectetur adipisicing elit. Excepturi, neque. Aperiam minus vel quasi necessitatibus ad, eligendi pariatur id laboriosam?
            </p>
          </div>
          {/* card section */}
          <div className='grid grid-cols-1 sm:grid-cols-3 md:grid-cols-3 gap-14 md:gap-5 place-items-center'>
              {
                servicesData.map((item)=> (
                  <div key={item.id} className='max-w-[300px] group rounded-2xl bg-white dark:bg-gray-800 hover:bg-primary dark:hover:bg-primary duration-200 p-4 shadow-xl'>
                    <div className='h-[100px]'>
                      <img src={item.img} alt="" className='max-w-[200px] mx-auto block transform -translate-y-20 group-hover:scale-105 group-hover:rotate-6 duration-300'/>
                    </div>
                     <div className='p-5 text-center'>
                        <h2 className='text-xl font-bold group-hover:text-white duration-300'>{item.name}</h2>
                        <p className='text-gray-500 text-sm line-clamp-2 group-hover:text-white duration-300'>{item.description}</p>
                     </div>
                  </div>
                ))
              }
          </div>
        </div>
    </div>
  )
}

export default Services