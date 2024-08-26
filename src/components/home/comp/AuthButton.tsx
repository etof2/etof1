import LanguageChange from "@/components/global/LanguageChange";
import { Button } from "@/components/ui/button";
import React from "react";
import { useTranslations } from "next-intl";
import {
  RegisterLink,
  LoginLink,
} from "@kinde-oss/kinde-auth-nextjs/components";

const AuthButton = () => {
  const t = useTranslations("button0");

  return (
    <div className="flex flex-col flex-1 md:flex-row gap-5 justify-center items-center">
      <Button className="w-52 text-xl group">
        <LoginLink className="text-gray-500 group-hover:text-black">
          {t("sign-in")}
        </LoginLink>
      </Button>
      <Button className="w-52 bg-pink-400 text-xl group">
        <RegisterLink className=" group-hover:text-black">
          {t("sign-up")}
        </RegisterLink>
      </Button>
      <LanguageChange />
    </div>
  );
};

export default AuthButton;
