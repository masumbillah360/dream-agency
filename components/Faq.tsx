"use client";

// import core package
import React, { useState } from "react";

//  import icons

// import { IoIosArrowForward } from "react-icons/io";
// changed from masum branch
const Faq = () => {
  const [faq, setFaq] = useState([
    {
      question: "How do I get started with your services?",
      answer:
        "Getting started is easy! Simply reach out to us through our contact page or fill out the inquiry form. We'll get back to you promptly to discuss your project requirements and how we can help.",
      open: false,
    },
    {
      question: "What types of websites do you develop?",
      answer:
        "We specialize in a wide range of websites, including but not limited to:",
      point: [
        { line: "Business websites" },
        { line: "E-commerce websites" },
        { line: "Portfolio websites" },
        { line: "Blogs" },
        { line: "Custom web applications" },
        // { line: "Firmware Updates and Support" },
        // { line: "On-Demand Technical Support" },
      ],
      open: false,
    },
    {
      question: "What is your pricing model?",
      answer:
        "Our pricing depends on the scope and complexity of the project. We offer competitive rates tailored to fit your budget. Get in touch with us to discuss your project specifics, and we'll provide you with a detailed quote.",
      open: false,
    },
    {
      question: "How long does it take to build a website?",
      answer:
        "The timeline for website development varies based on the project's size, complexity, and your specific requirements. Simple websites can be completed in a matter of weeks, while more complex projects may take several months. We'll provide you with a detailed project timeline during the initial consultation.",
      // point: [
      //   { line: "Annual Maintenance Contracts (AMC) for IT systems" },
      //   {
      //     line: "Proven Track Record: With a successful history of serving diverse clients, we have a track record of delivering reliable and efficient IT solutions.",
      //   },
      //   {
      //     line: "Global Presence: Headquartered in Chennai, Credence Tec has an international presence in China, Malaysia, and Gulf Countries, enabling us to serve clients globally.",
      //   },
      //   {
      //     line: "Client-Centric Approach: Our client-centric approach ensures that we tailor our services to meet the unique needs and challenges of each client.",
      //   },
      //   {
      //     line: "Cost-Effective Solutions: We offer competitive and affordable commercial packages, ensuring that our clients receive value for their investment.",
      //   },
      //   {
      //     line: "Sales of new equipment: comprehensive range of high-quality IT equipment tailored to your needs. Whether you're upgrading your infrastructure or starting anew, Credence Tec offers top-notch products, ensuring reliability and cutting-edge technology.",
      //   },
      //   {
      //     line: "Rental Services:  Optimize your resource utilization with our IT equipment rental services. From servers and storage to laptops and network switches, access state-of-the-art technology on a flexible rental basis, meeting your requirements.",
      //   },
      // ],
      open: false,
    },
    {
      question: "Do you provide website maintenance services?",
      answer:
        "Yes, we offer website maintenance services to ensure your website stays up-to-date, secure, and optimized. Whether you need occasional updates or ongoing maintenance, we have a plan to suit your needs.",
      open: false,
    },
    {
      question: "Will my website be mobile-friendly?",
      answer:
        "Absolutely! All websites we develop are fully responsive, meaning they adapt seamlessly to different screen sizes and devices, including smartphones, tablets, and desktops.",
      open: false,
    },
    {
      question: "Can you help with search engine optimization (SEO)?",
      answer:
        "Yes, we offer SEO services to help improve your website's visibility in search engine results. From keyword research to on-page optimization, we can help you attract more organic traffic to your website.",
      open: false,
    },
    {
      question:
        "Do you provide hosting services?",
      answer:
        "While we don't provide hosting directly, we can recommend trusted hosting providers and assist you with the setup and migration process if needed.",
      open: false,
    },
    {
      question:
        " What sets your agency apart from others?",
      answer:
        "Our agency is dedicated to delivering high-quality, custom solutions tailored to each client's unique needs. We prioritize communication, transparency, and customer satisfaction throughout the entire development process.",
      open: false,
    },
    {
      question:
        "How can I contact you for support?",
      answer:
        "You can reach out to us via email, phone, or through our website's contact form. We're here to help with any questions or issues you may have, even after your website is live.",
      open: false,
    },
  ]);

  const toggleFaq = (index: number) => {
    setFaq(
      faq.map((item, i) => {
        if (i === index) {
          item.open = !item.open;
        } else {
          item.open = false;
        }

        return item;
      })
    );
  };

  return (
    <section id="faq" className="py-10 bg-[#F5FAFE] sm:py-16 lg:py-24 mx-auto w-full">
      <div className="w-[95%] xl:max-w-7xl mx-auto">
        <div className="max-w-2xl text-center mx-auto ">
          <h2 className="text-3xl font-bold leading-tight text-black sm:text-4xl font-Georgia tracking-wide">
            <span>Frequently</span> <span className="text-primary">Asked Questions</span>
          </h2>
          <p className="max-w-xl mx-auto mt-4 text-base leading-relaxed text-gray-600 font-oracle">
            Everything you need to know about the product and billing.
          </p>
        </div>

        <div className="max-w-3xl mx-auto mt-8 space-y-4 md:mt-16">
          {faq.map((item, index) => (
            <div
              data-aos="fade-down"
              data-aos-easing="linear"
              data-aos-duration="600"
              key={index}
              className="transition-all duration-200 bg-white border border-gray-200 cursor-pointer hover:bg-gray-50 shadow-lg"
            >
              <button
                type="button"
                className="flex items-center justify-between w-full px-4 py-5 sm:p-6"
                onClick={() => toggleFaq(index)}
              >
                <span className="flex text-lg font-semibold text-black font-oracle !text-start">
                  {" "}
                  {item.question}{" "}
                </span>

                {/* <IoIosArrowForward
                  className={`${
                    item.open ? "rotate-90 " : "rotate-0"
                  } text-primary-900 text-xl duration-300 transition-all`}
                /> */}
              </button>

              <div
                className={`${
                  item.open ? "block" : "hidden"
                } px-4 pb-5 sm:px-6 sm:pb-6 !text-start font-oracle duration-500 transition-all`}
              >
                <p dangerouslySetInnerHTML={{ __html: item.answer }}></p>
                {item?.point &&
                  item?.point.map((p, idx) => (
                    <ul key={idx} className="list-disc pl-5 font-oracle">
                      <li>{p.line}</li>
                    </ul>
                  ))}
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Faq;
