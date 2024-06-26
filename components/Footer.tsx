"use client";

// ** import core package
import Link from "next/link";
import { usePathname } from "next/navigation";
import { useEffect } from "react";
import Image from "next/image";

// import ui component
// import { Typography } from "../ui/Typography";

// import Logo
// import Logo from "@/assets/svg/Logo";

// import icons
// import twitter from "@/assets/icons/social/twitter.svg";
// import facebook from "@/assets/icons/social/facebook.svg";
// import linkedine from "@/assets/icons/social/linkedin.svg";
// import instagram from "@/assets/icons/social/instagram.svg";

// import config
// import { config } from "@/config";

// import jotai
// import { useSetAtom } from "jotai";
// import { openModalAtom } from "@/app/jotaiStore";

const Footer = () => {
  const location = usePathname();
//   const setOpenModal = useSetAtom(openModalAtom);
  const currentYear = new Date().getFullYear();

  const handleNavigation = (section: string) => {
    // Redirect to home page with a hash anchor link
    window.location.href = `/#${section}`;
  };

  useEffect(() => {
    window.scrollTo(0, 0);
  }, [location]);

  return (
    <footer className="py-8 sm:pt-16 lg:pt-20">
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <div className="flex flex-col  justify-center space-y-10 lg:flex-row lg:items-start lg:justify-between lg:space-y-0">
          <div className="shrink-0 max-w-[300px]">
            <div>Logo</div>
            <div
            //   variant="Regular_H6"
              className={`block mt-4 text-dark_gray`}
            >
              Revolutionize healthcare with our cutting-edge Hospital, Doctor,
              Patient Management SAAS tool.
            </div>
            <div className="mt-4">
              <div
                // variant="Regular_H6"
                className={`block`}
                // link=""
              >
                <span className="text-dark_gray">Ph. No:</span> +91 95959 95959
              </div>
              <div
                // variant="Regular_H6"
                className={`block `}
                // link={config.EMAIL}
              >
                <span className="text-dark_gray">Email:</span> info@dopamine.com
              </div>
            </div>
            <div className="flex gap-4 mt-6">
              <Link target="_blank" href={"/"}>
                <Image src="" alt="social icon" />
              </Link>
              <Link target="_blank" href={"/"}>
                <Image src="" alt="social icon" />
              </Link>
              <Link target="_blank" href={"/"}>
                <Image src="" alt="social icon" />
              </Link>
              <Link target="_blank" href={"/"}>
                <Image src="" alt="social icon" />
              </Link>
            </div>
          </div>

          <div className="flex justify-between md:justify-start gap-10 md:gap-32">
            {/* Links */}
            <nav>
              <div
                // variant="Medium_H5"
                className=" mb-8 block text-primary"
              >
                Links
              </div>
              <ul className="space-y-4 text-black_">
                <li>
                  <button
                    onClick={() => handleNavigation("home")}
                    className="block text-base font-medium  transition-all duration-200 hover:translate-x-1 "
                  >
                    Home
                  </button>
                </li>
                <li>
                  <button
                    onClick={() => handleNavigation("aboutUs")}
                    className="block text-base font-medium  transition-all duration-200 hover:translate-x-1 "
                  >
                    About us
                  </button>
                </li>

                <li>
                  <button
                    onClick={() => handleNavigation("solution")}
                    className="block text-base font-medium  transition-all duration-200 hover:translate-x-1 "
                  >
                    Solution
                  </button>
                </li>
                <li>
                  <button
                    onClick={() => handleNavigation("doctors")}
                    className="block text-base font-medium  transition-all duration-200 hover:translate-x-1 "
                  >
                    Doctors
                  </button>
                </li>
                <li>
                  <button
                    onClick={() => handleNavigation("blog")}
                    className="block text-base font-medium  transition-all duration-200 hover:translate-x-1 "
                  >
                    Blogs
                  </button>
                </li>
              </ul>
            </nav>

            {/* Other Links */}
            <nav>
              <div
                // variant="Medium_H5"
                className=" mb-8 block text-primary"
              >
                Others
              </div>
              <ul className="space-y-4 text-black_">
                <li>
                  <button
                    onClick={() => {
                    //   setOpenModal(true);
                    }}
                    className="block text-base font-medium  transition-all duration-200 hover:translate-x-1 "
                  >
                    Contact us
                  </button>
                </li>
                <li>
                  <Link
                    href="/help-support"
                    target="_blank"
                    className="block text-base font-medium  transition-all duration-200 hover:translate-x-1 "
                  >
                    Help & Support
                  </Link>
                </li>

                <li>
                  <Link
                    href="/terms-conditions"
                    target="_blank"
                    className="block text-base font-medium  transition-all duration-200 hover:translate-x-1 "
                  >
                    Terms & Conditions
                  </Link>
                </li>
                <li>
                  <Link
                    href="/privacy-policy"
                    target="_blank"
                    className="block text-base font-medium  transition-all duration-200 hover:translate-x-1 "
                  >
                    Privacy Policy
                  </Link>
                </li>
              </ul>
            </nav>
          </div>

          {/* Newsletter */}
          <div className="shrink-0 ">
            <div className="">
              <div className="max-w-[300px]">
                <div
                //   variant="Medium_H5"
                  className={`block text-primary`}
                >
                  Newsletter
                </div>
                <div
                //   variant="Regular_H6"
                  className={`block text-dark_gray mt-2`}
                >
                  Stay ahead with our newsletter. Get updates, insights, and
                  special offers directly to your inbox.
                </div>
              </div>

              <div className="mt-6">
                <div>
                  <input
                    type="text"
                    className="w-full rounded-lg border py-3 px-4 "
                    placeholder="Enter your email address "
                  />
                </div>
                <button className="bg-primary w-full py-3 rounded-lg text-white mt-4 text-[16px] md:text-[20px]">
                  Subscribe Now
                </button>
              </div>
            </div>
          </div>
        </div>

        <div className="mt-12 border-t  pt-8 sm:mt-16 lg:mt-20">
          <div className="text-center">
            <div 
            // variant="Regular_H7"
             className=" block">
              © {currentYear} Dopamine. All rights reserved.
            </div>
          </div>
        </div>
      </div>
    </footer>
  );
};
export default Footer;
