"use client"
import { createContext, useContext, useState, ReactNode } from "react";

type BoxShadowContextType = {
  xOffset: number;
  setXOffset: (v: number) => void;
  yOffset: number;
  setYOffset: (v: number) => void;
  blur: number;
  setBlur: (v: number) => void;
  shadowColor: string;
  setShadowColor: (v: string) => void;
  boxShadow: string;
  copied: boolean;
  handleCopy: () => Promise<void>; 
};

const BoxShadowContext = createContext<BoxShadowContextType | undefined>(undefined);

export const BoxShadowProvider = ({ children }: { children: ReactNode }) => {
  const [xOffset, setXOffset] = useState(7);
  const [yOffset, setYOffset] = useState(7);
  const [blur, setBlur] = useState(10);
  const [shadowColor, setShadowColor] = useState("#000000");
  const [copied, setCopied] = useState(false);

  const boxShadow = `${xOffset}px ${yOffset}px ${blur}px ${shadowColor}`;

  const handleCopy = async () => {
    try {
      await navigator.clipboard.writeText(`box-shadow: ${boxShadow}`);
      setCopied(true);
      setTimeout(() => setCopied(false), 1500); // 1.5秒後にメッセージを消す
    } catch (err) {
      console.error("Error:", err);
    }
  };

  return (
    <BoxShadowContext.Provider value={{
      xOffset, setXOffset,
      yOffset, setYOffset,
      blur, setBlur,
      shadowColor, setShadowColor,
      boxShadow,
      copied,
      handleCopy,
    }}>
      {children}
    </BoxShadowContext.Provider>
  );
};

export const useBoxShadow = () => {
  const context = useContext(BoxShadowContext);
  if (!context) throw new Error("useBoxShadow must be used within a BoxShadowProvider");
  return context;
};
