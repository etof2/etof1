"use client";

import { LogoutLink } from "@kinde-oss/kinde-auth-nextjs/components";
import React from "react";

const HomePage = () => {
  return (
    <div>
      <LogoutLink>log out</LogoutLink>
    </div>
  );
};

export default HomePage;
