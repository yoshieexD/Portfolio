
import { useDarkMode } from "./context/DarkModeContext";
import { lightModes, darkModes } from "./theme/Theme";
import Layout from "./layout/Layout";
import { IconButton } from "./shared/IconButton";
import { Button } from "./shared/Button";
import { FacebookIcon, GithubIcon, LinkedInIcon } from './asset/media'
import { HeaderText } from "./layout/Font";
import { Helmet } from "react-helmet-async";
import { Html, Css, Js, Ts, Php, Sql, TailWind, Bootstrap, Antd, ReactJs, ExpressJs, MongoDb, Npm, Postman, Git, Figma, Vercel, ReactQuery } from './asset/DevIcon';


export default function App() {
  const { darkMode } = useDarkMode();
  return (
    <Layout >
      <Helmet>
        <title>Jom Magbag</title>
      </Helmet>
      <div>
        <div className="w-full flex flex-col items-center space-y-10">

          {/* Profile*/}
          <div className="grid place-items-center md:grid-cols-2 xs:grid-cols-1 ">
            <div className=" w-full flex justify-center">Image</div>
            <div className="flex flex-col space-y-2 w-3/2 items-center md:items-start">
              <div className={`md:text-6xl ${darkMode === false ? lightModes.primaryText : darkModes.primaryText} font-bold sm:text-5xl xs:text-4xl`}>Jom Magbag</div>
              <div className={`md:text-3xl ${darkMode === false ? lightModes.secondaryText : darkModes.secondaryText} font-semibold xs:text-2xl`}>Web Developer</div>
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
          <div className="grid md:grid-cols-6 gap-10  sm:grid-cols-5 xs:grid-cols-3">
            <IconButton tooltip="Html" >< Html /></IconButton>
            <IconButton tooltip="Css">< Css /></IconButton>
            <IconButton tooltip="Javascript"><  Js /> </IconButton>
            <IconButton tooltip="Typescript"><Ts /></IconButton>
            <IconButton tooltip="Php"> <Php /> </IconButton>
            <IconButton tooltip="My Sql"> < Sql /> </IconButton>
            <IconButton tooltip="Tailwind">< TailWind /></IconButton>
            <IconButton tooltip="Boostrap">< Bootstrap /></IconButton>
            <IconButton tooltip="Antd"><  Antd /></IconButton>
            <IconButton tooltip="React Js">< ReactJs /></IconButton>
            <IconButton tooltip="React Query">< ReactQuery /></IconButton>
            <IconButton tooltip="Express Js">< ExpressJs /></IconButton>
            <IconButton tooltip="MongoDB"><  MongoDb /></IconButton>
            <IconButton tooltip="Npm"><  Npm /></IconButton>
            <IconButton tooltip="Postman"><  Postman /></IconButton>
            <IconButton tooltip="Git"><  Git /></IconButton>
            <IconButton tooltip="Figma"><  Figma /></IconButton>
            <IconButton tooltip="Vercel"><  Vercel /></IconButton>
          </div>

          {/* Experience*/}
          <div>
            <HeaderText>Experience</HeaderText>
          </div>

          {/* Work*/}
          <div>
            <HeaderText>My Works</HeaderText>
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
