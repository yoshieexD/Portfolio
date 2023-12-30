import { FC, ReactNode } from 'react';
import { useDarkMode } from '../context/DarkModeContext';
interface WorkContainerProps {
    image?: ReactNode,
    content?: string
    title?: string,
}
export const WorkContainer: FC<WorkContainerProps> = ({ image, content, title }) => {
    const { darkMode } = useDarkMode();
    return (
        <div className={` ${darkMode === true ? 'bg-slate-800 ' : 'bg-gray-100'}  p-6 rounded-lg w-5/6 h-[200px]`}>
            <div className='w-full'>
                {image}
            </div>
            <div>
                <p className='text-base  font-bold '>{title}</p>
                <p className="text-justify" >
                    {content}
                </p>
            </div>
        </div>
    );
};