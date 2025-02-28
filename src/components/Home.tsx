import { Mail } from "lucide-react"
import img from '../assets/img.jpg'
import ThemeSelector from "./ThemeSelector"

const Home = () => {
    return (
        <div id="Home" className="relative">
            <div className="absolute top-0 right-0">
                <ThemeSelector />
            </div>
            <div className="flex flex-col-reverse md:flex-row justify-center items-center md:my-32 my-10">
                <div className="flex flex-col ">
                    <h1 className="text-5xl md:text-6xl font-bold text-center md:text-left mt-4 md:mt-0">
                        Bonjour , <br /> je suis {" "}
                        <span className="text-accent">Paul</span>
                    </h1>

                    <p className="my-4 text-md text-center md:text-left">
                        Je suis Data Analyst spécialisé dans le développement <br />
                        d'applications décisionnelles et la gestion de projets data. <br />
                        J'aime mettre mes compétences techniques pour répondre à des problématiques business. <br />
                        Diplômé de l'INSEEC Lyon en Data Analytics & Marketing Management. <br />
                        Je suis également interressé par le développement d'applications fullstack.
                    </p>
                    <a href="#Contact" className="btn btn-accent md:w-fit">
                        <Mail className="w-5 h-5" />
                        Contactez-moi
                    </a>
                </div>

                <div className="md:ml-60">
                    <img src={img} alt="" className="w-96 h-96 object-cover border-8 border-accent shadow-xl" 
                    style={{
                        borderRadius : "30% 70% 70% 30% / 67% 62% 38% 33%"
                    }}
                    />
                </div>
            </div>
        </div>
    )
}

export default Home