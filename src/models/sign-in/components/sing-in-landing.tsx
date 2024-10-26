"use client"
import { Container } from "@/components"
import { FC } from "react"
import { SignInForm } from "./sign-in-form"
import Image from 'next/image'
import SIGNINIMAGE from "../assets/sign_in_image.svg"
import Link from "next/link"

export const SingInLanding: FC = () => {
    return (
        <Container >
            <div className="flex flex-col justify-center items-center h-screen">
                
                
                {/* Левая часть с изображением */}
                <div className="flex items-center justify-around w-full ">
                    <div className="max-md:hidden">
                        <Image src={SIGNINIMAGE} alt="MainLanding" width={600} height={600} />
                    </div>
                    {/* Правая часть с формой */}
                    <div>
                        <SignInForm />
                    </div>
                </div>
            <div className="text-center text-2xl mt-4 text-white-hover underline hover:text-white-hover/65 cursor-pointer">
                <Link href="/">На главную страницу</Link>
            </div>
            </div>
        </Container>
    )
}
