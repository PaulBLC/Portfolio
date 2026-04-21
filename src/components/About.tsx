import Title from "./Title"
import SpotlightCard from "./SpotlightCard"
import img from '../assets/img2.webp'
import { Brain, Users, Target } from "lucide-react";
import imgSTID from "../assets/companies/stid.png";
import imgSID from "../assets/companies/sid.png";
import imgINSEEC from "../assets/companies/inseec.jpeg";
import { useTranslation } from "react-i18next";
import { ReactNode } from "react";

const skillIcons: Record<string, ReactNode> = {
    initiative: <Brain className="w-4 h-4 text-[#5E6AD2]" />,
    communication: <Users className="w-4 h-4 text-[#5E6AD2]" />,
    rigorous: <Target className="w-4 h-4 text-[#5E6AD2]" />,
};

const formationImages = [imgINSEEC, imgSID, imgSTID];
const skillKeys = ["initiative", "communication", "rigorous"] as const;

const About = () => {
    const { t } = useTranslation();

    return (
        <section
            id="About"
            className="relative py-14 md:py-20 border-t border-white/[0.06]"
        >
            {/* Subtle section separator glow */}
            <div className="absolute top-0 left-1/2 -translate-x-1/2 w-96 h-px bg-gradient-to-r from-transparent via-[#5E6AD2]/30 to-transparent" />

            <div className="px-5 md:px-[10%]">
                <Title title={t('about.title')} />

                <div className="flex flex-col md:flex-row justify-center items-start gap-8">

                    {/* Formations */}
                    <div className="w-full md:w-1/3 flex flex-col gap-3">
                        {formationImages.map((image, i) => (
                            <SpotlightCard key={i} className="p-4">
                                <div className="flex items-center gap-3">
                                    <div className="w-10 h-10 rounded-xl border border-white/10 bg-white/[0.04] flex items-center justify-center flex-shrink-0 p-1.5">
                                        <img
                                            src={image}
                                            alt={t(`about.formations.${i}.ecole`)}
                                            className="object-contain w-full h-full"
                                            loading="lazy"
                                        />
                                    </div>
                                    <div>
                                        <h3 className="text-sm font-semibold text-[#EDEDEF] leading-snug">
                                            {t(`about.formations.${i}.diplome`)}
                                        </h3>
                                        <p className="text-xs text-[#5E6AD2] mt-0.5">
                                            {t(`about.formations.${i}.ecole`)}
                                        </p>
                                        <p className="text-xs text-[#8A8F98] mt-0.5">
                                            {t(`about.formations.${i}.periode`)}
                                        </p>
                                    </div>
                                </div>
                            </SpotlightCard>
                        ))}
                    </div>

                    {/* Photo */}
                    <div className="w-full md:w-1/3 flex justify-center">
                        <div className="relative group">
                            <div className="absolute inset-0 rounded-2xl bg-[#5E6AD2]/15 blur-xl scale-105 opacity-0 group-hover:opacity-100 transition-opacity duration-500" />
                            <img
                                src={img}
                                alt="Paul Blanc"
                                className="relative w-72 object-cover rounded-2xl transition-transform duration-300 group-hover:scale-[1.01]"
                                loading="lazy"
                                style={{
                                    boxShadow: '0 0 0 1px rgba(255,255,255,0.06), 0 8px 40px rgba(0,0,0,0.5)',
                                }}
                            />
                        </div>
                    </div>

                    {/* Skills */}
                    <div className="w-full md:w-1/3 flex flex-col gap-3">
                        {skillKeys.map((key) => (
                            <SpotlightCard key={key} className="p-4">
                                <div className="flex items-start gap-3">
                                    <div className="w-8 h-8 rounded-lg border border-white/10 bg-[#5E6AD2]/10 flex items-center justify-center flex-shrink-0">
                                        {skillIcons[key]}
                                    </div>
                                    <div>
                                        <h3 className="text-sm font-semibold text-[#EDEDEF]">
                                            {t(`about.skills.${key}.title`)}
                                        </h3>
                                        <p className="text-xs text-[#8A8F98] mt-1 leading-relaxed">
                                            {t(`about.skills.${key}.description`)}
                                        </p>
                                    </div>
                                </div>
                            </SpotlightCard>
                        ))}
                    </div>
                </div>
            </div>
        </section>
    );
};

export default About;
