import React from "react";
import heroImg from "../../public/assets/hero-img.png";
import Image from "next/image";
function Hero() {
  return (
    <div className="container mx-auto">
      <div className="max-w-[1000px] mx-auto">
        <div className="flex flex-row">
          <div className="basis-4/6 pt-[35px]">
            <h1 className="text-[40px] font-[350] leading-[44px] pb-[26px] text-tahiti-secondary">
              Distant learning <br />
              for agripreneurship
            </h1>

            <p className="leading-[24px] text-[20px] font-gbold text-tahiti-secondary max-w-[389px] pb-[42px]">
              {" "}
              Learning is a life-long journey that in fact we never find the
              terminate stop. Stop searching, enjoy the process.
            </p>

            <div>
              <button className="w-[160px] h-[40px] text-[#ffffff] bg-tahiti font-gbold text-[14px] leading-[17px]">
                {" "}
                Explore
              </button>
            </div>
          </div>
          <div className="basis-2/6">
            <Image src={heroImg} className="pb-[52px]" alt="hero-img" />
          </div>
        </div>
      </div>
    </div>
  );
}

export default Hero;
