import React from "react";
import { SneakerPhoto, WatchDemoIcon } from "../assets/icons";
import {
  SectionAFirstIcon,
  SectionASecondIcon,
  SectionAThirdIcon,
} from "../assets/icons";

const fields = [
  {
    icon: <SectionAFirstIcon />,
    title: "Nibh viverra",
    description:
      "Sit bibendum donec dolor fames neque vulputate non sit aliquam. Consequat turpis natoque leo, massa.",
  },
  {
    icon: <SectionASecondIcon />,
    title: "Cursus amet",
    description:
      "Sit bibendum donec dolor fames neque vulputate non sit aliquam. Consequat turpis natoque leo, massa.",
  },
  {
    icon: <SectionAThirdIcon />,
    title: "Ipsum fermentum",
    description:
      "Sit bibendum donec dolor fames neque vulputate non sit aliquam. Consequat turpis natoque leo, massa.",
  },
];

export default function SectionA() {
  return (
    <div>
      <div className="w-full items-center justify-center flex flex-col md:flex-row px-4 py-12 md:p-20 gap-8 md:gap-20">
        <div className="flex flex-col gap-8">
          <div className="text-heading-2 text-[#0F172A] font-extrabold">
            Collectible Sneakers
          </div>
          <div className="text-body-l font-normal">
            Sit elit feugiat turpis sed integer integer accumsan turpis. Sed
            suspendisse nec lorem mauris. Pharetra, eu imperdiet ipsum ultrices
            amet.
          </div>
          <div className="flex gap-4 items-center justify-center">
            <div className="text-button-m font-medium text-[#78350F] px-7 py-3 border-2 rounded-lg border-[#78350F]">
              Sign up now
            </div>
            <div className="flex text-button-m font-medium text-[#78350F] px-3 py-2">
              <div>
                <WatchDemoIcon />
              </div>
              <div className="px-2">Watch Demo</div>
            </div>
          </div>
        </div>
        <div className="w-[361px] h-[314.2px] md:w-[486px] md:h-auto">
          <SneakerPhoto />
        </div>
      </div>
      <div>
        <div className="flex flex-col md:flex-row gap-8 md:gap-20 py-12 md:py-20 px-4 md:px-20">
          {fields.map((feature, index) => (
            <Fields key={index} {...feature} />
          ))}
        </div>
      </div>
    </div>
  );
}

function Fields({ icon, title, description }) {
  return (
    <div className="flex flex-col items-center  md:items-start gap-4 md:gap-15">
      <div className="w-16 h-16 rounded-full flex justify-center">{icon}</div>
      <h3 className="text-subtitle-xl text-center md:text-left">{title}</h3>
      <p className="text-body-l text-center md:text-left">{description}</p>
    </div>
  );
}
