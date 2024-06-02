import { FC, ReactNode } from "react";
import { useDarkMode } from "../context/DarkModeContext";

interface ButtonProps {
    children?: ReactNode;
    className?: string;
    click?: () => void;

}

export const Button: FC<ButtonProps> = ({ children, click, className }) => {
    const { darkMode } = useDarkMode();
    return (
        <button className={` rounded-lg border-[1px] border-solid ${darkMode === false ? ' border-gray-200 hover:bg-blue-50  bg-transparent' : 'bg-slate-800 text-white border-gray-700 hover:bg-slate-900'} p-2 cursor-pointer transition-all duration-300 ${className}`} onClick={click}>
            {children}
        </button>
    );
};
