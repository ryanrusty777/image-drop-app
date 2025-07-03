"use client"
import React, { useRef } from 'react'
import { useImageDrop } from '@/context/ImageDropContext';
import ShadowPreview from '../ShadowPreview';
import { useTranslation } from 'react-i18next';
import styles from "./index.module.css"

export default function ImageDropPreview() {

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
      <>
        <div
        onDrag={handleDrop} 
        onDrop={handleDrop}
        className={styles.wrapper}
        >
            <div className={styles.imageBox}>
            {imageSrc?
            <div 
            onClick={handleClick}
            className='cursor-pointer'
            >

                <p>{t("changeImage")}</p>
                <input
                type='file'
                accept='.jpg, .png, .webp'
                onChange={handleChange}
                onDrag={handleDrop} 
                onDrop={handleDrop}
                ref={fileInputRef}
                className="hidden"
                />
            </div>
        : 
        <input
            type='file'
            accept='.jpg, .png, .webp'
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
        
      </>
        
  )
}

