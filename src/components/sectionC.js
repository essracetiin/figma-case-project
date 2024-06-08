import React from "react";
import { SectionC1, SectionC2, SectionC3, SectionC4 } from "../assets/icons";
import SectionCPhoto from "../assets/SectionC1.jpeg";
export default function SectionC() {
  return (
    <div className="flex flex-col md:flex-row gap-8 md:gap-20 py-12 md:py-20 px-4 md:px-20 bg-amber-50">
      <div className="flex md:flex-row flex-col gap-8 md:gap-20 md:p-20 py-12 px-4 rounded-3xl bg-white mx-auto">
        <div className="flex flex-col gap-6 ">
          <h1 class="text-black text-heading-5 md:text-heading-2  text-center md:text-left">
            Why join us
          </h1>
          <div className="flex items-center ">
            <SectionC1 />
            <p className="text-black text-body-m md:text-body-xl text-left ml-3 ">
              Est et in pharetra magna adipiscing ornare aliquam.
            </p>
          </div>

          <div className="flex items-center ">
            <SectionC1 />
            <p className="text-black text-body-m md:text-body-xl text-left ml-3 ">
              Tellus arcu sed consequat ac velit ut eu blandit.
            </p>
          </div>

          <div className="flex items-center ">
            <SectionC1 />
            <p className="text-black text-body-m md:text-body-xl text-left ml-3 ">
              Ullamcorper ornare in et egestas dolor orci.
            </p>
          </div>

          <div className="flex  md:text-left justify-center md:justify-start">
            <button class="px-8 py-4 border-2 flex gap-2 text-button-l rounded-lg text-[#78350F] border-[#78350F]">
              Sign up now
            </button>
          </div>
        </div>

        <div className="rounded-3xl bg-white h-[234px] w-[329px] md:h-[350px] md:w-[520px] shadow-lg">
          <div className="flex flex-row h-[41px] gap-1.5 md:gap-1.5 py-2 md:py-2 px-4 md:px-4 items-center">
            <SectionC2 />
            <SectionC3 />
            <SectionC4 />
          </div>

          <div className="flex w-full">
            <img
              className="h-[193px] md:h-[309px] z-10 px-2.5 pb-2.5 rounded-b-3xl "
              src={SectionCPhoto}
              alt="section c img"
            />
          </div>
        </div>
      </div>
    </div>
  );
}
