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
import imgDocker from "../assets/techno/docker.png";
import { useTranslation } from "react-i18next";

import isd from "../assets/companies/isd.png";
import seb from "../assets/companies/seb.png";
import freelance from "../assets/companies/freelance.png";

const dataSkills = [
    { name: "R", image: imgR },
    { name: "Python", image: imgPYHTON },
    { name: "N8N", image: imgN8N },    
    { name: "SQL", image: imgSQL },
    { name: "Excel & VBA", image: imgEXCEL },
    { name: "Qlik", image: imgQLIK },    
    { name: "PowerBI", image: imgPOWERBI },    
    { name: "Tableau", image: imgTABLEAU },        
    { name: "Alteryx", image: imgALTERYX },
    { name: "Dataiku", image: imgDATAIKU },
    { name: "Docker", image: imgDocker },
];

const certificationLinks = [
    "https://skillshop.credential.net/8db51b59-9acb-45d2-bf81-b2a28d674a9a#acc.72KoMPUc",
    "https://www.datacamp.com/completed/statement-of-accomplishment/track/df246f096a051d0d6b69fcfdfa769c71785deb92",
    "https://learningconsole.amazonadvertising.com/student/award/qWdm6ebF4JQzhgA2VaqrTAeq",
    "https://learningconsole.amazonadvertising.com/student/award/Cg4ZccDZci1btYbNksCeoNqc",
    "https://www.credly.com/badges/f0990b35-c96b-443d-964d-7e2aeb40ce93/public_url",
    "https://learningconsole.amazonadvertising.com/student/award/KZPP8kmJLc464pr56BUD33R8",
];

const experienceKeys = [
    { key: "freelance", image: freelance },
    { key: "seb", image: seb },
    { key: "isd", image: isd },
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
                                <div key={skill.name} className="flex justify-center items-center flex-col group">
                                    <div className="w-16 h-16 md:w-20 md:h-20 p-2 rounded-full border-2 border-accent transition-all duration-300 hover:scale-110 hover:shadow-lg hover:shadow-accent/50">
                                        <img src={skill.image} alt={skill.name}
                                            className="object-cover rounded-full h-full w-full"
                                            loading="lazy"
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
                                {certificationLinks.map((link, i) => (
                                    <div key={i} className="flex flex-col">
                                        <a 
                                            href={link} 
                                            target="_blank" 
                                            rel="noopener noreferrer"
                                            className="text-primary hover:text-accent transition-colors break-words"
                                        >
                                            {t(`experiences.certificationsList.${i}.name`)}
                                        </a>
                                        <span className="text-sm text-base-content/70">
                                            {t(`experiences.certificationsList.${i}.issuer`)}
                                        </span>
                                    </div>
                                ))}
                            </div>
                        </div>
                    </div>
                </div>

                <div className="w-full md:w-1/2 px-4 md:px-0 flex flex-col space-y-4">
                    {experienceKeys.map(({ key, image }) => {
                        const descriptions = t(`experiences.${key}.description`, { returnObjects: true }) as string[];
                        return (
                            <div
                                key={key}
                                className="flex flex-col bg-base-200 p-5 rounded-xl shadow-lg transition-all duration-300 hover:shadow-xl hover:shadow-accent/20 hover:-translate-y-1"
                            >
                                <div className="flex items-center">
                                    <img
                                        src={image}
                                        alt={t(`experiences.${key}.company`)}
                                        className="object-cover w-10"
                                        loading="lazy"
                                    />
                                    <div className="ml-4">
                                        <h1 className="text-lg text-accent font-bold">
                                            {t(`experiences.${key}.role`)}
                                        </h1>
                                        <p className="text-sm font-medium">{t(`experiences.${key}.company`)}</p>
                                        <div className="flex items-center gap-2 mt-0.5">
                                            <span className="text-xs opacity-70">{t(`experiences.${key}.period`)}</span>
                                            {t(`experiences.${key}.duration`, { defaultValue: '' }) && (
                                                <span className="badge badge-accent badge-xs">{t(`experiences.${key}.duration`)}</span>
                                            )}
                                        </div>
                                    </div>
                                </div>
                                <ul className="list-disc ml-16 mt-2 space-y-1.5">
                                    {descriptions.map((desc, index) => {
                                        const resultMatch = desc.match(/(Résultat\s*:|Result:)/);
                                        if (resultMatch && resultMatch.index !== undefined) {
                                            const before = desc.substring(0, resultMatch.index).trim();
                                            const result = desc.substring(resultMatch.index);
                                            return (
                                                <li key={index} className="break-words">
                                                    {before}
                                                    <div className="mt-1 text-accent font-semibold text-sm">
                                                        → {result}
                                                    </div>
                                                </li>
                                            );
                                        }
                                        return (
                                            <li key={index} className="break-words">{desc}</li>
                                        );
                                    })}
                                </ul>
                            </div>
                        );
                    })}
                </div>
            </div>
        </div>
    )
}

export default Experiences