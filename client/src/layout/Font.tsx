import { FC, ReactNode } from "react";
import { useDarkMode } from "../context/DarkModeContext";
import { lightModes, darkModes } from "../theme/Theme";

interface HeaderProps {
    children?: ReactNode;
}
export const HeaderText: FC<HeaderProps> = ({ children }) => {
    const { darkMode } = useDarkMode();
    return (
        <div className={`md:text-2xl font-semibold ${darkMode === false ? lightModes.secondaryText : darkModes.secondaryText}  xs:text-2xl xxs:text-lg`}>{children}</div>
    );
};
