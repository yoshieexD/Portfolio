import { ReactNode, FC, useState } from 'react';
import { useDarkMode } from "../context/DarkModeContext";

interface IconButtonProps {
    children?: ReactNode;
    tooltip?: string,
}

export const IconButton: FC<IconButtonProps> = ({ children, tooltip }) => {
    const { darkMode } = useDarkMode();
    const [tooltipOpen, setTooltipOpen] = useState(false);
    return (
        <div className='flex flex-col'>
            <div className={`${darkMode === false ? 'bg-gray-100 hover:bg-gray-200' : 'bg-slate-800 text-white hover:bg-slate-900'} rounded-lg p-2 border-0 cursor-pointer w-14 h-14 flex justify-center items-center  transition-all duration-300`} onMouseEnter={() => setTooltipOpen(true)} onMouseLeave={() => setTooltipOpen(false)}>
                <p className='w-full h-full'>{children}</p>
            </div >
            < div>
                {tooltipOpen === true && (
                    <div className={`${darkMode === false ? ' text-gray-800' : ' text-white'} absolute z-50   py-2   text-normal font-semibold focus:outline-none whitespace-nowrap 	`}>
                        {tooltip}
                    </div>
                )
                }
            </div >
        </div >
    );
};
