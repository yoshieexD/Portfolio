
import { useDarkMode } from "./context/DarkModeContext";
import { lightModes, darkModes } from "./theme/Theme";
import Layout from "./layout/Layout";
import { Button } from "./shared/Button";
import { FacebookIcon, GithubIcon, LinkedInIcon } from './asset/media'

export default function App() {
  const { darkMode } = useDarkMode();
  return (
    <Layout >
      <div>
        <div className="w-full flex justify-center">
          <div className="grid place-items-center md:grid-cols-2 xs:grid-cols-1 ">
            <div className=" w-full flex justify-center">Image</div>
            <div className="flex flex-col space-y-2 w-3/2 items-center md:items-start">
              <div className={`md:text-6xl ${darkMode === false ? lightModes.primaryText : darkModes.primaryText} font-bold sm:text-5xl xs:text-4xl`}>Jom Magbag</div>
              <div className={`md:text-3xl ${darkMode === false ? lightModes.secondaryText : darkModes.secondaryText} font-semibold xs:text-2xl`}>Web Developer</div>
              <div className={`text-base ${darkMode === false ? lightModes.tertiaryText : darkModes.tertiaryText} text-center`}>Aspiring web developer dedicated to learning and contributing.</div>
              <br />
              <div className="space-x-2">
                <Button className={`${darkMode === false ? 'bg-gray-100' : 'bg-slate-800 text-white'}`} click={() => window.open('https://www.linkedin.com/in/jomwinston/')}><LinkedInIcon /></Button>
                <Button className={`${darkMode === false ? 'bg-gray-100' : 'bg-slate-800 text-white'}`} click={() => window.open('https://github.com/yoshieexD')}><GithubIcon /></Button>
                <Button className={`${darkMode === false ? 'bg-gray-100' : 'bg-slate-800 text-white'}`} click={() => window.open('https://www.facebook.com/jomwinston.barramedamagbag')}><FacebookIcon /></Button>
              </div>
            </div>
          </div>
        </div>
      </div>
    </Layout>
  );
}
