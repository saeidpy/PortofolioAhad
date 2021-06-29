import React from 'react';
import { useTranslation } from 'react-i18next';
import  jsPDF  from "jspdf";
import MyResume  from "../assets/img/MyResume.pdf"

function ImageSection(props) {
    const {t} = useTranslation()

     const downloadGenerate=()=>{
         var doc =new jsPDF('landscape','px','a4','false');
         doc.loadFile(MyResume,'PDF',65,20,500,400) ;

    }

    return (
        <div className="ImageSection">
            <div className="img">
                <img src='/images/avatar.jpeg' />
            </div>
            <div className="about-info">
                <h4 >
                {t('aboutMeImageSection.tile')}
                    <span>
                    {t('aboutMeImageSection.span')}
                    </span>
                </h4>
                <p className="about-text">
                {t('aboutMeImageSection.main')}


                </p>
                <div className="about-details">
                    <div className="left-section">
                        <p>{t('aboutMeImageSection.nameTitle')}</p>
                        <p>{t('aboutMeImageSection.ageTitle')}</p>
                        <p>{t('aboutMeImageSection.nationalityTitle')}</p>
                        <p>{t('aboutMeImageSection.langTitle')}</p>
                        <p>{t('aboutMeImageSection.countryTitle')}</p>
                    </div>
                    <div className="right-section">
                        <p>{t("aboutMeImageSection.name")}</p>
                        <p>{t("aboutMeImageSection.age")}</p>
                        <p>{t("aboutMeImageSection.Nationality")}</p>
                        <p>{t("aboutMeImageSection.lang")}</p>
                        <p>{t("aboutMeImageSection.country")}</p>
                    </div>
                </div>
                <div className="btnContainer">
                <button onClick={downloadGenerate} className="btn">{t('aboutMeImageSection.btn')}
                </button>

                </div>
               
            </div>

        </div>
    );
}

export default ImageSection;