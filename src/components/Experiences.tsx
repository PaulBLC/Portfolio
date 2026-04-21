import Title from "./Title"
import SpotlightCard from "./SpotlightCard"
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
import { ExternalLink } from "lucide-react";

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
        <section id="Experiences" className="py-12 md:py-16 border-t border-white/[0.06]">
            <Title title={t('experiences.title')} />

            <div className="flex flex-col-reverse md:flex-row justify-center items-start gap-8">

                {/* Left column — stack + certs */}
                <div className="flex flex-col gap-8 w-full md:w-1/2">

                    {/* Technical stack */}
                    <div>
                        <h3 className="text-xs font-mono text-[#5E6AD2] tracking-widest uppercase mb-5 text-center">
                            {t('experiences.technicalStack')}
                        </h3>
                        <div className="flex flex-wrap gap-4 justify-center items-center">
                            {dataSkills.map((skill) => (
                                <div key={skill.name} className="flex flex-col items-center gap-1.5 group">
                                    <div
                                        className="w-12 h-12 md:w-14 md:h-14 p-2 rounded-xl border border-white/[0.08] bg-white/[0.04] hover:border-[#5E6AD2]/40 hover:bg-[#5E6AD2]/10 transition-all duration-200 group-hover:scale-110"
                                    >
                                        <img
                                            src={skill.image}
                                            alt={skill.name}
                                            className="object-contain h-full w-full"
                                            loading="lazy"
                                        />
                                    </div>
                                    <span className="text-[10px] text-[#8A8F98] group-hover:text-[#EDEDEF] transition-colors duration-200">
                                        {skill.name}
                                    </span>
                                </div>
                            ))}
                        </div>
                    </div>

                    {/* Certifications */}
                    <div>
                        <h3 className="text-xs font-mono text-[#5E6AD2] tracking-widest uppercase mb-5 text-center">
                            {t('experiences.certifications')}
                        </h3>
                        <SpotlightCard className="p-5">
                            <div className="space-y-3">
                                {certificationLinks.map((link, i) => (
                                    <a
                                        key={i}
                                        href={link}
                                        target="_blank"
                                        rel="noopener noreferrer"
                                        className="flex items-start justify-between gap-3 group/cert py-2 border-b border-white/[0.05] last:border-0"
                                    >
                                        <div>
                                            <p className="text-sm text-[#EDEDEF] group-hover/cert:text-[#5E6AD2] transition-colors duration-200">
                                                {t(`experiences.certificationsList.${i}.name`)}
                                            </p>
                                            <p className="text-xs text-[#8A8F98] mt-0.5">
                                                {t(`experiences.certificationsList.${i}.issuer`)}
                                            </p>
                                        </div>
                                        <ExternalLink className="w-3.5 h-3.5 text-[#8A8F98] group-hover/cert:text-[#5E6AD2] flex-shrink-0 mt-0.5 transition-colors duration-200" />
                                    </a>
                                ))}
                            </div>
                        </SpotlightCard>
                    </div>
                </div>

                {/* Right column — experience cards */}
                <div className="w-full md:w-1/2 flex flex-col gap-4">
                    {experienceKeys.map(({ key, image }) => {
                        const descriptions = t(`experiences.${key}.description`, { returnObjects: true }) as string[];
                        return (
                            <SpotlightCard key={key} className="p-5">
                                {/* Header */}
                                <div className="flex items-center gap-3 mb-4">
                                    <div className="w-10 h-10 rounded-xl border border-white/10 bg-white/[0.04] flex items-center justify-center flex-shrink-0 p-1.5">
                                        <img
                                            src={image}
                                            alt={t(`experiences.${key}.company`)}
                                            className="object-contain w-full h-full"
                                            loading="lazy"
                                        />
                                    </div>
                                    <div className="flex-1 min-w-0">
                                        <h3 className="text-sm font-semibold text-[#5E6AD2] leading-snug">
                                            {t(`experiences.${key}.role`)}
                                        </h3>
                                        <p className="text-xs font-medium text-[#EDEDEF] mt-0.5">
                                            {t(`experiences.${key}.company`)}
                                        </p>
                                        <div className="flex items-center gap-2 mt-1">
                                            <span className="text-xs text-[#8A8F98]">
                                                {t(`experiences.${key}.period`)}
                                            </span>
                                            {t(`experiences.${key}.duration`, { defaultValue: '' }) && (
                                                <span className="inline-flex items-center px-2 py-0.5 rounded-full text-[10px] font-medium border border-[#5E6AD2]/30 bg-[#5E6AD2]/10 text-[#5E6AD2]">
                                                    {t(`experiences.${key}.duration`)}
                                                </span>
                                            )}
                                        </div>
                                    </div>
                                </div>

                                {/* Description */}
                                <ul className="space-y-1.5 pl-4 border-l border-white/[0.06]">
                                    {descriptions.map((desc, index) => {
                                        const resultMatch = desc.match(/(Résultat\s*:|Result:)/);
                                        if (resultMatch && resultMatch.index !== undefined) {
                                            const before = desc.substring(0, resultMatch.index).trim();
                                            const result = desc.substring(resultMatch.index);
                                            return (
                                                <li key={index} className="text-xs text-[#8A8F98] leading-relaxed">
                                                    {before}
                                                    <span className="block mt-1 text-[#5E6AD2] font-medium">
                                                        → {result}
                                                    </span>
                                                </li>
                                            );
                                        }
                                        return (
                                            <li key={index} className="text-xs text-[#8A8F98] leading-relaxed">
                                                {desc}
                                            </li>
                                        );
                                    })}
                                </ul>
                            </SpotlightCard>
                        );
                    })}
                </div>
            </div>
        </section>
    );
};

export default Experiences;
