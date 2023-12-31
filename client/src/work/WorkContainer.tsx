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
    role?: String,
}
export const WorkContainer: FC<WorkContainerProps> = ({ image, status, title, github, website, capstone, role }) => {
    const { darkMode } = useDarkMode();
    return (
        <div className={` ${darkMode === true ? 'bg-slate-800 ' : 'bg-gray-100'}   rounded-lg w-5/6 h-full pb-2`}>
            <div className='w-full text-center h-4/5'>
                {image}
            </div>
            <div className='flex flex-col space-y-[-10px] px-2'>
                <p className='text-base  font-bold '>{title}</p>
                <div className='flex justify-between'>
                    <div className='flex space-x-2'>
                        <div className={`${status === "Private" ? 'bg-red-500 w-20 rounded-lg text-red-900 p-1' : status === "Public" ? 'bg-gray-500 w-20 rounded-lg text-gray-900 p-1' : ''}`}>
                            {status}
                        </div>
                        <div className={`${capstone === "Capstone" ? 'bg-blue-500 w-20 rounded-lg text-blue-900 p-1' :
                            capstone === "Personal Project" ? 'bg-green-500 w-28 rounded-lg text-green-900 p-1' :
                                capstone === "Group Project" ? 'bg-yellow-500 w-28 rounded-lg text-yellow-900 p-1' : ''
                            } text-nowrap`}>
                            {capstone}
                        </div>
                        <div>
                            {role}
                        </div>

                    </div>
                    <div className='flex space-x-2 items-center justify-center'>
                        {website && (
                            <div className='h-full w-full text-gray-600 hover:text-gray-900 cursor-pointer' onClick={() => window.open(`${website}`)}><TbWorldWww className='text-xl' /></div>
                        )}
                        {github && (
                            <div className='h-full w-full text-gray-600 hover:text-gray-900 cursor-pointer' onClick={() => window.open(`${github}`)}><FaGithub className='text-xl' /></div>
                        )}
                    </div>
                </div>
            </div >
        </div >
    );
};