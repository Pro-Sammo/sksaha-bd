import React from "react";
import img from "../../assets/managment.png";
import { RiArrowRightSLine, RiArrowRightLine } from "react-icons/ri";

const Managment = () => {
  return (
    <div className="flex flex-col lg:flex-row lg:h-screen my-14 lg:my-0">
      <div className="lg:w-1/2 w-full flex flex-col justify-center">
        <p className="flex justify-center font-bold text-3xl underline mb-7 lg:mb-12">
          Managment Consulting
        </p>
        <div className="lg:ml-8">
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

export default Managment;
