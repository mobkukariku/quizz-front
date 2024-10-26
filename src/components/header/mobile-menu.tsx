import { FC } from "react";
import { Button } from "@/ui";
import Link from "next/link";
import { motion } from "framer-motion";

interface MobileMenuProps {
    isOpen: boolean;
    toggleMenu: () => void;
}

export const MobileMenu: FC<MobileMenuProps> = ({ isOpen, toggleMenu }) => {
    return (
        <motion.div
            initial={{ opacity: 0, y: -10 }} // Начальное состояние
            animate={{ opacity: isOpen ? 1 : 0, y: isOpen ? 0 : -10 }} // Анимация
            exit={{ opacity: 0, y: -10 }} // Состояние выхода
            transition={{ duration: 0.3 }} // Длительность анимации
            className="flex flex-col right-1 absolute z-50 w-full  bg-white-componentBg text-right p-4 gap-4 mt-4 md:hidden"
            style={{ display: isOpen ? 'flex' : 'none' }} // Скрыть div, если меню закрыто
        >
            <Link href="/sign-in">
                <Button type="none" className="w-full" onCLick={toggleMenu}>Войти</Button>
            </Link>
            <Link href="/sign-up">
                <Button type="none" className="w-full" onCLick={toggleMenu}>Регистрация</Button>
            </Link>
        </motion.div>
    );
};
