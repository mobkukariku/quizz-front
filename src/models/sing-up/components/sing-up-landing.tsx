"use client"
import { Container } from "@/components"
import { FC } from "react"
import Link from "next/link"
import { SignUpForm } from "./sign-up-form"
import SIGNUPIMAGE from "../assets/sign_up_image.svg"
import Image from 'next/image'

export const SignUpLanding: FC = () => {
    return (
        <Container >
            <div className="flex flex-col justify-center items-center h-screen">
                {/* Левая часть с изображением */}
                <div className="flex items-center justify-around w-full ">
                    <div className="max-md:hidden">
                        <Image src={SIGNUPIMAGE} alt="MainLanding" width={500} height={500} />
                    </div>
                    {/* Правая часть с формой */}
                    <div>
                        <SignUpForm />
                    </div>
                </div>
            <div className="text-center text-2xl mt-4 text-white-hover underline hover:text-white-hover/65 cursor-pointer">
                <Link href="/">На главную страницу</Link>
            </div>
            </div>
        </Container>
    )
}
