"use client"
import { useTranslation } from 'react-i18next';
import React, { useState } from 'react'
import styles from "./index.module.css"

export default function LanguageSelection() {
    const { t } = useTranslation('common');
    const[isOpen, setIsOpen] = useState(false);
    const toggleNav = () =>{
        setIsOpen(!isOpen)
    }

    const LanguageItems = [         
  { name: t("english"), href:"/en" },
  { name: t("japanese"), href:"/ja" },
  { name: t("hungarian"), href:"/hu" },
  { name: t("german"), href:"/de" },

    ]
    
  return (
    <div
    onClick={toggleNav} 
    className={styles.languageSelection}>
        <p>{t("language")}<span>▼</span></p>
        {isOpen &&
        <ul className={styles.items}>
            {LanguageItems.map((item, index) => (
                <li key={index}>
                    <a href={item.href}>{item.name}</a>
            </li>
            ))};
            
        </ul>
        
        }
    </div>
  )
}

