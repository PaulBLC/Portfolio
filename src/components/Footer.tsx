import { ChartNetwork } from "lucide-react"
import imgREACT from "../assets/techno/react.png"
import imgTAILWIND from "../assets/techno/tailwind.png"
import imgTYPE from "../assets/techno/typescript.svg"
import imgVITE from "../assets/techno/vite.png"
import imgHOSTINGER from "../assets/techno/hostinger.png"

const techs = [
    { name: "React", image: imgREACT },
    { name: "TypeScript", image: imgTYPE },
    { name: "Tailwind CSS", image: imgTAILWIND },
    { name: "Vite", image: imgVITE }
];

const Footer = () => {
    return (
        <footer className="footer footer-center p-10">
            <aside className="space-y-4">
                <ChartNetwork className="w-10 h-10" />
                <p className="font-bold">
                    <span className="text-accent">PAUL</span>
                    BLANC
                </p>
                <div className="space-y-2">
                    <div className="flex gap-8 justify-center items-center">
                        <div className="space-y-2">
                            <p className="text-sm opacity-75">Développé avec :</p>
                            <div className="flex gap-4 justify-center items-center">
                                {techs.map((tech) => (
                                    <div key={tech.name} className="tooltip" data-tip={tech.name}>
                                        <img 
                                            src={tech.image} 
                                            alt={tech.name}
                                            className="w-8 h-8 object-contain hover:scale-110 transition-transform"
                                        />
                                    </div>
                                ))}
                            </div>
                        </div>
                        <div className="space-y-2">
                            <p className="text-sm opacity-75">Hébergé sous :</p>
                            <div className="flex justify-center items-center">
                                <div className="tooltip" data-tip="Hostinger">
                                    <img 
                                        src={imgHOSTINGER} 
                                        alt="Hostinger"
                                        className="w-8 h-8 object-contain hover:scale-110 transition-transform"
                                    />
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
                <p>Copyright © {new Date().getFullYear()} - Tous droits réservés</p>
            </aside>
        </footer>
    )
}

export default Footer