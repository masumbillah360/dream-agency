

import React from 'react';

const Blog = () => {
  return (
    <section className="py-12 bg-gray-50 sm:py-16 lg:py-20 xl:py-24">
      <div className="px-4 mx-auto sm:px-6 lg:px-8 max-w-7xl">
        <div className="max-w-xl mx-auto text-center">
          <p className="text-base font-semibold text-blue-600">
            Learn new technology
          </p>
          <h2 className="mt-4 text-3xl font-semibold tracking-tight text-gray-900 sm:text-4xl lg:text-5xl lg:mt-6">
            Read our blog
          </h2>
        </div>

        <div className="grid max-w-md grid-cols-1 gap-8 mx-auto mt-12 xl:gap-16 md:max-w-5xl md:grid-cols-3 sm:mt-16">
          <div className="group">
            <a href="#" title="" className="block overflow-hidden aspect-w-16 aspect-h-9 rounded-xl ">
              <img
                className="object-cover w-full h-full transition-all duration-200 transform group-hover:scale-110 group-hover:-rotate-3"
                src="https://landingfoliocom.imgix.net/store/collection/saasui/images/blog/1/blog-thumbnail-1.png" alt=""/>
            </a>
            <h3 className="mt-6 text-lg font-semibold text-gray-900 xl:text-xl group-hover:text-gray-600">
              <a href="#" title="" className="">
                Most popular design systems to learn from in 2022
              </a>
            </h3>
            <p className="mt-3 text-sm font-medium text-blue-600">
              <a href="#" title="" className="">
                Design Systems
              </a>
            </p>
          </div>

          <div className="group">
            <a href="#" title="" className="block overflow-hidden aspect-w-16 aspect-h-9 rounded-xl ">
              <img
                className="object-cover w-full h-full transition-all duration-200 transform group-hover:scale-110 group-hover:-rotate-3"
                src="https://landingfoliocom.imgix.net/store/collection/saasui/images/blog/1/blog-thumbnail-2.png" alt=""/>
            </a>
            <h3 className="mt-6 text-lg font-semibold text-gray-900 xl:text-xl group-hover:text-gray-600">
              <a href="#" title="" className="">
                Understanding accessibility makes you a better
              </a>
            </h3>
            <p className="mt-3 text-sm font-medium text-blue-600">
              <a href="#" title="" className="">
                Accessibility
              </a>
            </p>
          </div>

          <div className="group">
            <a href="#" title="" className="block overflow-hidden aspect-w-16 aspect-h-9 rounded-xl ">
              <img
                className="object-cover w-full h-full transition-all duration-200 transform group-hover:scale-110 group-hover:-rotate-3"
                src="https://landingfoliocom.imgix.net/store/collection/saasui/images/blog/1/blog-thumbnail-3.png" alt=""/>
            </a>
            <h3 className="mt-6 text-lg font-semibold text-gray-900 xl:text-xl group-hover:text-gray-600">
              <a href="#" title="" className="">
                15 best tools that will help you build your website
              </a>
            </h3>
            <p className="mt-3 text-sm font-medium text-blue-600">
              <a href="#" title="" className="">
                Tech
              </a>
            </p>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Blog;