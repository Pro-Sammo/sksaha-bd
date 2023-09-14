import React from "react";
import img from "../../assets/hr.png";
import { RiArrowRightSLine, RiArrowRightLine } from "react-icons/ri";

const Hr = () => {
  return (
    <div className="flex flex-col lg:flex-row lg:h-screen my-14 lg:my-0">
      <div className="lg:w-1/2 w-full flex flex-col justify-center">
        <p className="flex justify-center font-bold text-3xl underline mb-7 lg:mb-12">
          HR Services
        </p>
        <div className="lg:ml-8">
          <div className="mb-5">
            <div className="flex items-center font-semibold text-xl">
              <p className="mr-2 ml-1">HR Services </p>
              <RiArrowRightLine />
            </div>
            <div className="font-medium ml-4">
              <div className="flex items-center py-0.5">
                <RiArrowRightSLine />
                <p className="ml-1">PO services</p>
              </div>
              <div className="flex items-center py-0.5">
                <RiArrowRightSLine />
                <p className="ml-1">Recruitment</p>
              </div>
              <div className="flex items-center py-0.5">
                <RiArrowRightSLine />
                <p className="ml-1">Soft Skills Training</p>
              </div>
              <div className="flex items-center py-0.5">
                <RiArrowRightSLine />
                <p className="ml-1">Skillset Development</p>
              </div>
              <div className="flex items-center py-0.5">
                <RiArrowRightSLine />
                <p className="ml-1">Training Management</p>
              </div>
              <div className="flex items-center py-0.5">
                <RiArrowRightSLine />
                <p className="ml-1">Motivation Management</p>
              </div>
              <div className="flex items-center py-0.5">
                <RiArrowRightSLine />
                <p className="ml-1">Head hunting & Talent acquisition</p>
              </div>
              <div className="flex items-center py-0.5">
                <RiArrowRightSLine />
                <p className="ml-1">
                  KPI Implementation and Performance Appraisal
                </p>
              </div>
              <div className="flex items-center py-0.5">
                <RiArrowRightSLine />
                <p className="ml-1">
                  Functional Accountability Matrix Implementation
                </p>
              </div>
              <div className="flex items-center py-0.5">
                <RiArrowRightSLine />
                <p className="ml-1">
                  HR Standard Policy and Procedures Development & Implementation
                </p>
              </div>
            </div>
          </div>
        </div>
      </div>
      <div className="lg:w-1/2 w-full order-first lg:order-last mb-5 lg:mb-0">
        <div className=" w-full lg:h-screen flex justify-around items-center">
          <img className="w-2/4 lg:w-3/4 h-min" src={img} alt="" srcset="" />
        </div>
      </div>
    </div>
  );
};

export default Hr;
