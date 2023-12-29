import { FC, ReactNode } from 'react';
import { useDarkMode } from '../context/DarkModeContext';
import Header from './Header';

interface LayoutProps {
    children?: ReactNode;
}

const Layout: FC<LayoutProps> = ({ children }) => {
    const { darkMode, toggleDarkMode } = useDarkMode();

    return (
        <div className={`w-full ${darkMode ? 'bg-slate-950 text-white' : 'bg-white text-slate-950'} h-full transition-all duration-300`}>
            <div className='py-4 px-8'>
                <Header darkMode={darkMode} toggleDarkMode={toggleDarkMode} />
                {children}
            </div>
        </div>
    );
};

export default Layout;
