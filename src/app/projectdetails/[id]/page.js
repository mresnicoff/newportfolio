import EnterImage from "@/app/components/EnterImage"
import Link from 'next/link'
const Project = ({params}) => {
    const userData=[{
        id: 1,
        src: "Weather-app",
        URL:"https://github.com/mresnicoff/weather",
        URL2:"projectdetails/1",
        img:"weather",
        text:"The weather app was one of my initial projects on React, created alongside a few friends from the SUP program at Soy Henry's bootcamp. My primary focus was implementing the feature that enables the app to display the weather information based on the user's current location. Additionally, I contributed to the app's styling to enhance its visual appeal."
      },
      {
        id: 2,
        src: "Memory game",
        URL:"https://github.com/mresnicoff/memory",
        URL2:"projectdetails/2",
        img:"memory",
        text:"To test my DOM manipulation skills, I transformed a single-player memory game into an engaging two-player experience. Through dynamic scoring and interactive elements, players can now compete head-to-head, flipping cards and matching pairs. Experience the thrill of multiplayer competition and put your memory skills to the test in this enhanced game"

      },
      {
        id: 3,
        src: "Dinos & Guns",
        URL:"https://github.com/mresnicoff/dinosaurio_chrome",
        URL2:"projectdetails/3",
        img:"dino",
        text:"To test my JavaScript skills, I decided to give a thrilling twist to the classic Dino game. I equipped the Dino with a powerful gun, adding an exciting layer of strategy and precision. This project pushed my understanding of JavaScript's interactivity and game mechanics, while injecting creativity into a beloved game. Experience the enhanced gameplay as the Dino fends off obstacles with firepower. Enjoy the excitement and innovation of this modified Dino game!"
      },
      {
        id: 4,
        src: "Rick & Morty",
        URL:"https://github.com/mresnicoff/rickfront",
        URL2:"projectdetails/4",
        img:"rick",
        text:"The Rick and Morty app served as our integration project during the Soy Henry bootcamp. I took a unique approach by utilizing a JSON file as a database, allowing for multi-user functionality in my version. I won a mention for this work at the bootcamp."
   
      },
          {  id: 5,
        src: "Countries",
        URL:"https://github.com/mresnicoff/countriesfront",
        URL2:"projectdetails/5",
        img:"countries",
        text:"The countries project was my individual endeavor during the Soy Henry Bootcamp. I was able to showcase my learning by implementing card displays, creating filters, and uploading information through forms. During the presentation, I even made a live change, which added an extra level of excitement to the experience."

      
      },
              {  id: 6,
        src: "Flight-Deck",
        URL:"https://github.com/mresnicoff/FLIGHT-DECK",
        URL2:"projectdetails/6",
        img:"flightdeck",
        text:"Flight Deck was our team project at the Soy Henry Bootcamp. It is a flight logbook designed to help pilots maintain records of their flights. The application features three profiles, including the pilot profile, which enables users to input their flight details seamlessly."
      
      },
        {  id: 7,
        src: "Excel-consolidator",
        URL:"https://github.com/mresnicoff/excelfront",
        URL2:"projectdetails/7",
        img:"excel",
        text:"The Excel Consolidator is an app I have made in order to consolidate the requirements of materials from different users. The systems checks if the user has already issued a request. If so he can change it completely or append a new request to it. In addition, the sistem checks for consistency in the requirement and shows the lines with problems."
      
      },
    {  id: 8,
    src: "Grid-Status",
    URL:"https://github.com/mresnicoff/gridstatus",
    URL2: "projectdetails/8",
    img:"gridstatus",
    text:"The system maps substations and paints them in different colors according to the susbstation's capacity for the year and the scenario selected. This system is algo usefull for maping the capacity of the transmission lines between susbstations"
    
    
    }]
    return (
        <section >
        <div className="max-w-6xl mx-auto h-48 ">
        <div className="flex justify-between items-center w-full w-3/4" >
        <h1 className=" text-2xl md:text-6xl font-bold py-20 text-center md:text-left">
           {userData[params.id-1].src}
        </h1>
        <Link href="/projects" className="font-bold py-20 text-center md:text-left">Back to Portfolio</Link>
        </div>
        <EnterImage  link={userData[params.id-1].URL} text={userData[params.id-1].text}src={userData[params.id-1].img}/>
     </div>

    
        </section>
    )
}

export default Project