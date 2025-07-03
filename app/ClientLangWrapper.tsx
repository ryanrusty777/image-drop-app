// app/ClientLangWrapper.tsx
"use client";

import { usePathname } from "next/navigation";
import { useEffect, useState } from "react";
import { useTranslation } from "react-i18next";
import '@/i18n/client-init';

export default function ClientLangWrapper({
  children,
}: {
  children: React.ReactNode;
}) {
  const pathname = usePathname();
  const { i18n } = useTranslation('common');
  const [currentLang, setCurrentLang] = useState("en");
  
    useEffect(() => {
      if (i18n.language !== currentLang) {
        i18n.changeLanguage(currentLang);
      }
      }, [currentLang, i18n]);

  

  useEffect(() => {
    const langFromPath = 
    pathname.startsWith("/ja") ? "ja" :
    pathname.startsWith("/de") ? "de" :
    pathname.startsWith("/hu") ? "hu" :
    "en";

    
  document.documentElement.lang = langFromPath;
    setCurrentLang(langFromPath);
  }, [pathname]);

  return <>{children}</>;
}
