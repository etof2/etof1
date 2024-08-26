import {
  RegisterLink,
  LoginLink,
} from "@kinde-oss/kinde-auth-nextjs/components";
import { useTranslations } from "next-intl";
import { Button } from "@/components/ui/button";

const Join = () => {
  const t = useTranslations("button0");

  return (
    <div className="flex flex-col gap-5 items-center justify-center mt-20">
      {/* text */}
      <div>
        <h1 className="text-xl md:text-3xl text-pink-500">{t("text")}</h1>
      </div>
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
      </div>
    </div>
  );
};

export default Join;
