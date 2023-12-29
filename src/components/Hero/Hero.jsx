import React, { useState } from 'react'
import "./hero.css"
import bgImg from "../../assets/vector3.png"
import food1 from "../../assets/biryani2.png"
import food2 from "../../assets/biryani3.png"
import food3 from "../../assets/biryani5.png"


const ImageList= [
  {id: 1, image: food1},
  {id: 2, image: food2},
  {id: 3, image: food3},
]
// const bgImage= {
//   backgroundImage: `url${bgImg}`,
//   backgroundPosition: "center",
//   backgroundSize: "cover",
//   backgroundRepeat: "no-repeat",
//   with: "100%",
//   height: "100%",
// }
const Hero = () => {
  const [image, setImage]= useState(food1)
  return (
    <div  className='bgImage min-h-[550px] sm:min-h-[600px] bg-gray-100 dark:bg-gray-950 dark:text-white duration-200 flex justify-center items-center'>
      <div className='container pb-8 sm:pb-0'>
          <div className='grid grid-cols-1 sm:grid-cols-2'>
            {/* text section */}
            <div className='flex flex-col justify-center gap-4 pt-12 sm:pt-0 text-center sm:text-left order-2 sm:order-1'>
                <h1 className='text-5xl sm:text-6xl lg:text-7xl font-bold'>Lorem ipsum dolor sit.</h1>
              <p className='text-sm'>Lorem ipsum dolor sit amet consectetur adipisicing elit. Nemo ipsam fugit nisi sunt, in a doloribus? Architecto quia ipsam repellendus!</p>
              <div>
                <button className='bg-gradient-to-r from-primary to-secondary text-white px-4 py-2 rounded-full hover:scale-105 duration-200'>Order Now</button>
              </div>
            </div>
            {/* image section */}
            <div className='order-1 sm:order-2 min-h-[450px] sm:min-h-[450px] flex justify-center items-center relative'>
              {/* main image section */}
              <div className='flex justify-center items-center h-[300px] sm:h-[450px] overflow-hidden'>
                  <img src={image} className='w-[300px] sm:w-[450px] mx-auto spin' alt="" />
              </div>
              {/* image list section */}
              <div className='flex lg:flex-col lg:top-1/2 lg:-translate-y-1/2 lg:py-2 justify-center gap-4 absolute bottom-[0px] lg:-right-10 bg-white/30 rounded-full'>
                  {
                    ImageList.map((item)=> (
                      <img key={item.id} 
                          src={item.image}
                          alt=''
                          onClick={()=> {setImage(item.image)}}
                          // onClick={()=> {setImgId(item.id === 1 ? food1: item.id=== 2 ? food2 : food3 )}}
                          className='max-w-[80px] h-[80px] object-contain inline-block hover:scale-105 duration-200' />
                    ))
                  }
              </div>
            </div>
          </div>
      </div>
    </div>
  )
}

export default Hero