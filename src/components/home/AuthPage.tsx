import React from "react";
import HeroSection from "./HeroSection";
import MasonryGrid from "./comp/MasonryGrid";
import { useTranslations } from "next-intl";
import Today from "./comp/Today";
import Features from "./Features";
import Join from "./Join";

interface AuthPageProps {
  onStart: () => void;
}

const AuthPage: React.FC<AuthPageProps> = ({ onStart }) => {
  const t = useTranslations("auth");

  return (
    <div>
      <div className="flex flex-col max-w-8xl">
        <HeroSection />
      </div>
      <div className="mb-20 mt-12">
        <div className="max-w-6xl mx-auto px-4">
          <div className="flex flex-col gap-10 mt-10">
            <p className="text-3xl md:text-5xl tracking-tight mt-4 mb-8 font-semibold text-center text-pink-500 drop-shadow-lg">
              {t("text1")}
            </p>
            <Today />
          </div>
          <div className="flex flex-col gap-10 mt-10">
            <div className="mt-24">
              <p className="text-2xl md:text-5xl text-center tracking-tighter font-bold text-pink-500 drop-shadow-lg mb-4">
                {t("text2")}
              </p>
              <MasonryGrid />
              <Join />
            </div>
          </div>
          <Features />
        </div>
      </div>
      <div className="flex justify-center mt-10">
        <button
          onClick={onStart}
          className="px-6 py-3 text-lg font-bold text-white bg-blue-500 rounded hover:bg-blue-600"
        >
          Start
        </button>
      </div>
    </div>
  );
};

export default AuthPage;
