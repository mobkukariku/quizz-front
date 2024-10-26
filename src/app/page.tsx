import { Header } from "@/components/header/header";
import { BaseCourseCategory } from "@/models/mainLanding/components/base-course-category";
import { MainLanding } from "@/models/mainLanding/components/main-landing";

export default function Home() {
  return (
    <div>
      <Header />
      <MainLanding />
      <BaseCourseCategory />
    </div>
  );
}
