import React from "react";
import img from "../../assets/audit.png";
import { RiArrowRightSLine, RiArrowRightLine } from "react-icons/ri";

const Audit = () => {
  return (
    <div className="flex flex-col lg:flex-row lg:h-screen my-14 lg:my-0">
      <div className="lg:w-1/2 w-full flex flex-col justify-center">
        <p className="flex justify-center font-bold text-3xl underline mb-7 lg:mb-12">
          Audit & Assurance
        </p>
        <div className="lg:ml-8">
          <div className="mb-5">
            <div className="flex items-center font-semibold text-xl">
              <p className="mr-2 ml-1">Statutory Audit </p>
              <RiArrowRightLine />
            </div>
            <div className="font-medium ml-4">
              <div className="flex items-center py-0.5">
                <RiArrowRightSLine />
                <p className="ml-1">PF Audit</p>
              </div>
              <div className="flex items-center py-0.5">
                <RiArrowRightSLine />
                <p className="ml-1">GF Audit</p>
              </div>
              <div className="flex items-center py-0.5">
                <RiArrowRightSLine />
                <p className="ml-1">WPPF Audit</p>
              </div>
              <div className="flex items-center py-0.5">
                <RiArrowRightSLine />
                <p className="ml-1">Project Audit</p>
              </div>
              <div className="flex items-center py-0.5">
                <RiArrowRightSLine />
                <p className="ml-1">Compliance Audit</p>
              </div>
              <div className="flex items-center py-0.5">
                <RiArrowRightSLine />
                <p className="ml-1">Consolidated Audit</p>
              </div>
              <div className="flex items-center py-0.5">
                <RiArrowRightSLine />
                <p className="ml-1">External Statutory Audit</p>
              </div>
            </div>
          </div>
          <div>
            <div className="flex items-center font-semibold text-xl">
              <p className="mr-2 ml-1">Internal Audit</p>
              <RiArrowRightLine />
            </div>
            <div className="font-medium ml-4">
              <div className="flex items-center py-0.5">
                <p className="text-md">
                  <RiArrowRightSLine />
                </p>
                <p className="ml-1">
                  Implementation of internal control systems
                </p>
              </div>
              <div className="flex items-center py-0.5">
                <p className="text-md">
                  <RiArrowRightSLine />
                </p>
                <p className="ml-1">
                  Redesign the control map to align the business strategy
                </p>
              </div>
              <div className="flex items-center py-0.5">
                <p className="text-md">
                  <RiArrowRightSLine />
                </p>
                <p className="ml-1">
                  Recommend the possible safeguards that reduce any threats to
                  an acceptable level
                </p>
              </div>
              <div className="flex items-center py-0.5">
                <p className="text-md">
                  <RiArrowRightSLine />
                </p>
                <p className="ml-1">
                  Work with internal audit function to assess the possible risk
                  and deficiency of existing control system
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

export default Audit;
