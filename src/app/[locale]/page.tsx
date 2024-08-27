"use client";

import { useState, useEffect } from "react";
import AuthPage from "@/components/home/AuthPage";
import HomePage from "@/components/home/HomePage";

interface UserData {
  id: number;
  first_name: string;
  last_name?: string;
  username?: string;
  language_code: string;
  is_premium?: boolean;
}

export default async function Home() {
  const [userData, setUserData] = useState<UserData | null>(null);

  useEffect(() => {
    if (WebApp.initDataUnsafe.user) {
      setUserData(WebApp.initDataUnsafe.user as UserData);
    }
  });

  return <main className="">{userData ? <HomePage /> : <AuthPage />}</main>;
}
