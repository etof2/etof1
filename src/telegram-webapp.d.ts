// src/telegram-webapp.d.ts
declare const WebApp: {
  initDataUnsafe: {
    user?: {
      id: number;
      first_name: string;
      last_name?: string;
      username?: string;
      language_code: string;
      is_premium?: boolean;
    };
  };
};
