import React from "react";
import { RoughNotation, RoughNotationGroup } from "react-rough-notation";
import { RainbowHighlight, Subrayar } from "./components/Subrayar";
import Image from 'next/image';
import EnterImage from "./components/EnterImage";

export default function page() {
  const colors = ["#F59E0B", "#84CC16", "#10B981", "#3B82F6"];
  return (
    <div className="flex flex-row justify-center items-start overflow-hidden">
      {/* Text container */}

      <div className="w-full md:w-1/2 mx-auto text-center md:text-left my-10">
        <RoughNotationGroup show={true}>
          <Subrayar color={colors[0]}>
            <h1 className="text-5xl md:text-5xl font-bold text-gray-700 dark:text-gray-200 my-2 py-7">
              Full Stack Developer.
            </h1>
          </Subrayar>
          <Subrayar color={colors[1]}>
            <h1 className="text-5xl md:text-5xl font-bold text-gray-700 dark:text-gray-200 my-2 py-7">
              Industrial Engineer.
            </h1>
          </Subrayar>
          <Subrayar color={colors[2]}>
            <h1 className="text-5xl md:text-5xl font-bold text-gray-700 dark:text-gray-200 my-2 py-7">
              Father.
            </h1>
          </Subrayar>
          <Subrayar color={colors[3]}>
            <h1 className="text-5xl md:text-5xl font-bold text-gray-700 dark:text-gray-200 my-2 py-7" >
              Friend.
            </h1>
          </Subrayar>
        </RoughNotationGroup>
      </div>
      {/* Image container */}
      <div className="relative hidden lg:block relative w-full md:w-1/2 -mr-40 mt-20">

     <EnterImage/>
      </div>
    </div>
  );
}
