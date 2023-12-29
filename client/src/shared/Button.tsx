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
        <button className={`${darkMode === false ? 'bg-gray-100 hover:bg-gray-200' : 'bg-slate-800 text-white hover:bg-slate-900'} rounded-lg p-2 border-0 cursor-pointer transition-all duration-300 ${className}`} onClick={click}>
            {children}
        </button>
    );
};
