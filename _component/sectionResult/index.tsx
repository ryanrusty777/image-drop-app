
import { useBoxShadow } from "@/context/ShadowContext";
import styles from "./index.module.css"
import { useImageDrop } from '@/context/ImageDropContext';



export default function Result() {
    const {
      bg,
      GradientTop,
      GradientBottom,
      isGradient,
      imageSrc
      } = useImageDrop();

      const { boxShadow } = useBoxShadow();

  return(

        <div className={styles.sectionResult}>

          <div 
          className={styles.resultItem}
          style={isGradient === "gradient" ?
            {backgroundImage: `linear-gradient(to bottom, ${GradientTop}, ${GradientBottom} )`}
            :
            {backgroundColor: bg,} 
          }
          >
            <div 
            className="w-full h-full p-4 flex items-center"
            >
              
                {imageSrc && 
                <img 
                src={imageSrc} 
                alt="uploaded image" 
                style={{ boxShadow: boxShadow }}
                />}
              
            </div>
          </div>
      </div>
    
    )
}

