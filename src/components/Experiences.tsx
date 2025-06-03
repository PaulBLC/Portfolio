import Title from "./Title"
import imgR from "../assets/techno/r.png";
import imgQLIK from "../assets/techno/qlik.png";
import imgPYHTON from "../assets/techno/python.png";
import imgPOWERBI from "../assets/techno/power_bi.png";
import imgEXCEL from "../assets/techno/excel.png";
import imgTABLEAU from "../assets/techno/tableau.svg";
import imgSQL from "../assets/techno/sql.png";
import imgN8N from "../assets/techno/n8n.png";
import imgALTERYX from "../assets/techno/alteryx.png";
import imgDATAIKU from "../assets/techno/dataiku.png";
import { useTranslation } from "react-i18next";

import isd from "../assets/companies/isd.png";
import seb from "../assets/companies/seb.png";
import freelance from "../assets/companies/freelance.png";

const dataSkills = [
    { id: 10, name: "R", image: imgR },
    { id: 12, name: "Python", image: imgPYHTON },
    { id: 18, name: "N8N", image: imgN8N },    
    { id: 17, name: "SQL", image: imgSQL },
    { id: 15, name: "Excel & VBA", image: imgEXCEL },
    { id: 11, name: "Qlik", image: imgQLIK },    
    { id: 13, name: "PowerBI", image: imgPOWERBI },    
    { id: 16, name: "Tableau", image: imgTABLEAU },        
    { id: 19, name: "Alteryx", image: imgALTERYX },
    { id: 20, name: "Dataiku", image: imgDATAIKU },
];

const certifications = [
    { 
        id: 1, 
        name: "Google Analytics Certification", 
        link: "https://skillshop.credential.net/8db51b59-9acb-45d2-bf81-b2a28d674a9a#acc.72KoMPUc",
        issuer: "Google Skillshop"
    },
    { 
        id: 2, 
        name: "Data Analyst in Power BI", 
        link: "https://www.datacamp.com/completed/statement-of-accomplishment/track/df246f096a051d0d6b69fcfdfa769c71785deb92",
        issuer: "DataCamp"
    },
    { 
        id: 3, 
        name: "Twitch Gameplan Certification", 
        link: "https://learningconsole.amazonadvertising.com/student/award/qWdm6ebF4JQzhgA2VaqrTAeq",
        issuer: "Amazon"
    },
    { 
        id: 4, 
        name: "Amazon DSP Campaigns Certification", 
        link: "https://learningconsole.amazonadvertising.com/student/award/Cg4ZccDZci1btYbNksCeoNqc",
        issuer: "Amazon"
    },
    { 
        id: 5, 
        name: "Alteryx Designer Core Certification", 
        link: "https://www.credly.com/badges/f0990b35-c96b-443d-964d-7e2aeb40ce93/public_url",
        issuer: "Alteryx"
    },
    { 
        id: 6, 
        name: "Amazon Ads Fundamentals Certification", 
        link: "https://learningconsole.amazonadvertising.com/student/award/KZPP8kmJLc464pr56BUD33R8",
        issuer: "Amazon"
    }
];

const experiences = [
    {
        id: 1,
        key: "freelance",
        image: freelance,
    },
    {
        id: 2,
        key: "seb",
        image: seb,
    },
    {
        id: 3,
        key: "isd",
        image: isd,
    },
];

const Experiences = () => {
    const { t } = useTranslation();

    return (
        <div id="Experiences">
            <Title title={t('experiences.title')} />
            <div className="flex flex-col-reverse md:flex-row justify-center items-center gap-8">
                <div className="flex flex-col gap-8 justify-center items-center w-full md:w-1/2 px-4 md:px-0">
                    <div className="w-full">
                        <h3 className="text-xl font-bold text-accent mb-4 text-center">{t('experiences.technicalStack')}</h3>
                        <div className="flex flex-wrap gap-5 justify-center items-center">
                            {dataSkills.map((skill) => (
                                <div key={skill.id} className="flex justify-center items-center flex-col group">
                                    <div className="w-16 h-16 md:w-20 md:h-20 p-2 rounded-full border-2 border-accent transition-all duration-300 hover:scale-110 hover:shadow-lg hover:shadow-accent/50">
                                        <img src={skill.image} alt={skill.name}
                                            className="object-cover rounded-full h-full w-full"
                                        />
                                    </div>
                                    <span className="mt-2 text-sm group-hover:text-accent transition-colors">{skill.name}</span>
                                </div>
                            ))}
                        </div>
                    </div>

                    <div className="w-full">
                        <h3 className="text-xl font-bold text-accent mb-4 text-center">{t('experiences.certifications')}</h3>
                        <div className="bg-base-200 p-5 rounded-xl shadow-lg w-full max-w-[500px] mx-auto">
                            <div className="space-y-3">
                                {certifications.map((cert) => (
                                    <div key={cert.id} className="flex flex-col">
                                        <a 
                                            href={cert.link} 
                                            target="_blank" 
                                            rel="noopener noreferrer"
                                            className="text-primary hover:text-accent transition-colors break-words"
                                        >
                                            {cert.name}
                                        </a>
                                        <span className="text-sm text-base-content/70">
                                            {cert.issuer}
                                        </span>
                                    </div>
                                ))}
                            </div>
                        </div>
                    </div>
                </div>

                <div className="w-full md:w-1/2 px-4 md:px-0 flex flex-col space-y-4">
                    {experiences.map((experience) => (
                        <div
                            key={experience.id}
                            className="flex flex-col bg-base-200 p-5 rounded-xl shadow-lg transition-all duration-300 hover:shadow-xl hover:shadow-accent/20 hover:-translate-y-1"
                        >
                            <div className="flex items-center">
                                <img
                                    src={experience.image}
                                    alt={t(`experiences.${experience.key}.company`)}
                                    className="object-cover w-10"
                                />
                                <div className="ml-4">
                                    <h1 className="text-xl text-accent font-bold">
                                        {t(`experiences.${experience.key}.role`)} , {t(`experiences.${experience.key}.company`)}
                                    </h1>
                                    <span className="text-sm">{t(`experiences.${experience.key}.period`)}</span>
                                </div>
                            </div>
                            <ul className="list-disc ml-16 mt-2">
                                {(t(`experiences.${experience.key}.description`, { returnObjects: true }) as string[]).map((desc: string, index: number) => (
                                    <li key={index} className={`break-words ${desc.includes('→') ? 'list-none -ml-4' : ''}`}>
                                        {desc}
                                    </li>
                                ))}
                            </ul>
                        </div>
                    ))}
                </div>
            </div>
        </div>
    )
}

export default Experiences