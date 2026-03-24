import Title from "./Title"
import img from '../assets/img2.webp'
import { Brain, Users, Target } from "lucide-react";
import imgSTID from "../assets/companies/stid.png";
import imgSID from "../assets/companies/sid.png";
import imgINSEEC from "../assets/companies/inseec.jpeg";
import { useTranslation } from "react-i18next";
import { ReactNode } from "react";

const skillIcons: Record<string, ReactNode> = {
    initiative: <Brain className="text-accent scale-150" />,
    communication: <Users className="text-accent scale-150" />,
    rigorous: <Target className="text-accent scale-150" />,
};

const formationImages = [imgINSEEC, imgSID, imgSTID];
const skillKeys = ["initiative", "communication", "rigorous"] as const;

const About = () => {
    const { t } = useTranslation();

    return (
        <div className="bg-base-300 p-10 mb-10 md:mb-32" id="About">
            <Title title={t('about.title')} />
            <div className="flex flex-col md:flex-row justify-center items-center gap-8">
                <div className="w-full md:w-1/3 flex flex-col space-y-4">
                    {formationImages.map((image, i) => (
                        <div
                            key={i}
                            className="flex flex-col bg-base-100 p-5 rounded-xl shadow-lg transition-all duration-300 hover:shadow-xl hover:shadow-accent/20 hover:-translate-y-1"
                        >
                            <div className="flex items-center">
                                <img
                                    src={image}
                                    alt={t(`about.formations.${i}.ecole`)}
                                    className="object-cover w-10"
                                    loading="lazy"
                                />
                                <div className="ml-4">
                                    <h1 className="text-xl text-accent font-bold">
                                        {t(`about.formations.${i}.diplome`)} , {t(`about.formations.${i}.ecole`)}
                                    </h1>
                                    <span className="text-sm">{t(`about.formations.${i}.periode`)}</span>
                                </div>
                            </div>
                        </div>
                    ))}
                </div>

                <div className="w-full md:w-1/3 flex justify-center">
                    <img 
                        src={img} 
                        alt="Paul Blanc" 
                        className="w-96 object-cover rounded-xl shadow-lg transition-all duration-300 hover:scale-105 hover:shadow-xl"
                        loading="lazy"
                    />
                </div>

                <div className="w-full md:w-1/3 flex flex-col space-y-4">
                    {skillKeys.map((key) => (
                        <div key={key}
                            className="flex flex-col md:flex-row items-center bg-base-100 p-5 rounded-xl shadow-xl"
                        >
                            <div className="mb-2 md:mb-0">
                                {skillIcons[key]}
                            </div>
                            <div className="md:ml-4 text-center md:text-left">
                                <h2 className="text-xl font-bold mb-1">
                                    {t(`about.skills.${key}.title`)}
                                </h2>
                                <p className="text-sm">
                                    {t(`about.skills.${key}.description`)}
                                </p>
                            </div>
                        </div>
                    ))}
                </div>
            </div>
        </div>
    )
}

export default About