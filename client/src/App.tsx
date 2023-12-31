
import { useDarkMode } from "./context/DarkModeContext";
import { lightModes, darkModes } from "./theme/Theme";
import Layout from "./layout/Layout";
import { IconButton } from "./shared/IconButton";
import { Button } from "./shared/Button";
import { FacebookIcon, GithubIcon, LinkedInIcon, ProfileImage } from './asset/media'
import { FaArrowUpRightFromSquare } from "react-icons/fa6";
import { HeaderText } from "./layout/Font";
import { Helmet } from "react-helmet-async";
import { Html, Css, Js, Ts, Php, Sql, TailWind, Bootstrap, Antd, ReactJs, ExpressJs, MongoDb, Npm, Postman, Git, Figma, Vercel, ReactQuery, Flutter, Flask, Python } from './asset/DevIcon';
import { Capstone } from "./asset/Work";
import { WorkContainer } from "./work/WorkContainer";

import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import Slider from "react-slick";

export default function App() {
  const { darkMode } = useDarkMode();
  const settings = {
    dots: true,
    arrows: true,
    infinite: true,
    speed: 500,
    slidesToShow: 2,
    slidesToScroll: 2,
    responsive: [
      {
        breakpoint: 600,
        settings: {
          slidesToShow: 1,
          slidesToScroll: 1,
          initialSlide: 1
        }
      },
      {
        breakpoint: 1024,
        settings: {
          slidesToShow: 2,
          slidesToScroll: 2,
          initialSlide: 2
        }
      },
    ],
  };


  return (
    <Layout >
      <Helmet>
        <title>Jom Magbag</title>
      </Helmet>
      <div>
        <div className="w-full flex flex-col items-center space-y-10">

          {/* Profile*/}
          <div className="grid place-items-center md:grid-cols-2 xs:grid-cols-1 ">
            <div className=" w-full flex justify-center">
              <div>

                <ProfileImage />
              </div>
            </div>
            <div className="flex flex-col space-y-2 w-3/2 items-center md:items-start">
              <div className={`md:text-6xl ${darkMode === false ? lightModes.primaryText : darkModes.primaryText} font-bold sm:text-5xl xs:text-4xl xxs:text-3xl`}>Jom Magbag</div>
              <div className={`md:text-3xl ${darkMode === false ? lightModes.secondaryText : darkModes.secondaryText} font-semibold xs:text-2xl xxs:text-2xl`}>Web Developer</div>
              <div className={`lg:txt-lg md:text-base ${darkMode === false ? lightModes.tertiaryText : darkModes.tertiaryText} text-center`}>Aspiring web developer dedicated to learning and contributing.</div>
              <br />
              <div className="space-x-2">
                <Button click={() => window.open('https://www.linkedin.com/in/jomwinston/')}><LinkedInIcon /></Button>
                <Button click={() => window.open('https://github.com/yoshieexD')}><GithubIcon /></Button>
                <Button click={() => window.open('https://www.facebook.com/jomwinston.barramedamagbag')}><FacebookIcon /></Button>
              </div>
            </div>
          </div>
          <br />
          {/* Tools*/}
          <div >
            <HeaderText>Languages and Tools</HeaderText>
          </div>
          <div className="grid md:grid-cols-6 gap-10  sm:grid-cols-5 xs:grid-cols-3 xxs:grid-cols-2">
            <IconButton tooltip="Html" >< Html /></IconButton>
            <IconButton tooltip="Css">< Css /></IconButton>
            <IconButton tooltip="Javascript"><  Js /> </IconButton>
            <IconButton tooltip="Typescript"><Ts /></IconButton>
            <IconButton tooltip="Python"><Python /></IconButton>
            <IconButton tooltip="Php"> <Php /> </IconButton>
            <IconButton tooltip="Flutter"><  Flutter /></IconButton>
            <IconButton tooltip="Flask"><  Flask /></IconButton>
            <IconButton tooltip="Tailwind">< TailWind /></IconButton>
            <IconButton tooltip="Boostrap">< Bootstrap /></IconButton>
            <IconButton tooltip="Antd"><  Antd /></IconButton>
            <IconButton tooltip="React Js">< ReactJs /></IconButton>
            <IconButton tooltip="React Query">< ReactQuery /></IconButton>
            <IconButton tooltip="Express Js">< ExpressJs /></IconButton>
            <IconButton tooltip="My Sql"> < Sql /> </IconButton>
            <IconButton tooltip="MongoDB"><  MongoDb /></IconButton>
            <IconButton tooltip="Npm"><  Npm /></IconButton>
            <IconButton tooltip="Postman"><  Postman /></IconButton>
            <IconButton tooltip="Git"><  Git /></IconButton>
            <IconButton tooltip="Figma"><  Figma /></IconButton>
            <IconButton tooltip="Vercel"><  Vercel /></IconButton>
          </div>
          <br />
          {/* Experience*/}
          <div>
            <HeaderText>Experience</HeaderText>
          </div>
          <div className={` ${darkMode === true ? 'bg-slate-800 ' : 'bg-gray-100'}  p-6 rounded-lg`}>
            <div className="flex flex-col items-start">
              <p className={`text-lg ${darkMode === false ? 'text-black' : 'text-white'} font-bold`}>Full Stack Developer Intern</p>
              <div className="mt-2">
                <p className={`text-base ${darkMode === false ? 'text-gray-600' : 'text-gray-400'} font-bold italic underline`}>488 hours completed</p>
                <p className={`italic ${darkMode === false ? 'text-gray-600' : 'text-gray-400'}`}>Gain experience in XML-RPC, REST API, Odoo, Flutter, Flask,State Management, Agile Scrum, and Software Documentation.</p>
                <p className={`border-0 cursor-pointer b-slate-800 hover:underline underline-offset-8 ${darkMode === false ? 'text-gray-600' : 'text-gray-400'}`} onClick={() => window.open("https://drive.google.com/file/d/1Qx8oThWMyFMX73xHN7NylQkEdt12ztX8/view?usp=sharing", "_blank")} >View Certificate <FaArrowUpRightFromSquare className="w-[10px]" /></p>

              </div>
            </div>
          </div>

          {/* Work*/}
          <div>
            <HeaderText>My Works</HeaderText>
          </div>
          <div className="w-full  flex justify-center">
            <div className="w-5/6">
              <div className="w-full">
                <Slider {...settings} className="text-center  ">
                  <div>
                    <WorkContainer
                      image={<Capstone />}
                      title={'Well-Record with Google Drive API Integration'}
                      status={'Private'}
                      capstone={"Capstone"} />
                  </div>
                  <div>
                    <WorkContainer
                      image={<Capstone />}
                      title={'Student Flow Hub Real Time Web System'}
                      status={'Public'}
                      capstone={'Personal Project'}
                      website="https://studyflow-hub.vercel.app/"
                      github="https://github.com/yoshieexD/Student-Productivity" />
                  </div>
                  <div>
                    <WorkContainer
                      image={<Capstone />}
                      title={'Rick and Morty Api'}
                      status={'Public'}
                      capstone={'Personal Project'}
                      website="https://apirickandmorty-blue.vercel.app/"
                      github="https://github.com/yoshieexD/apirickandmorty" />
                  </div>
                  <div>
                    <WorkContainer
                      image={<Capstone />}
                      title={'Book Buddy Library Management Basic Crud'}
                      status={'Public'}
                      capstone={'Personal Project'}
                      github="https://github.com/yoshieexD/BookBuddyLibraryManagementSystem" />
                  </div>
                  <div>
                    <WorkContainer
                      image={<Capstone />}
                      title={'Kali: The Darkness Arrive'}
                      status={'Public'}
                      capstone={'Group Project'}
                      website="https://blazingwolfstudio32.itch.io/kali-the-darkness-arrive" />
                  </div>
                  <div>
                    <WorkContainer
                      image={<Capstone />}
                      title={'Flutter Dice Game'}
                      status={'Public'}
                      capstone={'Personal Project'}
                      github="https://github.com/yoshieexD/Flutter_Dice" />
                  </div>
                  <div>
                    <WorkContainer
                      image={<Capstone />}
                      title={'Flutter Quiz App'}
                      status={'Public'}
                      capstone={'Personal Project'}
                      github="https://github.com/yoshieexD/Flutter_QuizApp" />
                  </div>
                  <div>
                    <WorkContainer
                      image={<Capstone />}
                      title={'Flutter Expenses Tracker'}
                      status={'Public'}
                      capstone={'Personal Project'}
                      github="https://github.com/yoshieexD/Flutter_ExpenseTracker" />
                  </div>
                </Slider>
              </div>
            </div>
          </div>
          {/*Certificate */}

          <div>
            <HeaderText>Certificate</HeaderText>
          </div>
        </div>
      </div>
    </Layout >
  );
}
