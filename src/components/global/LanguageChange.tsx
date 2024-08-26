"use client";

import * as React from "react";
import { useLocale } from "next-intl";
import { useRouter } from "next/navigation";
import Image from "next/image";
import {
  Select,
  SelectContent,
  SelectGroup,
  SelectItem,
  SelectLabel,
  SelectTrigger,
  SelectValue,
} from "@/components/ui/select";

export function LanguageChange() {
  const locale = useLocale();
  const router = useRouter();
  const [selectedLanguage, setSelectedLanguage] = React.useState(locale);

  const handleLanguageChange = (lng: string) => {
    setSelectedLanguage(lng);
    router.replace(`/${lng}`);
  };

  const getFlagImage = (lng: string) => `/flags/${lng}.png`;

  return (
    <Select onValueChange={handleLanguageChange}>
      <SelectTrigger className="w-[180px] flex items-center bg-black text-white border-0">
        <Image
          src={getFlagImage(selectedLanguage)}
          alt={selectedLanguage}
          width={24}
          height={16}
          className="mr-2"
        />
        <SelectValue placeholder={selectedLanguage.toUpperCase()} />
      </SelectTrigger>
      <SelectContent>
        <SelectGroup>
          <SelectLabel>Language</SelectLabel>
          <SelectItem value="en" className="flex items-center">
            <Image
              src={getFlagImage("en")}
              alt="English"
              width={24}
              height={16}
              className="mr-2"
            />
            English
          </SelectItem>
          <SelectItem value="am" className="flex items-center">
            <Image
              src={getFlagImage("am")}
              alt="Amharic"
              width={24}
              height={16}
              className="mr-2"
            />
            አማረኛ
          </SelectItem>
          <SelectItem value="om" className="flex items-center">
            <Image
              src={getFlagImage("om")}
              alt="Oromo"
              width={24}
              height={16}
              className="mr-2"
            />
            Oromiffa
          </SelectItem>
        </SelectGroup>
      </SelectContent>
    </Select>
  );
}

export default LanguageChange;
