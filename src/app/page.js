import Image from "next/image";
import loginImg from "@/app/assets/Illustration.svg";
import formImg from "@/app/assets/authentication.jpg";
import FormAside from "./ui/page";

export default function Home() {
  return (
    <div
      className="hero min-h-screen"
      style={{ backgroundImage: `url(${formImg?.src})` }}
    >
      <div
        className={`max-md:p-0 hero-content justify-between xl:min-w-[calc(80vw)] flex-col-reverse lg:flex-row drop-shadow-2xl shadow-black`}>
        <div className="text-center lg:text-left flex-1">
          <Image priority src={loginImg} alt="login form backgroundImage" />
        </div>
        <div className="card max-md:rounded-none flex-1 max-xl:w-full bg-base-100">
          <FormAside />
        </div>
      </div>
    </div>
  );
}
