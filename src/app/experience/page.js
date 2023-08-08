import React from "react";


const javascript= "assets/javascript.png";
const reactImage ="/assets/react.png";
const nextjs ="/assets/nextjs.png";
const graphql ="/assets/graphql.png";
const github ="/assets/github.png";
const tailwind ="/assets/tailwind.png";
const postgre ="/assets/postgre.png";

const Experience = () => {
  const html ="assets/html.png";
const css = "/assets/css.png";
  const techs = [
    {
      id: 1,
      src: html,
      title: "HTML",
      style: "shadow-orange-500 bg-gray-400",
    },
    {
      id: 2,
      src: css,
      title: "CSS",
      style: "shadow-blue-500 bg-gray-400",
    },
    {
      id: 3,
      src: javascript,
      title: "JavaScript",
      style: "shadow-yellow-500 bg-gray-400",
    },
    {
      id: 4,
      src: reactImage,
      title: "React",
      style: "shadow-blue-600 bg-gray-400",
    },

    {
      id: 6,
      src: tailwind,
      title: "Tailwind",
      style: "shadow-sky-400 bg-gray-400",
    },
    {
      id: 5,
      src: nextjs,
      title: "NextJs",
      style: "shadow-sky-400 bg-gray-400",
    },
    {id: 7,
    src: graphql,
    title: "GraphQL",
    style: "shadow-teal-300 bg-gray-400",
  },

    {
      id: 8,
      src: github,
      title: "GitHub",
      style: "shadow-lime-500 bg-gray-400",
    },
    {
      id: 9,
      src: postgre,
      title: "PostgreSQL",
      style: "shadow-orange-500 bg-gray-400",
    },
  ];

  return (
    <div
      name="experience"
      className="bg-white dark:bg-gradient-to-b from-black to-gray-800 w-full md:h-screen text-white"
    >
      <div className="max-w-screen-lg mx-auto  flex flex-col justify-center w-full text-white h-full">  
        <div>
          <p className="py-1 text-3xl font-bold border-b-4 border-gray-500 p-2 inline">
            Experience
          </p>
          <p className="py-5">These are the technologies I have worked with</p>
        </div>

        <div className="w-full grid grid-cols-2 sm:grid-cols-3 gap-8 text-center py-1  px-12 sm:px-0">
          {techs.map(({ id, src, title, style }) => (
            <div
              key={id}
              className={`shadow-md hover:scale-105 duration-500 py-2 rounded-lg ${style}`}
            >
              <img src={src} alt="" className="w-20 mx-auto object-scale-down" />
              <p className="mt-4">{title}</p>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default Experience;