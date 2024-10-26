import clsx from "clsx"
import { FC, forwardRef } from "react"

interface InputProps {
    placeholder?: string;
    type?: string;
    variant: "auth" | "default";
    value?: string;
    onChange?: (e: React.ChangeEvent<HTMLInputElement>) => void;
    className?: string;
    disabled?: boolean;
    Label?: string; 
}

export const Input: FC<InputProps> = forwardRef<HTMLInputElement, InputProps>(({
    placeholder, 
    disabled = false,
    type,
    variant = "default", 
    value,
    className,
    onChange,
    Label = "",
    ...rest
}, ref) => {
    const baseStyles = 'text-xl bg-gray-200 w-[400px] font-regular py-3 px-10';

    const inputClasses = clsx(
        baseStyles,
        {
            "rounded-2xl border-4  border-white-default/40 bg-white-background outline-none": variant=== "auth", 
        },
        disabled && 'opacity-50 cursor-not-allowed'
    );

    return (
        <div className="flex flex-col gap-1">
        {Label && <label className="text-lg font-normal">{Label}</label>}
        <input
            type={type}
            placeholder={placeholder}
            className={`${inputClasses} ${className}`}
            value={value}
            onChange={onChange}
            disabled={disabled}
            ref={ref} 
            {...rest} 
        />
        </div>
    );
});

Input.displayName = 'Input'; 
