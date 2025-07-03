"use client"
import React, { useRef } from 'react'
import { useImageDrop } from '@/context/ImageDropContext';
import ShadowPreview from '../ShadowPreview';
import { useTranslation } from 'react-i18next';
import styles from "./index.module.css"
import ClientLangWrapper from '@/app/ClientLangWrapper';

export default function ImageDropPreview() {

  const handleDragOver = (e: React.DragEvent) => {
  e.preventDefault();
};

  const fileInputRef = useRef<HTMLInputElement | null>(null)
  
  const handleClick = () => {
          fileInputRef.current?.click();
        }
       
  const {
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
  } = useImageDrop();
  
  const { t } = useTranslation("common");

  return (
      <ClientLangWrapper>
        <div className={styles.wrapper}>
            <div className={styles.imageBox}>
            {imageSrc?
            <div 
            onClick={handleClick}
            onDrag={handleDrop} 
            onDrop={handleDrop}
            onDragOver={handleDragOver}
            className='cursor-pointer'
            >

                <p>{t("selectImage")}  {t("or")} {t("dropImage")}</p>
                <input
                type='file'
                accept='.jpg, .png, .webp, .heic'
                onChange={handleChange}
                ref={fileInputRef}
                className="hidden"
                />
            </div>
        : 
        <input
            type='file'
            accept='.jpg, .png, .webp, .heic'
            onChange={handleChange}
            className="hidden"
            />
        }
          
            </div>
            <div>
                <label className='p-6'>
                  <input
                  type='radio'
                  value={"gradient"}
                  checked={isGradient === "gradient"}
                  onChange={toggleGradient}
                  />
                  {t("gradientColor")}
                </label>
                <label className='p-6'>
                  <input
                  type='radio'
                  value={"singleColor"}
                  checked={isGradient === "singleColor"}
                  onChange={toggleGradient}
                  />
                  {t("singleColor")}
                </label>
        </div>
        <div className='m-8 flex justify-around'>
          {isGradient === "gradient" ? 
         <>
         <label className='flex flex-col items-center'>
            <input 
            type='color'
            onChange={handleGradientTop}
            value={GradientTop}
            />
            {t("top")}
          </label>
          <label className='flex flex-col items-center'>
            <input 
            type='color'
            onChange={handleGradientBottom}
            value={GradientBottom}
            />
            {t("bottom")}
          </label>
         </>
        :
        <label className='flex flex-col items-center'>
              <input 
            type="color"
            onChange={handleBg}
            value={bg}
            />
            {t("backgroundColor")}
        </label>
        
        }
        </div>
        <ShadowPreview/>
        
        </div>
        
      </ClientLangWrapper>
        
  )
}

