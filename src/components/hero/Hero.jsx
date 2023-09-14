import React, { useState } from "react";
import GoogleFontLoader from "react-google-font-loader";
import { motion } from "framer-motion";
import Spline from "@splinetool/react-spline";
import Vision from "../vision/Vision";

const Hero = () => {

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
            font:"Roboto Mono",
            weights:[400],
          }
        ]}
        subsets={["cyrillic-ext", "greek"]}
      />
      <div className="lg:min-h-screen min-h-fit w-full flex flex-col lg:flex-row relative -z-10">
       
        <div className="lg:w-[50%] w-full lg:h-screen pb-14 lg:pt-14">
          <div className="px-5 mt-20 flex flex-col justify-center lg:pt-32 lg:">
            <motion.h1
              style={{ fontFamily: "Roboto Mono" }}
              className="font-semibold text-2xl text-center mb-6 lg:text-6xl"
            >
             Welcome to Saha Sazib Kumar & Co.
            </motion.h1>
            <motion.p
              style={{ fontFamily: "Montserrat" }}
              className="text-slate-800 lg:text-slate-500 font-sans text-justify font-semibold "
            >
              Saha Sazib Kumar & Co. Chartered Accountants is a newly
              established Chartered Accountancy firm in Bangladesh by Skilled
              professionals with an intention to help the businesses to continue
              their operation smoothly and successfully in the competitive
              business world. SSKC is providing Audit & Assurance, Tax &
              Regulatory, Business Advisory, Management Consulting & Accounting
              Services to business organizations for building value, mitigating
              risk & accelerating performance.
            </motion.p>
          </div>
        </div>
        <div className="lg:w-[50%] w-full h-screen hidden lg:block relative -z-10">
            <Spline  scene="https://prod.spline.design/qgsJ6Fbfx9azVxRR/scene.splinecode" />
        </div>
      </div>
      <Vision />
    </>
  );
};

export default Hero;
