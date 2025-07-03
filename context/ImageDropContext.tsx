import { createContext, useContext, ReactNode, useState, useRef } from "react";

interface ImageDropContextType {
  imageSrc: string | null;
  bg: string;
  GradientTop: string;
  GradientBottom: string;
  isGradient: string;
  handleDrop: (e: React.DragEvent) => void;
  handleChange: (e: React.ChangeEvent<HTMLInputElement>) => void;
   handleBg: (e: React.ChangeEvent<HTMLInputElement>) => void;
  handleGradientTop: (e: React.ChangeEvent<HTMLInputElement>) => void;
  handleGradientBottom: (e: React.ChangeEvent<HTMLInputElement>) => void;
  toggleGradient: (e: React.ChangeEvent<HTMLInputElement>) => void;
}

const ImageDropContext = createContext<ImageDropContextType | undefined>(undefined);

 export const ImageDropProvider = ({children}: {children: ReactNode}) => {

    const [imageSrc, setImageSrc] = useState<string>("/sunset.jpg");
    const [bg, setBg] = useState("#dddddd");
    const [GradientTop, setGradientTop] = useState("#ffffff");
    const [GradientBottom, setGradientBottom] = useState("#b8feff");
    const [isGradient, setIsGradient] = useState("gradient");
    
        const readSrc = (file: File) => {
          const reader = new FileReader;
          reader.onload = () => setImageSrc(reader.result as string);
          reader.readAsDataURL(file);  
        }

        const handleDrop = (e: React.DragEvent) => {
           e.preventDefault();
          const file = e.dataTransfer.files[0]
          if (file) readSrc(file);
        }

        const handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
         const file = e.target.files?.[0];
          if (file) readSrc(file); 
        }

  const handleBg = (e:React.ChangeEvent<HTMLInputElement>) => {
    setBg(e.target.value);
  } 
  const handleGradientTop = (e:React.ChangeEvent<HTMLInputElement>) => {
    setGradientTop(e.target.value);
  } 
  const handleGradientBottom = (e:React.ChangeEvent<HTMLInputElement>) => {
    setGradientBottom(e.target.value);
  } 

  
       const toggleGradient = (e:React.ChangeEvent<HTMLInputElement>) => {
         setIsGradient(e.target.value);
       }

  return (
    <ImageDropContext.Provider value = {{
      imageSrc,
      bg,
      GradientTop,
      GradientBottom,
      isGradient,
      handleDrop,
      handleChange,
      handleBg,
      handleGradientTop,
      handleGradientBottom,
      toggleGradient
    }}>
      {children}
    </ImageDropContext.Provider>
  )
}

export const useImageDrop = () =>{
    const context = useContext(ImageDropContext);
    if (!context) throw new Error("Error");
    return context;
} 