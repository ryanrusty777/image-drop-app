"use client"

import { useTranslation } from 'react-i18next';
import { useBoxShadow } from '@/context/ShadowContext';

export default function ShadowPreview() {
    const { t } = useTranslation('common');
      const {
        xOffset, setXOffset,
        yOffset, setYOffset,
        blur, setBlur,
        shadowColor, setShadowColor,
        boxShadow,
        copied,
        handleCopy,
      } = useBoxShadow();

    return(
        <div className='grid justify-center'>
          <div>
            <div>
                <label>
                  {t("xOffset")}:
                  <input
                    type="range"
                    min={-20}
                    max={20}
                    value={xOffset}
                    onChange={(e) => setXOffset(Number(e.target.value))}
                  />
                  <span> {xOffset}px</span>
                </label>
              </div>

                <div>
                  <label>
                    {t("yOffset")}:
                    <input
                      type="range"
                      min={-20}
                      max={20}
                      value={yOffset}
                      onChange={(e) => setYOffset(Number(e.target.value))}
                    />
                    <span> {yOffset}px</span>
                  </label>
                </div>

                
          </div>

          <div>
                  <label>
                  {t("blurRadius")}:
                    <input
                      type="range"
                      min={0}
                      max={25}
                      value={blur}
                      onChange={(e) => setBlur(Number(e.target.value))}
                    />
                    <span> {blur}px</span>
                  </label>
          </div>

          <div>
                  <label>
                    {t("shadowColor")}:
                    <input
                      name="Shadow Color"
                      type="text"
                      className='w-18'
                      value={shadowColor}
                      onChange={(e) => setShadowColor(e.target.value)}
                    />
                    <input
                      name="Shadow Color"
                      type="color"
                      value={shadowColor}
                      onChange={(e) => setShadowColor(e.target.value)}
                    />
                  </label>
                
          </div>

                <div className='bg-gray-100 text-black m-5 p-3'>
                    <div>
                    <p><strong>CSS:</strong></p>
                    <code>
                      box-shadow: {boxShadow};
                    </code>
                  </div>
                  
                  <button 
                  onClick={handleCopy}
                  className='cursor-pointer'
                  >
                    {copied ? t("copied") : t("copyCss")}
                  </button>
                </div>

          </div>
    )
}