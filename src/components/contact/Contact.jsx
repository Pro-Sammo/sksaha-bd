import React, { useState } from "react";
import GoogleFontLoader from "react-google-font-loader";
import "react-phone-number-input/style.css";
import PhoneInput from "react-phone-number-input";
import { motion } from "framer-motion";

const Contact = () => {
  const [name, setName] = useState("");
  const [mobile, setMobile] = useState();
  const [email, setEmail] = useState("");
  const [message, setMessage] = useState("");

  const submitHandler = (e) => {
    e.preventDefault();
    console.log(name, mobile, email, message);
  };

  return (
    <>
      <GoogleFontLoader
        fonts={[
          {
            font: "Roboto",
            weights: [400, "400i"],
          },
          {
            font:"Anton",
            weights:[400]
          }
        ]}
        subsets={["cyrillic-ext", "greek"]}
      />
      <div
        style={{ fontFamily: "Roboto" }}
        className=" relative h-screen w-full  flex flex-col p-11 lg:flex-row lg:justify-around lg:items-center "
      >
        <motion.div
        initial={{x:"-70px",opacity:0}}
        whileInView={{x:0,opacity:1}}
        transition={{duration:0.25}}
        className="pb-9">
          <h1 id="fontchange" style={{fontFamily:"Anton"}} className="text-center text-xl lg:text-7xl font-extrabold ">
            Feel Free To Contact With Us
          </h1>
        </motion.div>
        <motion.div 
        initial={{x:"70px",opacity:0}}
        whileInView={{x:0,opacity:1}}
        transition={{duration:0.25}}
        className="border-2 px-8 py-8 rounded-md shadow-lg">
          <form
            action=""
            onSubmit={(e) => submitHandler(e)}
            className="flex flex-col gap-4 lg:w-96 m-auto z-20"
          >
            <div className="flex flex-col">
              <label htmlFor="name">Name</label>
              <input
                value={name}
                onChange={(e) => setName(e.target.value)}
                id="name"
                type="text"
                placeholder="Enter your full name here..."
                className="border-[1px] border-gray-300 rounded-md outline-none pl-4 h-12 "
              />
            </div>
            <div className="flex flex-col">
              <label htmlFor="">Mobile</label>
              <PhoneInput
              placeholder="Enter Your valid Phone Number Here..."
                defaultCountry="BD"
                value={mobile}
                onChange={setMobile}
                className="border-[1px] border-gray-300 rounded-md outline-none pl-4 h-12"
              />
            </div>
            <div className="flex flex-col">
              <label htmlFor="email">Email</label>
              <input
                value={email}
                onChange={(e) => setEmail(e.target.value)}
                id="email"
                type="text"
                placeholder="Enter your email address here..."
                className="border-[1px] border-gray-300 rounded-md outline-none pl-4 h-12"
              />
            </div>
            <div className="flex flex-col">
              <label htmlFor="message">Message</label>
              <textarea
                value={message}
                onChange={(e) => setMessage(e.target.value)}
                name=""
                id="message"
                cols="28"
                rows="10"
                className="border-[1px] border-gray-300 rounded-md outline-none px-2 py-2"
                placeholder="Type a message for us..."
              ></textarea>
            </div>
            <input
              type="submit"
              className="border-2 py-2 bg-rose-500 text-white text-lg font-light uppercase font-serif rounded outline-none cursor-pointer"
            />
          </form>
        </motion.div>
        
      </div>
    </>
  );
};

export default Contact;
