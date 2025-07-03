"use client"
import { useTranslation } from 'react-i18next';
import ImageDropPreview from "../ImageDropPreview"

type Props = {
    handleBtn: React.MouseEventHandler,
    designBtn: boolean,
}

export default function Btn( { handleBtn, designBtn }: Props) {
    const { t } = useTranslation('common');
    return (
        <>
        {designBtn? 
        <div className="relative">
            <ImageDropPreview />
            <button
            onClick={handleBtn}
            className="absolute top-0 right-5 bg-black/50 p-2 text-white"
            >
                {t("done")}
            </button>
        </div>
        :
        <div 
        onClick={handleBtn}
        className="grid content-center bg-white/50 m-4 text-white"
        >
            <button>{t("design")}</button>
        </div> 
    
}
        </>
  )
}
