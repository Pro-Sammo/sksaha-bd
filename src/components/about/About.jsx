import React from "react";
import "./about.css";
import img from "../../assets/about.jpg";
import img1 from "../../assets/team-1.jpeg";
import img2 from "../../assets/team-2.jpeg";
import img3 from "../../assets/team-3.jpeg";
import { BiLogoFacebookSquare } from "react-icons/bi";
import { PiInstagramLogoFill } from "react-icons/pi";
import { FaTwitterSquare } from "react-icons/fa";

const About = () => {
  return (
    <>
      <div className="flex flex-col lg:flex-row my-14 lg:my-28">
        <div className="lg:w-1/2 w-full flex flex-col justify-center">
          <div className="lg:ml-28 px-3 md:px-8 lg:px-0">
            <div className="font-light mt-9 lg:mt-0 mb-2 lg:mb-4">
              Welcome There!
            </div>
            <div className="font-bold color_1 mb-6 text-3xl lg:text-4xl">
              Welcome to the Best <br /> Business Support <br /> Company{" "}
              <span className="text-rose-300">.</span>
            </div>
            <div className=" color_2 bg_color lg:max-w-2xl text-justify p-5 lg:p-7 border-l-2 border-rose-300">
              Saha Sazib Kumar & Co. Chartered Accountants is a trusted and
              well-reputed professional firm in Bangladesh. SSKC established in
              16 February 2023. We are providing customized and high quality
              services to help our clients to achieve their ambitious goal. We
              provide Audit & Assurance, Tax & Regulatory, Business Advisory,
              Management Consulting & Accounting Services to various companies,
              branch and liaison offices, non-profit organizations, and others
              in the public and private sectors.
            </div>
          </div>
        </div>
        <div className="lg:w-1/2 w-full order-first">
          <div className=" w-full flex justify-around items-center">
            <img className="w-4/5 lg:w-3/4 h-min" src={img} alt="" srcset="" />
          </div>
        </div>
      </div>
      <div className="flex flex-col items-center mb-32">
        <h1 className="text-5xl underline mb-16 font-semibold">Our Team</h1>
        <div className="flex flex-col lg:flex-row">
          <div className="flex flex-col items-center">
            <div className="">
              <img className="w-40 h-40 rounded-full object-cover" src={img2} alt="" />
            </div>
            <div className="text-2xl my-3">Sazib Kumar Saha FCA</div>
            <div className="-mt-2 mb-3">Managing Partner</div>
            <div className="flex">
              <BiLogoFacebookSquare size={30} className="mx-1" />
              <PiInstagramLogoFill size={30} className="mx-1" />
              <FaTwitterSquare size={30} className="mx-1" />
            </div>
          </div>
          <div className="flex flex-col items-center lg:mx-24 my-14 lg:my-0">
            <div className="">
              <img className="w-40 h-40 rounded-full object-cover" src={img3} alt="" />
            </div>
            <div className="text-2xl my-3">Shariful Islam ACA</div>
            <div className="-mt-2 mb-3">Partner</div>
            <div className="flex">
              <BiLogoFacebookSquare size={30} className="mx-1" />
              <PiInstagramLogoFill size={30} className="mx-1" />
              <FaTwitterSquare size={30} className="mx-1" />
            </div>
          </div>
          <div className="flex flex-col items-center">
            <div className="">
              <img className="w-40 h-40 rounded-full object-cover" src={img1} alt="" />
            </div>
            <div className="text-2xl my-3">Imran Al Mahmud</div>
            <div className="-mt-2 mb-3">Lead Consultant</div>
            <div className="flex">
              <BiLogoFacebookSquare size={30} className="mx-1" />
              <PiInstagramLogoFill size={30} className="mx-1" />
              <FaTwitterSquare size={30} className="mx-1" />
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default About;
