import { ChartNetwork } from "lucide-react"
import imgREACT from "../assets/techno/react.png"
import imgTAILWIND from "../assets/techno/tailwind.png"
import imgTYPE from "../assets/techno/typescript.svg"
import imgVITE from "../assets/techno/vite.png"
import imgHOSTINGER from "../assets/techno/hostinger.png"
import { useTranslation } from "react-i18next"

const techs = [
    { name: "React", image: imgREACT },
    { name: "TypeScript", image: imgTYPE },
    { name: "Tailwind CSS", image: imgTAILWIND },
    { name: "Vite", image: imgVITE },
];

const Footer = () => {
    const { t } = useTranslation();

    return (
        <footer
            className="relative border-t border-white/[0.06] py-8 px-5"
            style={{ background: '#020203' }}
        >
            <div className="absolute top-0 left-1/2 -translate-x-1/2 w-64 h-px bg-gradient-to-r from-transparent via-[#5E6AD2]/20 to-transparent" />

            <div className="flex flex-col items-center gap-6">
                {/* Logo */}
                <a href="#" className="flex items-center gap-2 group">
                    <div className="w-6 h-6 rounded-lg bg-[#5E6AD2]/20 border border-[#5E6AD2]/30 flex items-center justify-center group-hover:bg-[#5E6AD2]/30 transition-all duration-200">
                        <ChartNetwork className="w-3.5 h-3.5 text-[#5E6AD2]" />
                    </div>
                    <span className="text-sm font-semibold tracking-tight">
                        <span className="text-[#5E6AD2]">PAUL</span>
                        <span className="text-[#EDEDEF]">BLANC</span>
                    </span>
                </a>

                {/* Tech stack + hosting */}
                <div className="flex items-center gap-8">
                    <div className="flex flex-col items-center gap-2">
                        <p className="text-xs text-[#8A8F98]/70">{t('footer.developedWith')}</p>
                        <div className="flex items-center gap-3">
                            {techs.map((tech) => (
                                <div key={tech.name} title={tech.name}>
                                    <img
                                        src={tech.image}
                                        alt={tech.name}
                                        className="w-5 h-5 object-contain opacity-50 hover:opacity-100 transition-opacity duration-200"
                                        loading="lazy"
                                    />
                                </div>
                            ))}
                        </div>
                    </div>

                    <div className="w-px h-8 bg-white/[0.06]" />

                    <div className="flex flex-col items-center gap-2">
                        <p className="text-xs text-[#8A8F98]/70">{t('footer.hostedOn')}</p>
                        <div title="Hostinger">
                            <img
                                src={imgHOSTINGER}
                                alt="Hostinger"
                                className="w-5 h-5 object-contain opacity-50 hover:opacity-100 transition-opacity duration-200"
                                loading="lazy"
                            />
                        </div>
                    </div>
                </div>

                {/* Copyright */}
                <p className="text-xs text-[#8A8F98]/50">
                    {t('footer.copyright', { year: new Date().getFullYear() })}
                </p>
            </div>
        </footer>
    );
};

export default Footer;
