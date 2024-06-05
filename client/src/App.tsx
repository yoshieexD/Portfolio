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
import { Capstone, StudentHub, Rick, Kali, Book, Quiz, Expenses, Meal } from "./asset/Work";
import { WorkContainer } from "./work/WorkContainer";
import { useState } from "react";
import { VerticalTimeline, VerticalTimelineElement } from 'react-vertical-timeline-component';
import 'react-vertical-timeline-component/style.min.css';


export default function App() {
  const { darkMode } = useDarkMode();
  const [links, setLinks] = useState(false);
  const [isWeb, setIsWeb] = useState(true);

  const jobs = [
    {
      id: 1,
      title: "Full Stack Developer Part Time",
      company: 'Sandbox',
      description: 'A startup company led by Sir Aldrich Alvarez developed a full-stack web application and deployed it on Firebase. I have worked independently as well as within team settings.Tech-Stack: React.js, Express.js,Node.js, and Firebase',
      startDate: 'February 2024',
      endDate: 'June 2024',
      link: false,
      companyLink: 'https://www.linkedin.com/company/sandboxhq/',
    },
    {
      id: 2,
      title: 'Full Stack Developer Intern',
      company: 'Achieve Without Borders',
      description: 'collaborated with fellow interns and successfully released a mobile application. Tech-Stack: Flutter, Flask Odoo',
      startDate: 'June 2023',
      endDate: 'Oct 2023',
      link: true,
      companyLink: 'https://www.linkedin.com/company/achieve-without-borders/',

    }
  ]

  const project = [
    {
      image: <Capstone />,
      title: 'Well-Record: Medical Record Management and Medicine Inventory System',
      status: 'Private',
      capstone: 'Capstone',
      description: <>A capstone project where I was the lead developer. The tech stack I used included <strong>React.js</strong>, , <strong>AntD + Tailwind</strong>,<strong>Express.js</strong>, <strong>Node.js</strong>, <strong>MongoDB</strong>, and <strong>Google Drive API</strong> for file storage.</>,
      development: 'Full Stack',
      web: true
    },
    {
      image: <StudentHub />,
      title: 'Student Flow Hub',
      status: 'Public',
      capstone: 'Personal Project',
      description:
        <>
          A personal project aimed at helping students become more productive. The tech stack I used included <strong>React.js</strong>,<strong>Tailwind</strong> <strong>Express.js</strong>, <strong>Node.js</strong>, <strong>MongoDB</strong>, and <strong>React Query</strong> for Real Time.
        </>,
      website: "https://studyflow-hub.vercel.app/",
      github: "https://github.com/yoshieexD/Student-Productivity",
      development: "Full Stack",
      web: true
    },
    {
      image: <Book />,
      title: 'Book Buddy Library Management Basic Crud',
      status: 'Public',
      capstone: 'Personal Project',
      github: "https://github.com/yoshieexD/BookBuddyLibraryManagementSystem",
      description:
        <>
          A personal project aimed at helping library to manage books. The tech stack I used included <strong>React.js</strong>,<strong>Bootsrap</strong>, <strong>Express.js</strong>, <strong>Node.js</strong> and <strong>MongoDB</strong>.
        </>
      ,
      development: "Full Stack",
      web: true
    },
    {
      image: < Kali />,
      title: 'Kali: The Darkness Arrive',
      status: 'Public',
      capstone: 'Group Project',
      description:
        <>
          A group project for our subject game development.The tech stack we used included < strong > Unity</strong > and < strong > C#</strong > programming language.
        </>,
      website: "https://blazingwolfstudio32.itch.io/kali-the-darkness-arrive",
      web: true
    },
    {

      image: <Rick />,
      title: 'Rick and Morty API',
      status: 'Public',
      capstone: 'Personal Project',
      description:
        <>
          A personal project. The tech stack I used included <strong>React.js</strong> and <strong>Rick and Morty API</strong>.
        </>,
      website: "https://apirickandmorty-blue.vercel.app/",
      github: "https://github.com/yoshieexD/apirickandmorty",
      development: "Front End",
      web: true
    },
    {
      image: <Meal />,
      title: 'Flutter Meal Mobile Application',
      status: 'Public',
      capstone: 'Personal Project',
      description:
        <>
          A personal project. The tech stack I used included <strong>Flutter</strong>.
        </>
      ,
      github: "https://github.com/yoshieexD/Flutter_MealApp",
      development: "Front End",
      web: false
    },
    {
      image: <Quiz />,
      title: 'Flutter Quiz Mobile A pplication',
      status: 'Public',
      capstone: 'Personal Project',
      description:
        <>
          A personal project. The tech stack I used included <strong>Flutter</strong>.
        </>
      ,
      github: "https://github.com/yoshieexD/Flutter_QuizApp",
      development: "Front End",
      web: false
    },
    {
      image: <Expenses />,
      title: 'Flutter Expenses Tracker Mobile Application',
      status: 'Public',
      capstone: 'Personal Project',
      description:
        <>
          A personal project. The tech stack I used included <strong>Flutter</strong>.
        </>
      ,
      github: "https://github.com/yoshieexD/Flutter_ExpenseTracker",
      development: "Front End",
      web: false
    }
  ]

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

          <VerticalTimeline>
            {jobs.map((job) => (
              <VerticalTimelineElement
                key={job.id}
                date={`${job.startDate} - ${job.endDate}`}
                iconStyle={{ background: 'rgb(33, 150, 243)', color: '#fff' }}
                contentStyle={{
                  border: '1px solid rgb(33, 150, 243)',
                  boxShadow: 'none',
                  backgroundColor: darkMode ? 'rgb(30, 41, 59)' : 'white',
                  color: darkMode ? 'white' : 'black',
                  borderColor: darkMode ? 'rgb(75, 85, 99)' : 'rgb(229, 231, 235)',
                }}
                className={`transition-all duration-300 ease-in-out`}
              >
                <h3 >{job.title}</h3>
                <h4 >{job.company}</h4>
                <p className={`italic ${darkMode === false ? 'text-gray-600' : 'text-gray-400'}`}>{job.description}</p>
                <div className="flex space-x-2">
                  {
                    job.link === true && (
                      <p className={`border-0 cursor-pointer b-slate-800 hover:underline underline-offset-8 ${darkMode === false ? 'text-gray-600' : 'text-gray-400'}`} onClick={() => window.open("https://drive.google.com/file/d/1Qx8oThWMyFMX73xHN7NylQkEdt12ztX8/view?usp=sharing", "_blank")} >View Certificate <FaArrowUpRightFromSquare className="w-[10px]" /></p>
                    )
                  }
                  <p className={`border-0 cursor-pointer b-slate-800 hover:underline underline-offset-8 ${darkMode === false ? 'text-gray-600' : 'text-gray-400'}`} onClick={() => window.open(`${job.companyLink}`, "_blank")} >Company Link <FaArrowUpRightFromSquare className="w-[10px]" /></p>
                </div>

              </VerticalTimelineElement>
            ))}
          </VerticalTimeline>

          {/* Work*/}
          <div>
            <HeaderText>My Works</HeaderText>
          </div>

          <div className="space-x-4">
            <button
              className={`bg-transparent border-0 text-base cursor-pointer 
              ${isWeb ? `border-b-2 ${darkMode ? 'border-white' : ''}` : ''} 
              ${darkMode ? 'text-gray-400' : 'text-gray-600'}
              `}
              onClick={() => setIsWeb(true)}
            >
              Web
            </button>

            <button className={`
              bg-transparent border-0 text-base cursor-pointer
              ${isWeb === false ? `border-b-2 ${darkMode ? 'border-white' : ''}` : ''} 
              ${darkMode ? 'text-gray-400' : 'text-gray-600'}
              `}
              onClick={() => setIsWeb(false)}>Mobile</button>
          </div>
          <div className="w-full  flex justify-center">
            <div className="md:w-5/6 xs:w-full xxs:w-full mx-auto ">
              <div className="grid gap-4 xxs:grid-cols-1 sm:grid-cols-2 md:grid-cols-3">
                {project.filter(item => item.web === isWeb).map((project) => (
                  <div className="mb-4 h-auto">
                    <WorkContainer
                      image={project.image}
                      title={project.title}
                      status={project.status}
                      capstone={project.capstone}
                      description={project.description}
                      website={project.website}
                      github={project.github}
                      development={project.development}
                    />
                  </div>
                ))}
              </div>

            </div>
          </div>
          {/*Certificate */}

          <div>
            <HeaderText>Certificate</HeaderText>
          </div>
          <div className="w-full flex justify-center" >
            <div className="w-5/6 grid md:grid-cols-4 xs:grid-cols-2 xxs:grid-cols-1">
              <div className="flex space-x-2 bg-slate-900 h-auto rounded-lg cursor-pointer" onMouseEnter={() => setLinks(true)} onMouseLeave={() => setLinks(false)} onClick={() => window.open('https://www.freecodecamp.org/certification/yoshieexD/javascript-algorithms-and-data-structures')}>
                <div className="w-1/4 h-auto  flex items-center justify-center">
                  <div className="md:h-12 xs:h-full ">
                    <Js />
                  </div>
                </div>
                <p className={`w-3/4  text-white  md:text-sm xs:text-xs xxs:text-xs  font-normal`}>Javascript Algorithms and Data Structures</p>
                {links === true && (
                  <FaArrowUpRightFromSquare className="w-[10px] text-white p-2" />
                )}
              </div>
            </div>
          </div>


        </div>
      </div>
    </Layout >
  );
}
