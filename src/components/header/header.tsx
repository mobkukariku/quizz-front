"use client"
import { FC, useState } from "react";
import { Container } from "..";
import { Button } from "@/ui";
import Link from "next/link";
import { IoMenu } from "react-icons/io5";
import { MobileMenu } from "./mobile-menu";
import Cookies from "js-cookie";

export const Header: FC = () =>{

    const [isMenuOpen, setIsMenuOpen] = useState(false);


    const toggleMenu = () => {
        setIsMenuOpen(!isMenuOpen);
    }
    const logOut = () => {
        Cookies.remove("accessToken");
        Cookies.remove("refreshToken");
        window.location.reload();
    }

    return (
        <header>
        <Container className={`flex flex-row justify-between mt-6`}>
            <div>
                <p className="text-5xl font-extrabold max-md:text-4xl max-sm:text-3xl">QUIZZ</p>
            </div>
            <div className="flex gap-6 items-center">
                {/* Для мобильной версии отображаем триточие */}
                <div className="md:hidden" onClick={toggleMenu}>
                    <div className="text-3xl"><IoMenu size={40} color="#5FAAB1" /></div>
                </div>

                {/* Для больших экранов отображаем кнопки */}
                {!Cookies.get("accessToken") ? (
                    <div className="hidden md:flex gap-6">
                        <Link href="/sign-in">
                            <Button type="primary">Войти</Button>
                        </Link>
                        <Link href="/sign-up">
                            <Button type="secondary">Регистрация</Button>
                        </Link>
                    </div>
                    )
                    :
                    (
                        <div className="hidden md:flex gap-6">
                            <Link href="/profile">
                                <Button type="primary">Профиль</Button>
                            </Link>
                            <Button type="secondary" onCLick={logOut}>Выйти</Button>
                        </div>
                    )
                }
            </div>
        </Container>

        {/* Меню для мобильных устройств */}
        <MobileMenu isOpen={isMenuOpen} toggleMenu={toggleMenu} />
    </header>
    )
}