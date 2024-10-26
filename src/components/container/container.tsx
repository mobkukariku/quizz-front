import { FC } from "react";

interface ContainerProps {
    children: React.ReactNode
    className?: string
}

export const Container: FC<ContainerProps> = ({ children, className }) => {
    return (
        <div className={`${className} container max-w-[1300px] mx-auto px-4 `}>
            {children}
        </div>
    );
}