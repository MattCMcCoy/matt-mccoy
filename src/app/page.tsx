import { Landing } from "./(home)/landing";
import { Experience } from "./(home)/experience";

export default async function Home() {
  return (
    <main className="animated-background flex min-h-screen flex-col items-center justify-center bg-gradient-to-r from-[#15162c] via-[#15162c] to-[#140f19] font-titillium text-white">
      <div className="flex h-[100vh] w-full flex-col items-center justify-center">
        <Landing />
      </div>
      <div className="flex h-[100vh] w-full flex-col bg-[#15162c] pt-40">
        <Experience />
      </div>
    </main>
  );
}
