import React from 'react'
import Image from 'next/image'
import heroImage from '../images/slide-home-1.jpg'
import heroImage2 from '../images/banner-home.jpg'
import Carousel from './features/carouselComponent'

function HomePage() {
  return (
    <section id="home">
        <Carousel />
        {/* Annisa dan Rivaldi Text */}
        <div className="flex justify-center text-center md:mx-20 md:pt-20 pt-10">
            <div className="flex-shrink-0 text-center">
                <h1 className="font-Birthstone text-6xl md:text-8xl md:pb-2">
                    Annisa
                </h1>
                <h1 className="font-Birthstone text-6xl md:text-8xl md:pb-2">
                    &
                </h1>
                <h1 className="font-Birthstone text-6xl md:text-8xl md:pb-2">
                    Rivaldi
                </h1>
            </div>
        </div>

        {/* Wedding Date Text */}
        <div className="text-right pt-2 pr-5 md:mx-20 md:pt-10">
            <div className="flex-shrink-0 text-right">
                <h1 className="font-Inter font-semibold text-sm md:text-3xl pb-2">
                    11.06.2022
                </h1>
            </div>
        </div>

        {/* Banner Image Home */}
        <div className="flex justify-center text-center pt-2 md:mx-20 md:pt-4">
            <div className="w-full h-96 md:w-full md:h-screen lg:w-full lg:h-screen shadow-md rounded-md relative px-10 flex-shrink-0">
                <Image
                    src={heroImage2}
                    alt="heroImage2"
                    layout="fill"
                    objectFit="cover"
                    className="rounded-xl cursor-pointer"
                ></Image>
            </div>
        </div>
    </section>
  )
}

export default HomePage