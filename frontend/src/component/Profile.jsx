import React from "react";
import {
  BsFacebook,
  BsLinkedin,
  BsGithub,
  BsInstagram,
  BsFillTelephoneFill,
} from "react-icons/bs";
import { IoIosMail } from "react-icons/io";
import { FaLocationArrow } from "react-icons/fa";
// import {Photo} from "../assets/Photo.jpg"

function Profile() {
  return (
    <div className="flex flex-col  justify-center items-center h-3/5 w-3/12">
      <div className="  flex flex-col justify-center items-center h-screen w-3/4 bg-white rounded-3xl">
        <div className=" -translate-y-1/2 text-center h-44 w-44 bg-slate-400 rounded-3xl">
          <img src="frontend\src\assets\Photo.png" alt="Profile Photo" />
        </div>
        <div className=" -translate-y-1/4 flex flex-col items-center h-80 w-64 gap-y-2">
          <h1 className="text-xl font-semibold">Bhatukumar Bairagi</h1>
          <h5 className="text-sm">Software Developer</h5>
          <div className="h-fit w-full p-2">
            <ul className="flex gap-3 justify-center items-center text-center">
              <li className=" h-10 w-10 rounded-full bg-white">
                <BsFacebook className="h-10 w-10 " />
              </li>
              <li className="h-10 w-10  bg-white rounded-xl">
                <BsLinkedin className="h-10 w-10 " />
              </li>
              <li className="h-10 w-10  bg-white rounded-full">
                <BsGithub className="h-10 w-10 " />
              </li>
              <li className="h-10 w-10  bg-white rounded-xl">
                <BsInstagram className="h-10 w-10 " />
              </li>
            </ul>
          </div>
          <div className="flex flex-col h-fit w-64 bg-gray-200 m-3 rounded-2xl p-5 gap-y-2 text-sm">
            <div className="flex items-center gap-3">
              <div className="">
                {/* <Phone fill="url(#icon-gradiant)" /> */}
                <BsFillTelephoneFill className="h-7 w-7" />
              </div>
              <div className="">
                <div className="">Phone</div>
                <div className="">+91 7028397160</div>
              </div>
            </div>
            <div className=" flex items-center gap-3">
              <div className="">
                {/* <EnvelopeOpen fill="#FF9C1B" /> */}
                <IoIosMail className="h-8 w-8" />
              </div>
              <div className="">
                <div className="">Email</div>
                <div className="">bhatubairagi1610@gmail.com</div>
              </div>
            </div>
            <div className=" flex items-center gap-3">
              <div className="">
                {/* <GeoAlt fill="#E70504" /> */}
                <FaLocationArrow className="h-7 w-7" />
              </div>
              <div className="">
                <div className="">Location</div>
                <div className="">Maharashtra, India</div>
              </div>
            </div>
          </div>
          <a href="" target="_blank" rel="noreferrer">
            <button type="button" className="flex justify-center items-center bg-blue-500 h-10 w-fit p-5 rounded-2xl text-white font-bold">Download CV</button>
          </a>
        </div>
      </div>
    </div>
  );
}

export default Profile;
