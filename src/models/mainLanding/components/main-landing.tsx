import { FC } from "react";
import MainSVGLanding from "../assets/main_landing_image_1.svg";
import Image from 'next/image'
import { Container } from "@/components/";
import { Button, Input } from "@/ui";
export const MainLanding: FC = () => {

    return (
        <main>
            <Container>
                <div className="flex flex-row  flex-wrap items-center gap-10 mt-32">
                    <div className=" flex flex-1 flex-col max-lg:items-center gap-6">
                        <i className="text-5xl font-light max-sm:text-3xl max-lg:text-center "><span className="font-bold" >Учись и закрепляй знания легко — </span>путь к новым достижениям начинается здесь!</i>
                        <Input className="w-full rounded-full" type="text" placeholder="Блаблабла" variant={"default"} />
                        <Button className="w-fit"  type="primary" >Начать</Button>
                    </div>
                    <div>
                        <Image src={MainSVGLanding} alt="MainLanding" width={700} height={700} />
                    </div>
                </div>
            </Container>
        </main>
    );
}