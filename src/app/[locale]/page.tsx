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

export default function Home() {
  const [userData, setUserData] = useState<UserData | null>(null);
  const [isStarted, setIsStarted] = useState(false);

  useEffect(() => {
    if (typeof window !== "undefined" && WebApp.initDataUnsafe?.user) {
      setUserData(WebApp.initDataUnsafe.user as UserData);
    }
  }, []);

  const handleStart = () => {
    setIsStarted(true);
  };

  return (
    <main>
      {userData || isStarted ? (
        <HomePage />
      ) : (
        <AuthPage onStart={handleStart} />
      )}
    </main>
  );
}
