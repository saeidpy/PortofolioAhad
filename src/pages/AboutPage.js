import React from 'react';
import Title from '../components/Title'
import ImageSection from '../components/ImageSection';
import SkillSection from '../components/SkillSection';
import { ProgressBar } from "react-step-progress-bar";
import { instituteData, skillData } from '../constant/meta';
import Certificates from '../components/Certificates';
import { useTranslation } from 'react-i18next';
import jsPDF from "jspdf";
import HTMCertificate from '../assets/img/HTMCertificate.pdf'
import JavaScriptCertificate from '../assets/img/JavaScriptCertificate.pdf'
import ReactCertificate from '../assets/img/ReactCertificate.pdf'




function AboutPage(id) {
    const { t } = useTranslation()

    const downloadGenerate = (id) => () => {
        console.log("🚀 ~ file: AboutPage.js ~ line 21 ~ downloadGenerate ~ id", id)
        if (id === "javaScript") {
            var doc = new jsPDF('landscape', 'px', 'a4', 'false');
            doc.loadFile(JavaScriptCertificate, 'PDF', 65, 20, 500, 400)
        } else if (id === "html") {
            var doc = new jsPDF('landscape', 'px', 'a4', 'false');
            doc.loadFile(HTMCertificate, 'PDF', 65, 20, 500, 400)

        } else {
            var doc = new jsPDF('landscape', 'px', 'a4', 'false');
            doc.loadFile(ReactCertificate, 'PDF', 65, 20, 500, 400)
        };

    }
    return (
        <div className="AboutPage" >
            <Title title={t('aboutMe.title')} subTitle={t('aboutMe.title')} />
            <ImageSection />

            <Title title={t('mySkills.title')} subTitle={t('mySkills.title')} />
            <div className="skillsContainer">
                {skillData.map((item) => {
                    return <SkillSection skill={item.name} percent={item.scale} label={item.label} />
                })}
            </div>
            <Title title={t('certifications.title')} subTitle={t('certifications.title')} />
            <div className="certificateContainer" >
                {instituteData.map((item) => {
                    return <Certificates onClick={downloadGenerate(item.id)} {...item} />
                })}

            </div>

        </div>
    );
}

export default AboutPage;