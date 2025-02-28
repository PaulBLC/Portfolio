import Title from "./Title"
import img from '../assets/img2.jpg'
import { Brain, Users, Target } from "lucide-react";

const aboutSections = [
    {
        id: 1,
        title: "Esprit d'initiative",
        description: "Curieux et organisé, je sais prendre des initiatives et mener des projets de façon autonome.",
        icon: <Brain className="text-accent scale-150" />,
    },
    {
        id: 2,
        title: "Bon communicant",
        description: "Capable de coordonner les relations avec les prestataires et partenaires en mode Agile/Scrum.",
        icon: <Users className="text-accent scale-150" />,
    },
    {
        id: 3,
        title: "Rigoureux & Pédagogue",
        description: "Méthodique dans l'analyse des données et capable de transmettre des connaissances techniques de façon claire.",
        icon: <Target className="text-accent scale-150" />,
    },
];

const About = () => {
    return (
        <div className="bg-base-300 p-10 mb-10 md:mb-32" id="About">
            <Title title="À propos" />
            <div className="md:h-[600px] flex justify-center items-center">
                <div className="hidden md:block">
                    <img src={img} alt="" className="w-96 object-cover rounded-xl"
                    />
                </div>

                <div className="md:ml-4 space-y-4">
                    {aboutSections.map((section) => (
                        <div key={section.id}
                            className="flex flex-col md:flex-row items-center bg-base-100 p-5 rounded-xl md:w-96 shadow-xl"
                        >
                            <div className="mb-2 md:mb-0">
                                {section.icon}
                            </div>
                            <div className="md:ml-4 text-center md:text-left">
                                <h2 className="text-xl font-bold mb-1">
                                    {section.title}
                                </h2>
                                <p className="text-sm">
                                    {section.description}
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