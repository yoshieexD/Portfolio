import { FC, ReactNode } from 'react';
import { useDarkMode } from '../context/DarkModeContext';
import { TbWorldWww } from "react-icons/tb";
import { FaGithub } from "react-icons/fa";

interface WorkContainerProps {
    image?: ReactNode,
    status?: string
    title?: string,
    github?: string,
    website?: string,
    capstone?: string,
    development?: string,
    description?: ReactNode,
}
export const WorkContainer: FC<WorkContainerProps> = ({ image, status, title, github, website, capstone, development, description }) => {
    const { darkMode } = useDarkMode();
    return (
        <div className={` border-[1px] border-solid rounded-lg pb-4 ${darkMode === true ? 'bg-slate-800 border-gray-700  hover:bg-slate-900' : 'border-gray-200  hover:bg-blue-50 '} sm:h-[100%]`}>
            <div className='w-full text-center xxs:h-[50%] sm:h-[40%] md:h-[50%]'>
                {image}
            </div>
            <div className='flex flex-col px-2  h-[50%] px-3'>
                <p className='text-base  font-bold md:min-h-[10%]'>{title}</p>
                <div className=' text-left pb-4 text-base h-[70%]'>{description}</div>
                <div className='flex md:flex-row md:justify-between xs:flex-col xs:justify-center xs:items-center xxs:flex-col xxs:justify-center xxs:items-center xs:space-y-2 xxs:space-y-2'>
                    <div className='flex space-x-2  w-auto'>

                        <div className={`${status === "Private" ? 'bg-red-500 w-auto rounded-lg text-red-900 p-1' : status === "Public" ? 'bg-gray-500 w-auto rounded-lg text-gray-900 p-1' : ''}`}>
                            {status}
                        </div>

                        <div className={`${capstone === "Capstone" ? 'bg-blue-500 w-auto rounded-lg text-blue-900 p-1' :
                            capstone === "Personal Project" ? 'bg-green-500 w-auto rounded-lg text-green-900 p-1' :
                                capstone === "Group Project" ? 'bg-yellow-500 w-auto rounded-lg text-yellow-900 p-1' : ''
                            } text-nowrap`}>
                            {capstone}
                        </div>

                        <div className={`${development === "Full Stack" ? " bg-violet-500 w-auto rounded-lg text-violet-900" : development === "Front End" ? "bg-yellow-500 w-auto rounded-lg text-yellow-900" : ""} text-nowrap flex items-center justify-center px-2`}>
                            {development}
                        </div>

                    </div>
                    <div className='flex space-x-2'>
                        {website && (
                            <div className='h-full w-full text-gray-600 hover:text-gray-900 cursor-pointer' onClick={() => window.open(`${website}`)}><TbWorldWww className='text-xl' /></div>
                        )}
                        {github && (
                            <div className='h-full w-full text-gray-600 hover:text-gray-900 cursor-pointer' onClick={() => window.open(`${github}`)}><FaGithub className='text-xl' /></div>
                        )}

                        {!website && !github && (
                            <br />
                        )}
                    </div>
                </div>
            </div >
        </div >
    );
};