import { FC, ReactNode } from "react";

interface ButtonProps {
    children?: ReactNode;
    className?: string;
    click?: () => void;

}

export const Button: FC<ButtonProps> = ({ children, className, click }) => {
    return (
        <button className={`${className} rounded-lg p-2 border-0 cursor-pointer`} onClick={click}>
            {children}
        </button>
    );
};
