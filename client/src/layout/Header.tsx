import { RiSunLine, RiMoonClearLine } from "react-icons/ri";
import { FC } from "react";
import { Button } from "../shared/Button";
interface HeaderProps {
    darkMode?: boolean;
    toggleDarkMode: () => void;
}

const Header: FC<HeaderProps> = ({ darkMode, toggleDarkMode }) => {
    return (
        <div className='flex justify-between mb-20'>
            <div className={`text-xl font-bold ${darkMode ? 'text-white' : 'text-slate-950'}`}>Jom Dev.</div>
            <Button className={` ${darkMode ? 'bg-slate-800 text-white' : 'bg-gray-100'}`} click={toggleDarkMode}>
                {darkMode ? <RiMoonClearLine size={20} className="hover:animate-ping" /> : <RiSunLine size={20} className="hover:animate-spin" />}
            </Button>
        </div>
    );
};

export default Header;
