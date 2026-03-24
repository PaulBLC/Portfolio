import { Mail, Linkedin } from "lucide-react"
import img from '../assets/img.webp'
import { useTranslation } from "react-i18next"

const Home = () => {
    const { t } = useTranslation();

    return (
        <div id="Home" className="relative">
            <div className="flex flex-col-reverse md:flex-row justify-center items-center md:my-32 my-10">
                <div className="flex flex-col">
                    <h1 className="text-5xl md:text-6xl font-bold text-center md:text-left mt-4 md:mt-0">
                        {t('home.greeting')}{" "}
                        <span className="text-accent">{t('home.name')}</span>
                    </h1>

                    <div className="my-4 text-md text-center md:text-left space-y-2">
                        {(t('home.description') as string).split('\n').map((line, i) => (
                            <p key={i}>{line}</p>
                        ))}
                    </div>
                    <div className="flex gap-4 justify-center md:justify-start">
                        <a href="#Contact" className="btn btn-accent md:w-fit">
                            <Mail className="w-5 h-5" />
                            {t('home.contact')}
                        </a>
                        <a 
                            href="https://linkedin.com/in/paul-blanc-lyon" 
                            target="_blank" 
                            rel="noopener noreferrer"
                            className="btn btn-accent md:w-fit"
                        >
                            <Linkedin className="w-5 h-5" />
                        </a>
                    </div>
                </div>

                <div className="md:ml-60">
                    <img 
                        src={img} 
                        alt="Paul Blanc" 
                        className="w-[500px] h-[350px] md:w-[550px] md:h-[400px] object-cover border-8 border-accent shadow-xl transition-all duration-300 hover:scale-105 hover:shadow-2xl" 
                        style={{
                            borderRadius: "30% 70% 70% 30% / 67% 62% 38% 33%"
                        }}
                    />
                </div>
            </div>
        </div>
    )
}

export default Home