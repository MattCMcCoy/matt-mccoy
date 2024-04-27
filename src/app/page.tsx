import { Landing } from './(home)/landing';
import { Project } from './(projects)/project';
import { Education } from './(school)/education';
import { Experience } from './(work)/experience';

export default async function Home() {
  return (
    <div className="bg-portfolio-jet-100 text-portfolio-white-500">
      <div className="flex h-screen flex-col items-center justify-center">
        <Landing />
      </div>
      <div className="flex h-fit flex-col items-center justify-center pb-20">
        <Experience />
      </div>
      <div className="flex h-fit flex-col items-center justify-center pb-20">
        <Project />
      </div>
      <div className="flex h-fit flex-col items-center justify-center  pb-20">
        <Education />
      </div>
    </div>
  );
}
