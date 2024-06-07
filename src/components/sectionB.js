import React from "react";
import SectionB1 from "../assets/SectionB1.jpeg";
import SectionB2 from "../assets/SectionB2.jpeg";
import SectionB3 from "../assets/SectionB3.jpeg";
import { BuyNowIcon } from "../assets/icons";

const fields = [
  {
    id: 1,
    title: "Title",
    image: SectionB1,
    description:
      "Egestas elit duiscelerisque ut eu purus aliquam vitae habitasse.",
  },
  {
    id: 2,
    title: "Title",
    image: SectionB2,
    description:
      "Egestas elit dui scelerisque ut eu purus aliquam vitae habitasse.",
  },
  {
    id: 3,
    title: "Title",
    image: SectionB3,
    description:
      "Egestas elit dui scelerisque ut eu purus aliquam vitae habitasse.",
  },
];

export default function SectionB() {
  return (
    <div className="flex flex-col gap-8 md:gap-20 py-12 md:py-20 px-4 md:px-20 bg-slate-900">
      <div className="flex flex-col md:flex-row justify-between">
        <div className="text-white text-heading-5 md:text-heading-2 text-center md:text-left">
          The best of the best
        </div>
        <button className="px-12 py-5 border-2 flex gap-2 border-white rounded-lg mt-3 text-white text-button-xl">
          <span className="flex justify-center items-center w-full h-full">
            Sign up now
          </span>
        </button>
      </div>
      <div className="flex flex-wrap justify-center gap-6 md:gap-12">
        {fields.map((field) => (
          <Fields key={field.id} field={field} />
        ))}
      </div>
    </div>
  );
}

const Fields = ({ field }) => {
  return (
    <div className="flex flex-col relative bg-slate-900 shadow-2xl shadow-slate-50/20 rounded-lg p-8 w-full max-w-xs md:max-w-none md:w-[394.67px] h-[472px]">
      <img
        src={field.image}
        alt={field.title}
        className="absolute top-0 left-0 w-full h-[236px] object-cover rounded-t-lg"
      />
      <div className="flex flex-col justify-between flex-grow pt-[236px] mt-4">
        <div className="flex flex-col items-start">
          <h2 className="text-heading-6 mb-2 text-white">{field.title}</h2>
          <div className="text-body-l text-gray-300 mb-2">
            {field.description}
          </div>
        </div>
        <button className="w-full px-4 py-2 border-2 flex gap-2 border-white rounded-lg mt-auto">
          <span className="flex justify-center items-center w-full h-full text-white text-button-l">
            <BuyNowIcon />
            <span className="px-4">Buy Now</span>
          </span>
        </button>
      </div>
    </div>
  );
};
