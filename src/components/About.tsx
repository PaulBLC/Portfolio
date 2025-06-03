import Title from "./Title"
import img from '../assets/img2.jpg'
import { Brain, Users, Target } from "lucide-react";
import imgSTID from "../assets/companies/stid.png";
import imgSID from "../assets/companies/sid.png";
import imgINSEEC from "../assets/companies/inseec.jpeg";
import { useTranslation } from "react-i18next";

const aboutSections = [
    {
        id: 1,
        key: "initiative",
        icon: <Brain className="text-accent scale-150" />,
    },
    {
        id: 2,
        key: "communication",
        icon: <Users className="text-accent scale-150" />,
    },
    {
        id: 3,
        key: "rigorous",
        icon: <Target className="text-accent scale-150" />,
    },
];

const formations = [
    {
        id: 1,
        diplome: "MSc Data Analytics & Marketing Management",
        ecole: "INSEEC Lyon",
        periode: "2022 - 2024",
        image: imgINSEEC,
    },
    {
        id: 2,
        diplome: "Licence Professionnelle Statistique et Informatique Décisionnelle",
        ecole: "Université Lyon 1",
        periode: "2020 - 2021",
        image: imgSID,
    },
    {
        id: 3,
        diplome: "DUT Statistique et Informatique Décisionnelle",
        ecole: "IUT Lyon 2",
        periode: "2018 - 2020",
        image: imgSTID,
    },
];

const About = () => {
    const { t } = useTranslation();

    return (
        <div className="bg-base-300 p-10 mb-10 md:mb-32" id="About">
            <Title title={t('about.title')} />
            <div className="flex flex-col md:flex-row justify-center items-center gap-8">
                {/* Section Formation */}
                <div className="w-full md:w-1/3 flex flex-col space-y-4">
                    {formations.map((formation) => (
                        <div
                            key={formation.id}
                            className="flex flex-col bg-base-100 p-5 rounded-xl shadow-lg transition-all duration-300 hover:shadow-xl hover:shadow-accent/20 hover:-translate-y-1"
                        >
                            <div className="flex items-center">
                                <img
                                    src={formation.image}
                                    alt={formation.ecole}
                                    className="object-cover w-10"
                                />
                                <div className="ml-4">
                                    <h1 className="text-xl text-accent font-bold">
                                        {formation.diplome} , {formation.ecole}
                                    </h1>
                                    <span className="text-sm">{formation.periode}</span>
                                </div>
                            </div>
                        </div>
                    ))}
                </div>

                {/* Photo centrale */}
                <div className="w-full md:w-1/3 flex justify-center">
                    <img 
                        src={img} 
                        alt="" 
                        className="w-96 object-cover rounded-xl shadow-lg transition-all duration-300 hover:scale-105 hover:shadow-xl" 
                    />
                </div>

                {/* Section Compétences */}
                <div className="w-full md:w-1/3 flex flex-col space-y-4">
                    {aboutSections.map((section) => (
                        <div key={section.id}
                            className="flex flex-col md:flex-row items-center bg-base-100 p-5 rounded-xl shadow-xl"
                        >
                            <div className="mb-2 md:mb-0">
                                {section.icon}
                            </div>
                            <div className="md:ml-4 text-center md:text-left">
                                <h2 className="text-xl font-bold mb-1">
                                    {t(`about.skills.${section.key}.title`)}
                                </h2>
                                <p className="text-sm">
                                    {t(`about.skills.${section.key}.description`)}
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