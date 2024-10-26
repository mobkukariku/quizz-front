import clsx from "clsx";
import { FC } from "react";

interface ButtonProps {
    children: React.ReactNode;
    onCLick?: () => void;
    type?: "primary" | "secondary" | "submit" | "reset" | "none";
    className?: string;

}



export const Button: FC<ButtonProps> = ({ children, type = "primary", onCLick, className }) => {

    const buttonClasses = clsx(
        "transition duration-200 ease-in-out  text-xl  rounded-full font-semibold py-2 px-10",
        {
          "bg-white-default text-slate-100 shadow-md hover:shadow-lg hover:bg-white-hover focus:shadow-lg ": type === "primary",
          "bg-white-background border-2 border-white-default text-slate shadow-md hover:shadow-lg hover:bg-white-hover/20 focus:shadow-lg": type === "secondary",
          "" : type === "none",
        }
      );


    return (
        <button 
            onClick={onCLick}
            className={`${buttonClasses} ${className}`}
        >
            {children}
        </button>
    );
}