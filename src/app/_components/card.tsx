import Image from "next/image";
import Symbotic from "../assets/symbotic.png";
import SymboticBG from "../assets/symbotic-bg.jpeg";
import HighRes from "../assets/highres.jpeg";
import HighResBG from "../assets/highres-bg.jpg";
export function ExperienceCard() {
  return (
    <>
      <div className="group relative flex h-[50vw] w-full items-center justify-center rounded-xl bg-cover bg-left transition-all md:h-[300px] lg:w-[49%]">
        <Image
          className="h-full w-full rounded-xl transition-all ease-in-out"
          src={SymboticBG}
          alt=""
        />
        <div className="absolute z-10 h-full w-full rounded-xl bg-black opacity-40 transition-all ease-in-out group-hover:opacity-80" />
        <Image
          className="absolute z-30 h-[30%] transition-all ease-in-out group-hover:h-[20%] group-hover:w-[50%] group-hover:-translate-y-12 md:h-[100px]"
          src={Symbotic}
          alt=""
        />
        <div className="absolute z-30 flex flex-col items-center text-3xl opacity-0 transition-all ease-in-out group-hover:translate-y-12 group-hover:opacity-100">
          <h1 className="font-titillium font-light">
            Test Automation Engineer Co-op
          </h1>
          <h3 className="mt-3 font-titillium text-base font-light">
            Jul. 2023 - Dec. 2023
          </h3>
        </div>
      </div>
      <div className="group relative flex h-[50vw] w-full items-center justify-center rounded-xl bg-cover bg-left transition-all md:h-[300px] lg:w-[49%]">
        <Image
          className="h-full w-full rounded-xl transition-all ease-in-out"
          src={HighResBG}
          alt=""
        />
        <div className="absolute z-10 h-full w-full rounded-xl bg-black opacity-40 transition-all ease-in-out group-hover:opacity-80" />
        <Image
          className="absolute z-30 h-[30%] transition-all ease-in-out group-hover:h-[25%] group-hover:w-[50%] group-hover:-translate-y-12 md:h-[100px]"
          src={HighRes}
          alt=""
        />
        <div className="absolute z-30 flex flex-col items-center text-3xl opacity-0 transition-all ease-in-out group-hover:translate-y-12 group-hover:opacity-100">
          <h1 className="font-titillium font-light">Software Engineer Co-op</h1>
          <h3 className="mt-3 font-titillium text-base font-light">
            Jul. 2022 - Dec. 2022
          </h3>
        </div>
      </div>
    </>
  );
}
