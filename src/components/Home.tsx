import { Mail, Linkedin } from "lucide-react"
import img from '../assets/img.webp'
import { useTranslation } from "react-i18next"

const Home = () => {
    const { t } = useTranslation();

    return (
        <div id="Home" className="relative">
            <div className="flex flex-col-reverse md:flex-row justify-center items-center py-10 md:py-16 gap-10 md:gap-16">

                {/* Text content */}
                <div className="flex flex-col items-center md:items-start flex-1 animate-fade-up">
                    {/* Status badge */}
                    <div className="inline-flex items-center gap-2 px-3 py-1 mb-6 rounded-full border border-[#5E6AD2]/30 bg-[#5E6AD2]/10">
                        <div className="w-1.5 h-1.5 rounded-full bg-[#5E6AD2] animate-pulse" />
                        <span className="text-xs font-mono text-[#5E6AD2] tracking-widest uppercase">
                            Portfolio
                        </span>
                    </div>

                    <h1 className="text-5xl md:text-6xl lg:text-7xl font-semibold tracking-tight text-center md:text-left leading-[1.1]">
                        <span className="text-gradient-headline">{t('home.greeting')}{" "}</span>
                        <br className="hidden md:block" />
                        <span className="text-gradient-accent">{t('home.name')}</span>
                    </h1>

                    <div className="mt-6 mb-8 text-center md:text-left space-y-2 max-w-lg">
                        {(t('home.description') as string).split('\n').map((line, i) => (
                            <p key={i} className="text-base md:text-lg text-[#8A8F98] leading-relaxed">
                                {line}
                            </p>
                        ))}
                    </div>

                    <div className="flex gap-3 justify-center md:justify-start">
                        <a
                            href="#Contact"
                            className="inline-flex items-center gap-2 px-5 py-2.5 rounded-lg text-sm font-medium text-white transition-all duration-200 active:scale-[0.98]"
                            style={{
                                background: '#5E6AD2',
                                boxShadow: '0 0 0 1px rgba(94,106,210,0.5), 0 4px 12px rgba(94,106,210,0.3), inset 0 1px 0 rgba(255,255,255,0.2)',
                            }}
                            onMouseEnter={(e) => (e.currentTarget.style.background = '#6872D9')}
                            onMouseLeave={(e) => (e.currentTarget.style.background = '#5E6AD2')}
                        >
                            <Mail className="w-4 h-4" />
                            {t('home.contact')}
                        </a>

                        <a
                            href="https://linkedin.com/in/paul-blanc-lyon"
                            target="_blank"
                            rel="noopener noreferrer"
                            className="inline-flex items-center gap-2 px-5 py-2.5 rounded-lg text-sm font-medium text-[#EDEDEF] transition-all duration-200 active:scale-[0.98]"
                            style={{
                                background: 'rgba(255,255,255,0.05)',
                                boxShadow: '0 0 0 1px rgba(255,255,255,0.06), inset 0 1px 0 rgba(255,255,255,0.08)',
                            }}
                            onMouseEnter={(e) => (e.currentTarget.style.background = 'rgba(255,255,255,0.08)')}
                            onMouseLeave={(e) => (e.currentTarget.style.background = 'rgba(255,255,255,0.05)')}
                        >
                            <Linkedin className="w-4 h-4" />
                            LinkedIn
                        </a>
                    </div>
                </div>

                {/* Profile image */}
                <div className="flex-shrink-0">
                    <div className="relative group">
                        {/* Ambient glow */}
                        <div className="absolute inset-0 rounded-2xl bg-[#5E6AD2]/20 blur-2xl scale-110 opacity-0 group-hover:opacity-100 transition-opacity duration-500" />
                        <img
                            src={img}
                            alt="Paul Blanc"
                            className="relative w-[260px] h-[300px] md:w-[320px] md:h-[360px] object-cover rounded-2xl transition-transform duration-300 group-hover:scale-[1.02]"
                            style={{
                                boxShadow: '0 0 0 1px rgba(255,255,255,0.06), 0 8px 40px rgba(0,0,0,0.5), 0 0 80px rgba(94,106,210,0.08)',
                            }}
                        />
                    </div>
                </div>
            </div>
        </div>
    );
};

export default Home;
