import Title from "./Title"

import imgCSS from "../assets/techno/css.png";
import imgJS from "../assets/techno/js.png";
import imgREACT from "../assets/techno/react.png";
import imgHTML from "../assets/techno/html.png";
import imgNEXT from "../assets/techno/next-js.webp";
import imgNODE from "../assets/techno/node-js.png";
import imgTYPE from "../assets/techno/typescript.svg";
import imgTAILWIND from "../assets/techno/tailwind.png";
import imgR from "../assets/techno/r.png";
import imgQLIK from "../assets/techno/qlik.png";
import imgPYHTON from "../assets/techno/python.png";
import imgPOWERBI from "../assets/techno/power_bi.png";
import imgEXCEL from "../assets/techno/excel.png";
import imgTABLEAU from "../assets/techno/tableau.svg";
import imgSQL from "../assets/techno/sql.png";

import isd from "../assets/companies/isd.png";
import seb from "../assets/companies/seb.png";



const dataSkills = [
    { id: 10, name: "R", image: imgR },
    { id: 11, name: "Qlik", image: imgQLIK },
    { id: 12, name: "Python", image: imgPYHTON },
    { id: 13, name: "PowerBI", image: imgPOWERBI },
    { id: 15, name: "Excel & VBA", image: imgEXCEL },
    { id: 16, name: "Tableau", image: imgTABLEAU },
    { id: 17, name: "SQL", image: imgSQL },
];

const devSkills = [
    { id: 1, name: "HTML", image: imgHTML },
    { id: 2, name: "CSS", image: imgCSS },
    { id: 3, name: "JavaScript", image: imgJS },
    { id: 4, name: "React", image: imgREACT },
    { id: 5, name: "Node.js", image: imgNODE },
    { id: 6, name: "Tailwind CSS", image: imgTAILWIND },
    { id: 7, name: "TypeScript", image: imgTYPE },
    { id: 8, name: "Next.js", image: imgNEXT },
];


const experiences = [
    {
        id: 1,
        role: "Chef de projet E-commerce Junior",
        company: "Groupe SEB",
        period: "Sept 2023 - Aug 2024",
        description: [
            "Lead projet media intégrant des aspects techniques et business",
            "Suivi des campagnes Google Ads, Amazon, Meta",
            "Développement d'outil d'aide à la décision pour le top management",
            "Collaboration avec les équipes marchés internationales sur des problématiques Marketing/E-commerce/D2C"
        ],
        image: seb,
    },
    {
        id: 2,
        role: "Data Analyst / Développeur d'applications décisionnelles",
        company: "ISD",
        period: "Sept 2019 - Août 2023",
        description: [
            "Développement et personnalisation d'applications RShiny pour créer des modules statistiques à des fins commerciales et internes",
            "Mise en place de dashboards interactifs pour le reporting et l'analyse de données actuellement en service sur des sites clients",
            "Modernisation des bases de données et intégration d'outils Excel adaptés à des utilisateurs non techniques",
            "Automatisation des tâches analytiques internes",
            "Rédaction de documents fonctionnels (cahiers des charges, procédures)"
        ],
        image: isd,
    },
];



const Experiences = () => {
    return (
        <div id="Experiences">
            <Title title="Expériences" />
            <div className="flex flex-col-reverse md:flex-row justify-center items-center">
                <div className="flex flex-col gap-8 justify-center items-center md:w-1/2 mt-4 md:mt-0">
                    <div>
                        <h3 className="text-xl font-bold text-accent mb-4 text-center">Data Stack</h3>
                        <div className="flex flex-wrap gap-5 justify-center items-center">
                            {dataSkills.map((skill) => (
                                <div key={skill.id} className="flex justify-center items-center flex-col">
                                    <div className="w-24 h-24 p-2 rounded-full border-2 border-accent">
                                        <img src={skill.image} alt={skill.name}
                                            className="object-cover rounded-full h-full w-full"
                                        />
                                    </div>
                                    <span className="mt-2 text-sm">{skill.name}</span>
                                </div>
                            ))}
                        </div>
                    </div>
                    
                    <div>
                        <h3 className="text-xl font-bold text-accent mb-4 text-center">Development Stack</h3>
                        <div className="flex flex-wrap gap-5 justify-center items-center">
                            {devSkills.map((skill) => (
                                <div key={skill.id} className="flex justify-center items-center flex-col">
                                    <div className="w-24 h-24 p-2 rounded-full border-2 border-accent">
                                        <img src={skill.image} alt={skill.name}
                                            className="object-cover rounded-full h-full w-full"
                                        />
                                    </div>
                                    <span className="mt-2 text-sm">{skill.name}</span>
                                </div>
                            ))}
                        </div>
                    </div>
                </div>

                <div className="md:ml-4 flex flex-col space-y-4">
                    {experiences.map((experience) => (
                        <div
                            key={experience.id}
                            className="flex flex-col bg-base-200 p-5 rounded-xl shadow-lg"
                        >
                            <div className="flex items-center">
                                <img
                                    src={experience.image}
                                    alt={experience.company}
                                    className="object-cover w-10"
                                />
                                <div className="ml-4">
                                    <h1 className="text-xl text-accent font-bold">
                                        {experience.role} , {experience.company}
                                    </h1>
                                    <span className="text-sm">{experience.period}</span>
                                </div>
                            </div>
                            <ul className="list-disc ml-16 mt-2">
                                {experience.description.map((desc, index) => (
                                    <li key={index}>
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