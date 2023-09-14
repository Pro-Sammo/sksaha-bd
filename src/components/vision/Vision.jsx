import React from "react";
import "./vision.css";
import { LiaLowVisionSolid } from "react-icons/lia";
import { PiHandFistBold } from "react-icons/pi";
import { FaBalanceScaleRight } from "react-icons/fa";
import { RxValue } from "react-icons/rx";
import GoogleFontLoader from "react-google-font-loader";
import { motion } from "framer-motion";
import img from "../../assets/about-2.jpg";
import { Link } from "react-router-dom";

const Vision = () => {
  const animation1 = {
    initial: { opacity: 0, x: -100 },
    whileInView: { opacity: 1, x: 0 },
    transition: { duration: 0.5, delay: 0.1 },
  };

  const animation2 = {
    initial: { opacity: 0, x: 100 },
    whileInView: { opacity: 1, x: 0 },
    transition: { duration: 0.5, delay: 0.5 },
  };

  return (
    <>
      <GoogleFontLoader
        fonts={[
          {
            font: "Montserrat",
            weights: [400, "400i"],
          },
          {
            font: "Dancing Script",
            weights: [400],
          },
          {
            font: "Poppins",
            weights: [400],
          },
        ]}
        subsets={["cyrillic-ext", "greek"]}
      />

      <div className="">
        <div className="lg:gap-6 lg:px-24">
          <div
            style={{ fontFamily: "Montserrat" }}
            className="min-h-fit w-full flex flex-col lg:flex-row overflow-x-hidden"
          >
            <div className="lg:w-1/2 w-full px-5 py-4 ">
              <div className="flex gap-3 items-center">
                <motion.div
                  initial={animation1.initial}
                  whileInView={animation1.whileInView}
                  transition={animation1.transition}
                  className="text-white bg-yellow-500 p-7 rounded-md"
                >
                  <LiaLowVisionSolid size={27} />
                </motion.div>
                <motion.div
                  initial={animation2.initial}
                  whileInView={animation2.whileInView}
                  transition={animation2.transition}
                >
                  <h1 className="font-bold">Vision :</h1>
                  <p className="text-sm max-w-7xl text-justify">
                    To earn the reputation of being a fine, reliable and result
                    oriented professional service entity.
                  </p>
                </motion.div>
              </div>
            </div>
            <div className="lg:w-1/2 w-full px-5 py-4 ">
              <div className="flex gap-3 items-center">
                <motion.div
                  initial={animation1.initial}
                  whileInView={animation1.whileInView}
                  transition={animation1.transition}
                  className="text-white bg-orange-600 p-7 rounded-md"
                >
                  <PiHandFistBold size={25} />
                </motion.div>
                <motion.div
                  initial={animation2.initial}
                  whileInView={animation2.whileInView}
                  transition={animation2.transition}
                >
                  <h1 className="font-bold">Mission :</h1>
                  <p className="text-sm max-w-7xl text-justify lg:max-w-2xl">
                    Helping people feel confident & delivering on their success
                    aspirations by rendering excellent services with honesty,
                    ethics and unparalleled quality.
                  </p>
                </motion.div>
              </div>
            </div>
          </div>
          <div
            style={{ fontFamily: "Montserrat" }}
            className="min-h-fit w-full flex flex-col lg:flex-row overflow-x-hidden"
          >
            <div className="lg:w-1/2 w-full px-5 py-4 ">
              <div className="flex gap-3 items-center">
                <motion.div
                  initial={animation1.initial}
                  whileInView={animation1.whileInView}
                  transition={animation1.transition}
                  className="text-white bg-[#006380] p-7 rounded-md"
                >
                  <RxValue size={25} />
                </motion.div>
                <motion.div
                  initial={animation2.initial}
                  whileInView={animation2.whileInView}
                  transition={animation2.transition}
                >
                  <h1 className="font-bold">Values :</h1>
                  <p className="text-sm max-w-7xl text-justify lg:max-w-2xl">
                    The first and foremost priority is to meet the requirements
                    of our customers. Our firm came into existence for serving
                    and satisfying our valued customers and we ensure that we
                    make a positive difference in the success and future of our
                    clients.
                  </p>
                </motion.div>
              </div>
            </div>
            <div className="lg:w-1/2 w-full px-5 py-4 ">
              <div className="flex gap-3 items-center">
                <motion.div
                  initial={animation1.initial}
                  whileInView={animation1.whileInView}
                  transition={animation1.transition}
                  className="text-white bg-[#A8DF8E] p-7 rounded-md"
                >
                  <FaBalanceScaleRight size={25} />
                </motion.div>
                <motion.div
                  initial={animation2.initial}
                  whileInView={animation2.whileInView}
                  transition={animation2.transition}
                >
                  <h1 className="font-bold">Ethics :</h1>
                  <p className="text-sm max-w-7xl text-justify">
                    Ethical aspects are fundamental in our decision making
                    process.
                  </p>
                </motion.div>
              </div>
            </div>
          </div>
        </div>
        <div
          style={{ fontFamily: "Poppins" }}
          className="flex flex-col lg:flex-row lg:my-40 my-10 lg:justify-center"
        >
          <div
         
          className="pb-9">
          
            <div className="w-full flex justify-around items-center">
              <img
                className="w-4/5 lg:w-3/4 h-min"
                src={img}
                alt=""
                srcset=""
              />
            </div>
          </div>
          <div

          className="flex flex-col justify-center my-8 lg:my-0 px-3 md:px-8 lg:px-0">
            <h1 className="text-4xl lg:mb-2 mb-1">ABOUT US</h1>
            <h1 className="text-2xl font-light mb-2">
              Design & Develop For Better Solution
            </h1>
            <p className="max-w-lg p-4 text-justify color_2 bg_color border-l-2 border-rose-300 mb-6">
              Saha Sazib Kumar & Co. Chartered Accountants is a trusted and
              well-reputed professional firm in Bangladesh. SSKC established
              in...
            </p>
            <Link to={"/about"}>
              <div className="p-4 bg-rose-300 w-fit rounded-md">Learn More</div>
            </Link>
          </div>
        </div>
      </div>
    </>
  );
};

export default Vision;
