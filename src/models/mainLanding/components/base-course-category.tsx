import { Container } from "@/components"
import { FC } from "react"
import { BaseCourseItem } from "./course-item"

export const BaseCourseCategory: FC = () => {
    return (
        <Container className="mt-20">
            <div >
                <p className="text-5xl font-extrabold mb-10 max-sm:text-4xl max-sm:text-center ">Начни сейчас</p>
               <div className="flex gap-10 flex-row flex-wrap justify-center">
                <BaseCourseItem />
                <BaseCourseItem />
                <BaseCourseItem />
               </div>
            </div>
        </Container>
    )
}