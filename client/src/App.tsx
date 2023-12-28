
import { useDarkMode } from "./context/DarkModeContext";
import Layout from "./layout/Layout";

export default function App() {
  const { darkMode } = useDarkMode();
  return (
    <Layout >
      <div>
        <div className="w-full flex justify-center">
          <div className="grid place-items-center md:grid-cols-2 xs:grid-cols-1 ">
            <div className=" w-full flex justify-center">Image</div>
            <div className="flex flex-col space-y-2 w-3/2 items-center md:items-start">
              <div className={`md:text-6xl ${darkMode === false ? 'text-slate-950' : 'text-white'} font-bold sm:text-5xl xs:text-4xl`}>Jom Magbag</div>
              <div className={`md:text-3xl ${darkMode === false ? 'text-gray-700' : 'text-slate-500'} font-semibold xs:text-2xl`}>Web Developer</div>
              <div className={`text-base ${darkMode === false ? 'text-gray-600' : 'text-slate-400'} text-center`}>
                Aspiring web developer dedicated to learning and contributing.
              </div>
            </div>
          </div>
        </div>
      </div>
    </Layout>
  );
}
