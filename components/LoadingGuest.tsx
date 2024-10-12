import Image from "next/image";
import logo from "@/public/logo.png";

const LoadingGuest: React.FC = () => (
  <div className="w-full h-screen bg-browny flex flex-col items-center text-center gap-5 pt-20">
    <Image 
      src={logo}
      alt="logo"
      className="animate-bounce duration-700 w-[50px] h-[50px]"
    />
    <p className="font-cinzel text-xl">Loading Invitation...</p>
  </div>
);

export default LoadingGuest;
