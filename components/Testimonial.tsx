"use client";
/* core import */
import React from "react";
import Image from "next/image";
// Import Swiper React components
import { Swiper, SwiperSlide } from "swiper/react";
import "swiper/css";
import "swiper/css/pagination";
import "swiper/css/navigation";
import { Autoplay, Pagination, Navigation } from "swiper/modules";

const Testimonials = () => {
  /* Testompnials Fake data */
  const allTestimonials = [
    {
      _id: 1,
      name: "Jane Smith",
      role: "CEO",
      company: "Tech Solutions Inc.",
      description:
        "Working with John was an absolute pleasure. His expertise in software engineering greatly contributed to the success of our projects.",
      companyImage: "tech_solutions_logo.png",
      image: "https://i.ibb.co/z6WFB6j/pexels-photo-697509.webp",
    },
    {
      _id: 2,
      name: "Michael Johnson",
      role: "Data Science Manager",
      company: "Data Insights Co.",
      description:
        "Alice's dedication to her work and her ability to solve complex problems with data science techniques have been invaluable to our team.",
      companyImage: "data_insights_logo.png",
      image: "https://i.ibb.co/tw0zSgW/istockphoto-1476170969-170667a.webp",
    },
    {
      _id: 3,
      name: "Emily Davis",
      role: "Creative Director",
      company: "Creative Designs Studio",
      description:
        "Bob's creative designs and attention to detail have exceeded our expectations. He consistently delivers high-quality work.",
      companyImage: "creative_designs_logo.png",
      image: "https://i.ibb.co/PY1b9Vd/photo2.png",
    },
    {
      _id: 4,
      name: "Tom Adams",
      role: "Marketing Manager",
      company: "Digital Marketing Agency",
      description:
        "Emily's innovative marketing strategies have significantly boosted our online presence and lead generation efforts.",
      companyImage: "digital_marketing_logo.png",
      image: "https://i.ibb.co/TRkYzVb/round-profil-picture-before.webp",
    },
  ];

  return (
    <section className=" py-12 bg-white sm:py-16 lg:py-20 xl:py-24 w-full mx-auto">
      <div className="px-4 mx-auto sm:px-6 lg:px-8 max-w-7xl space-y-12">
        <div className="max-w-3xl mx-auto text-center">
          <h2 className="text-3xl font-semibold tracking-tight text-gray-900 sm:text-4xl lg:text-5xl">
            Do not just take our words. Over the people trust us.
          </h2>
        </div>
        <Swiper
          spaceBetween={30}
          centeredSlides={true}
          loop={true}
          autoplay={{
            delay: 2000,

            disableOnInteraction: false,
          }}
          pagination={{
            clickable: true,
          }}
          // navigation={true}
          modules={[Autoplay, Pagination, Navigation]}
          className="mySwiper"
        >
          <div>
            {allTestimonials.map((testimonial) => (
              <div key={testimonial._id} className="">
                <SwiperSlide>
                  <div className="   lg:p-8 md:p-4 px-4 py-3 bg-gray-100 rounded-2xl">
                    <figure className="max-w-screen-md mx-auto">
                      <svg
                        className="lg:w-12 lg:h-12 md:w-10 md:h-10 sm:w-8 sm:h-8 mx-auto mb-3 text-gray-400"
                        viewBox="0 0 24 27"
                        fill="none"
                        xmlns="http://www.w3.org/2000/svg"
                        width="24"
                        height="27"
                      >
                        <path
                          d="M14.017 18L14.017 10.609C14.017 4.905 17.748 1.039 23 0L23.995 2.151C21.563 3.068 20 5.789 20 8H24V18H14.017ZM0 18V10.609C0 4.905 3.748 1.038 9 0L9.996 2.151C7.563 3.068 6 5.789 6 8H9.983L9.983 18L0 18Z"
                          fill="currentColor"
                        />
                      </svg>

                      <blockquote>
                        <p className="lg:text-2xl  sm:text-base font-medium  text-center text-gray-900">
                          {testimonial?.description}
                        </p>
                      </blockquote>
                      <figcaption className="flex items-center justify-center mt-6 space-x-3">
                        <Image
                          className="w-10 h-10 rounded-full object-cover "
                          src={testimonial?.image}
                          alt={testimonial?.name + "Profile picture"}
                          height={2100}
                          width={2100}
                        />
                        <div className="flex items-center divide-x-2 divide-gray-500 my-4">
                          <p className="lg:pr-3 font-medium md:text-base text-[12px] text-primary">
                            {testimonial?.name}
                          </p>
                          <p className="md:pl-3 pl-1 text-sm font-light md:text-base text-[12px] text-gray-500">
                            {testimonial?.role}
                          </p>
                        </div>
                      </figcaption>
                    </figure>
                  </div>
                </SwiperSlide>
              </div>
            ))}
          </div>{" "}
        </Swiper>
      </div>
    </section>
  );
};

export default Testimonials;
