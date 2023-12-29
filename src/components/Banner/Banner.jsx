import React from 'react'
import Vector from "../../assets/vector3.png";
import img1 from "../../assets/biryani2.png"
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faBowlFood, faLock, faTruckFast} from "@fortawesome/free-solid-svg-icons"
const Banner = () => {
  return (
    <div>
        <div className='min-h-[550px]'>
            <div>
                <div data-aos="slide-up" data-aos-duration="300" className='container'>
                    <div className="grid grid-cols-1 sm:grid-cols-2 gap-6">
                        {/* image section */}
                        <div>
                            <img src={img1} data-aos="zoom-in" data-aos-duration="300"
                            className='max-w-[430px] w-full mx-auto drop-shadow-[-10px_10px_12px_rgba(0,0,0,0.1)]'
                             alt="" />
                        </div>
                        {/* text section */}
                        <div className="flex flex-col justify-center gap-6 sm:pt-0 text-black dark:text-white">
                            <h1 className="text-3xl sm:text-4xl font-bold">
                                Lorem, ipsum dolor.
                            </h1>
                            <p className="text-sm text-gray-500 tracking-wide leading-5">
                                Lorem, ipsum dolor sit amet consectetur adipisicing elit. Tempora vel provident facilis numquam quasi laborum?
                                <br />
                                <br />
                                Lorem ipsum dolor sit amet, consectetur adipisicing elit. Minima repellendus odio magnam velit tempore illum saepe vel quasi nobis nostrum.
                            </p>
                            <div className="flex gap-6">
                                <div>
                                    <FontAwesomeIcon icon={faLock} className="text-2xl h-20 w-20 shadow-sm p-5 rounded-full bg-violet-100 dark:bg-violet-400"/>
                                </div>
                                <div>
                                    <FontAwesomeIcon icon={faBowlFood} className="text-2xl h-20 w-20 shadow-sm p-5 rounded-full bg-orange-100 dark:bg-orange-400"/>
                                </div>
                                <div>
                                    <FontAwesomeIcon icon={faTruckFast} className="text-2xl h-20 w-20 shadow-sm p-5 rounded-full bg-green-100 dark:bg-green-400"/>
                                </div>
                            </div>
                            <div>
                                <button className="bg-gradient-to-r from-primary to-secondary text-white py-2 px-4 rounded-full shadow-xl hover:shadow-md">
                                    Order Now
                                </button>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    </div>
  )
}

export default Banner
