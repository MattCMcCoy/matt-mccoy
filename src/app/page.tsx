import { Landing } from "./(home)/landing";
import { Experience } from "./(work)/experience";
import { Project } from "./(projects)/project";
import { Education } from "./(school)/education";

export default async function Home() {
  return (
    <div>
      <div className="flex h-screen flex-col items-center justify-center bg-gradient-to-r from-[#15162c] via-[#15162c] to-[#140f19]">
        <Landing />
      </div>
      <div className="flex h-fit flex-col items-center justify-center bg-gradient-to-r from-[#15162c] via-[#15162c] to-[#140f19] pb-20">
        <Experience />
      </div>
      <div className="flex h-fit flex-col items-center justify-center bg-gradient-to-r from-[#15162c] via-[#15162c] to-[#140f19] pb-20">
        <Project />
      </div>
      <div className="flex h-fit flex-col items-center justify-center bg-gradient-to-r from-[#15162c] via-[#15162c] to-[#140f19] pb-20">
        <Education />
      </div>
    </div>
  );
}
