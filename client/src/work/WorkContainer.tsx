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
        <div className={` ${darkMode === true ? 'bg-slate-800 ' : 'bg-gray-100'}  p-6 rounded-lg md:w-1/4 xs:w-4/5 xxs:w-4/5`}>
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