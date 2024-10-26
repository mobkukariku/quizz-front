import { FC } from "react"
import Image from 'next/image'
import JSEx from "../assets/jsexample.png"

export const BaseCourseItem: FC = () => {
    return (
        <div className="bg-white-componentBg/40 rounded-2xl flex flex-col justify-center items-center gap-5 w-fit p-10 ">
            <Image src={JSEx} alt="MainLanding" />
            <div className="text-center  w-[300px]">
                <p className="text-2xl font-bold">JavaScript for beginners</p>
                <span className="mt-3 text-lg font-regular line-clamp-2">
                    Lorem ipsum dolor sit amet consectetur adipisicing elit. Atque facere ipsa totam ea provident deserunt minima sunt cupiditate. Consequatur, error obcaecati? Porro vero dicta hic laboriosam modi suscipit enim cum.
                </span>
            </div>
        </div>
    )
}
