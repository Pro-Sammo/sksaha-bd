import React from "react";
import {BiLogoFacebookSquare} from 'react-icons/bi'
import {PiInstagramLogoFill} from 'react-icons/pi'
import {FaTwitterSquare} from 'react-icons/fa'
import { Link } from "react-router-dom";

const Footer = () => {
  return (
    <>
      <div className="min-h-fit w-full 0 flex flex-col gap-5 px-5 pb-5 lg:flex-row lg:justify-center lg:items-start lg:gap-48  lg:py-8 lg:pb-11 relative">
      <div
          id="circle"
          className="-z-20 absolute bottom-5 right-8 h-80 w-80 rounded-full lg:block hidden"
        ></div>
        <div>
          <div>
            <h1 className="font-bold text-lg pb-2 lg:pb-4 lg:text-xl">Our Contact</h1>
          </div>
          <div className="text-slate-500 lg:text-lg">
            <div>
              <p>Office: Pritom Zaman Tower, L-13 37/2, <br /> Purana Paltan, Culvert Poad <br /> Dhaka, Bangladesh.</p>
            </div>
            <div>
              <p>Help; +8801711313988</p>
            </div>
            <div>
              <p>Email: sazib@sksaha-bd.com</p>
            </div>
          </div>
        </div>
        <div>
          <div>
            <h1 className="font-bold text-lg pb-2 lg:pb-4 lg:text-xl">About Us</h1>
          </div>
          <div>
            <div className="text-slate-500">
              <p className="w-72 lg:text-lg text-justify">
              Saha Sazib Kumar & Co. Chartered Accountants is a trusted and
              well-reputed professional firm in Bangladesh. SSKC established
              in<span className="text-rose-300" ><Link to={"/about"}>...</Link></span>
              </p>
            </div>
          </div>
          
        </div>
        <div>
            <div className="font-bold text-lg pb-2 lg:pb-4  lg:text-xl">Follow Us</div>
            <div className="flex gap-3 text-slate-600  cursor-pointer ">
                <BiLogoFacebookSquare size={30}/>
                <PiInstagramLogoFill size={30}/>
                <FaTwitterSquare size={30}/>
            </div>
        </div>
      </div>
    </>
  );
};

export default Footer;
