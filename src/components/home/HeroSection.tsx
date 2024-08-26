import Image from "next/image";

import { useTranslations } from "next-intl";
import AuthButton from "./comp/AuthButton";

const HeroSection = () => {
  const t = useTranslations("hero");

  return (
    <div className="relative flex h-[93vh] w-full">
      {/* Background Image with Overlay */}
      <div className="absolute inset-0 z-0">
        <Image
          src={"/hero0.jpg"}
          alt="Hero Background"
          fill
          className="object-cover opacity-70 pointer-events-none select-none h-full"
          priority
        />
        <div className="absolute inset-0 bg-black bg-opacity-50"></div>
      </div>

      <div className="relative flex-1 flex flex-col justify-center items-center z-10">
        <div className="container text-center px-6 md:px-12">
          <h1 className="text-5xl md:text-7xl font-extrabold text-transparent bg-clip-text bg-gradient-to-r from-pink-400 to-pink-600 drop-shadow-lg mb-4">
            {t("title")}
          </h1>
          <p className="text-xl md:text-2xl mb-10 font-medium text-pink-100 opacity-90 leading-relaxed drop-shadow-md">
            {t("subtitle")}
          </p>
          <div className="">
            <AuthButton />
          </div>
        </div>
      </div>
    </div>
  );
};

export default HeroSection;
