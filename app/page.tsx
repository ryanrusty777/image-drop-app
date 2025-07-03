"use client"
import ImageDropPreview from "@/_component/ImageDropPreview";
import LanguageSelection from "@/_component/LanguageSelection";
import Result from "@/_component/sectionResult";
import { ImageDropProvider } from "@/context/ImageDropContext";
import { BoxShadowProvider } from "@/context/ShadowContext";
import useIsMobile from "@/_component/useIsMobile";
import { useState } from "react";
import Btn from "@/_component/Btn";
import styles from "./page.module.css";



export default function Home() {
  const isMobile = useIsMobile(768);
  const [designBtn, setDesignBtn] = useState(false);
  const handleBtn = () => {
    setDesignBtn( (prev) => !prev );
  }

  return (
    <ImageDropProvider>
      <BoxShadowProvider>

          <div className={styles.container}>
            <LanguageSelection/>
            <div className={designBtn? styles.mobile : styles.desktop}>
              <Result/>
            </div>
            
            { isMobile? 
            <Btn
            handleBtn={handleBtn}
            designBtn={designBtn}
            />
            :
            <ImageDropPreview/>
            }
            
          </div>


      </BoxShadowProvider>
    </ImageDropProvider>
    
  );
}
