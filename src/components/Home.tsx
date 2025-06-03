import { Mail, Linkedin } from "lucide-react"
import img from '../assets/img.jpg'
import { useTranslation } from "react-i18next"

const Home = () => {
    const { t } = useTranslation();

    return (
        <div id="Home" className="relative">
            <div className="flex flex-col-reverse md:flex-row justify-center items-center md:my-32 my-10">
                <div className="flex flex-col">
                    <h1 className="text-5xl md:text-6xl font-bold text-center md:text-left mt-4 md:mt-0">
                        {t('home.greeting')} <br /> je suis {" "}
                        <span className="text-accent">{t('home.name')}</span>
                    </h1>

                    <p className="my-4 text-md text-center md:text-left">
                        {t('home.description')} <br />
                        {t('home.description2')} <br />
                        {t('home.description3')} <br />
                        {t('home.description4')}
                    </p>
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
                        alt="" 
                        className="w-96 h-96 object-cover border-8 border-accent shadow-xl transition-all duration-300 hover:scale-105 hover:shadow-2xl" 
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