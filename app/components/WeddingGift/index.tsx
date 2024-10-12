import patangkerapa from "@/public/patangkerapa.webp";
import Image from "next/image";
import bca from "@/public/bca.png";
import mandiri from "@/public/mandiri.png";
import { FiGift } from "react-icons/fi";
import { RiFileCopyLine } from "react-icons/ri";

const WeddingGift: React.FC = () => {
  const copyText = (text: string) => {
    navigator.clipboard
      .writeText(text)
      .then(() => {
        alert("Copied to clipboard!");
      })
      .catch((err) => {
        console.error("Failed to copy: ", err);
        alert("Failed to copy text");
      });
  };

  return (
    <div className="relative w-full h-full  flex justify-center p-5">
      <div className="w-full max-w-[540px] flex flex-col items-center text-[11px]">
        <Image src={patangkerapa} alt="patangkerapa" className="w-[68px]" />
        <div className="bg-bg-brown-gradient border border-white w-full flex flex-col items-center text-center text-white font-poppins gap-4 py-5 overflow-y-scroll weddinggift">
          <h1 className="font-caramel text-[46px] leading-none">
            Wedding Gift
          </h1>
          <p className=" text-[11px]">
            Tanpa Mengurangi rasa hormat,
            <br />
            Bagi Bapak/Ibu/Saudara/i yang ingin mengirimkan hadiah <br />
            pernikahan dapat melalui :
          </p>
          <div className="w-full flex flex-col items-center gap-1">
            <Image src={bca} alt="bca" className="w-[80px]" />
            <p>
              No Rekening 5211098598
              <br />
              a.n Evelyn Tumbo
            </p>
            <button
              onClick={() => copyText("5211098598")}
              className="p-1 border border-white rounded-full flex items-center gap-1 shadow-xl shadow-transparent hover:scale-105 hover:shadow-[#e58fac79] transition-all duration-500"
            >
              <RiFileCopyLine /> Copy Nomor Rekening
            </button>
          </div>
          <div className="w-full flex flex-col items-center gap-1">
            <Image src={mandiri} alt="mandiri" className="w-[100px]" />
            <p>
              No Rekening 1240010363886
              <br />
              a.n Benhard Sampeupa
            </p>
            <button
              onClick={() => copyText("1240010363886")}
              className="p-1 border border-white rounded-full flex items-center gap-1 shadow-xl shadow-transparent hover:scale-105 hover:shadow-[#e58fac79] transition-all duration-500"
            >
              <RiFileCopyLine /> Copy Nomor Rekening
            </button>
          </div>
          <div className="w-full flex flex-col items-center gap-1">
            <h2 className="font-caramel text-[46px] leading-none">
              Kirim Kado
            </h2>
            <FiGift className="text-4xl text-center" />
            <h3 className="font-bold">Evelyn & Benhard</h3>
            <p>
              Pondok ungu permai sektor 5 blok O 21 no 2, RT.008/RW.027
              <br />
              Kel.bahagia, kec.babelan. Bekasi utara
            </p>
            <button
              onClick={() =>
                copyText(
                  "Pondok ungu permai sektor 5 blok O 21 no 2, RT.008/RW.027, Kel.bahagia, kec.babelan. Bekasi utara"
                )
              }
              className="p-1 border border-white rounded-full flex items-center gap-1 shadow-xl shadow-transparent hover:scale-105 hover:shadow-[#e58fac79] transition-all duration-500"
            >
              <RiFileCopyLine /> Copy Alamat
            </button>

            <p className="font-poppins text-lg italic mt-3 font-semibold">Thank You For Your Gift!</p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default WeddingGift;
