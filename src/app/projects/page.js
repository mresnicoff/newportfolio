import React from "react";
import Image from 'next/image';
const userData=[{
    id: 1,
    src: "Weather-app",
    URL:"https://mresnicoff.github.io/weather",
    URL2:"projectdetails/1",
    img:"weather"
  },
  {
    id: 2,
    src: "Memory game",
    URL:"https://mresnicoff.github.io/memory",
    URL2:"projectdetails/2",
    img:"memory"
  },
  {
    id: 3,
    src: "Dinos & Guns",
    URL:"https://mresnicoff.github.io/dinosaurio_chrome",
    URL2:"projectdetails/3",
    img:"dino"
  },
  {
    id: 4,
    src: "Rick & Morty",
    URL:"https://mresnicoff.github.io/rickfront",
    URL2:"projectdetails/4",
    img:"rick"
  },
      {  id: 5,
    src: "Countries",
    URL2:"projectdetails/5",
    img:"countries"
  
  },
          {  id: 6,
    src: "Flight-Deck",
    URL:"https://github.com/mresnicoff/FLIGHT-DECK",
    URL2:"projectdetails/6",
    img:"flightdeck"
  
  },
    {  id: 7,
    src: "Excel-consolidator",
    URL2:"projectdetails/7",
    img:"excel"

  
  },
{  id: 8,
src: "Grid-Status",
URL2: "projectdetails/8",
img:"gridstatus"


},



];
export default function Projects() {
  return (
    <section className="bg-white dark:bg-gray-800">
      <div className="max-w-6xl mx-auto h-48 bg-white dark:bg-gray-800">
        <h1 className=" text-5xl md:text-9xl font-bold py-20 text-center md:text-left">
          Projects
        </h1>
      </div>
      {/* Grid starts here */}
      <div className="bg-[#F1F1F1] dark:bg-gray-900">
        <div className="max-w-6xl mx-auto grid grid-cols-1 md:grid-cols-2 gap-8 py-20 pb-40">
          {userData.map((proj) => (
            <ProjectCard
              key={proj.id}
              title={proj.src}
              link={proj.URL2}
              imgUrl={`/${proj.img}.png`}
              number={proj.id}
            />
          ))}
        </div>
      </div>
    </section>
  );
}

const ProjectCard = ({ title, link, imgUrl, key }) => {
  return (
    <a key={key}href={link} className="w-full block shadow-2xl">
      <div className="relative overflow-hidden">
        <div className="h-72 object-cover">
          <Image
            src={imgUrl}
            width="100"
            height="100"
            alt="portfolio"
            className="transform hover:scale-125 transition duration-2000 ease-out object-cover h-full w-full"
          />
        </div>
        <h1 className="absolute top-10 left-10 text-gray-50 font-bold text-xl bg-red-500 rounded-md px-2">
          {title}
        </h1>

      </div>
    </a>
  );
};