import Image from "next/image";
import React, { useState } from "react";

const Hero = () => {
  return (
    <section className="w-full mx-auto">
      <div className="relative  bg-gray-900 sm:py-16 lg:py-20 xl:pt-32 xl:pb-44">
        <div className="absolute inset-0 hidden lg:block">
          <Image
            className="object-cover object-right-bottom w-full h-full"
            src="https://cdn.rareblocks.xyz/collection/clarity-ecommerce/images/hero/1/background.png"
            alt="background_image"
            height={2100}
            width={2100}
          />
        </div>

        <div className="relative px-4 mx-auto sm:px-6 lg:px-8 max-w-7xl">
          <div className="max-w-xl mx-auto text-center lg:max-w-md xl:max-w-lg lg:text-left lg:mx-0">
            <h1 className="text-3xl font-bold text-white sm:text-4xl xl:text-5xl xl:leading-tight">
              Build SaaS Landing Page without Writing a Single Code
            </h1>
            <p className="mt-8 text-base font-normal leading-7 text-gray-400 lg:max-w-md xl:pr-0 lg:pr-16">
              Lorem ipsum dolor sit amet, consectetur adipiscing elit. In nunc
              nisl eu consectetur. Mi massa elementum odio eu viverra amet.
            </p>

            <div className="flex items-center justify-center mt-8 space-x-5 xl:mt-16 lg:justify-start">
              <button className="text-xl w-32 h-14 bg-primary text-white relative overflow-hidden group z-10 hover:text-white duration-1000">
                <span className="absolute bg-accent size-36 rounded-full group-hover:scale-100 scale-0 -z-10 -left-2 -top-10 group-hover:duration-500 duration-700 origin-center transform transition-all"></span>
                <span className="absolute bg-secondary size-36 -left-2 -top-10 rounded-full group-hover:scale-100 scale-0 -z-10 group-hover:duration-700 duration-500 origin-center transform transition-all"></span>
                Button
              </button>

              <a
                href="#"
                title=""
                className="
                            inline-flex
                            items-center
                            justify-center
                            px-2
                            py-3
                            text-base
                            font-bold
                            leading-7
                            text-white
                            transition-all
                            duration-200
                            bg-transparent
                            border border-transparent
                            rounded-md
                            sm:px-4
                            focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-offset-gray-900 focus:ring-gray-700
                            hover:bg-gray-700
                        "
                role="button"
              >
                Check live preview
              </a>
            </div>
          </div>
        </div>

        <div className="mt-8 lg:hidden">
          <img
            className="object-cover w-full h-full"
            src="https://cdn.rareblocks.xyz/collection/clarity-ecommerce/images/hero/1/bg.png"
            alt=""
          />
        </div>
      </div>
    </section>
  );
};
export default Hero;
