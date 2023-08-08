import React from "react";

const About = () => {
  return (
    <div
      name="about"
      className="w-full h-screen bg-gradient-to-b from-gray-300 via-white to-white  dark:bg-gradient-to-b dark:from-gray-800 to-black dark:text-white"
    >
      <div className="max-w-screen-lg p-4 mx-auto flex flex-col justify-center w-full h-full">
        <div className="pb-8">
          <p className="text-3xl font-bold inline border-b-4 border-gray-500">
            About
          </p>
        </div>
        <p className="text-xl mt-18">
          I am a full stack developer with a background in Industrial Engineering and logistics. 
          I love learning new stuff all the time. Not only learning new programming languages and databases, but learning new ways of working too. I think it is remarkable the way working changed since I started my journey. Self-managed teams were a dream of the future and now it is a reality.
        </p>

        <br />

        <p className="text-xl">
          In my joruney I have done many things. I started coding in basic and logo. Not visual basic, but the basic basic. I have done my coding in Apache + PHP + MY SQL. And now I am an enthusiastic of MERN Mongo + Express + React + Node. 
          This new porfolio uses Next 13 and GraphQL for the Admin section, where I upload new projects.
        
        </p> 
      </div>
    </div>
  );
};

export default About;
