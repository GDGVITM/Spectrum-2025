import React from "react";
import bgimage from "./posters/common_bg.png";
import techfeudImage from "./posters/techfeud.png"; // Add this import
import hackbuildCr from "./posters/hackbuildCr.png";
import Union from "../assets/Union.png";
import { Arrow, Eventtitle, hackBuildPrize } from "./svg";

export default function Holder() {
  return (
    <>
      <div className="min-h-screen">
        <img className="w-[100vw]" src={Union} />
        <div className="absolute top-30 left-0">
          <div className="p-4 mb-15 ml-155">
            <Eventtitle />
          </div>
          <div>
            <img
              src={hackbuildCr}
              className="w-[100%] h-[50%] object-cover object-top p-1 image-blur"
            />
            <div className="absolute top-50 left-30 text-2xl flex ">
              <h1 className="mr-6">HACKBUILD</h1>
              <Arrow width={80} height={80} />
            </div>
            <div className="w-[85%] absolute top-75 left-30 text-2xl">
              HackBuild is an exciting 8-hour event where students dive into the
              world of AI & ML, solving real-world challenges with cutting-edge
              technology. This event provides hands-on experience in AI/ML, and
              problem-solving, fostering innovation and creativity.
            </div>
            <div className="w-[85%] absolute top-110 left-30 flex flex-col">
              <span className="mb-10 text-6xl">Date: 12th April '25</span>
              <button className="w-[20%] register">
                REGISTER
              </button>
            </div>
              <hackBuildPrize/>
          </div>
        </div>
      </div>
    </>
  );
}
