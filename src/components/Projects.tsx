import Title from "./Title";
import img4 from '../assets/projects/4.webp';
import img1 from '../assets/projects/1.webp';
import img5 from '../assets/projects/5.webp';
import img7 from '../assets/projects/7.webp';
import img2 from '../assets/projects/2.webp';
import { Github, Video, ChevronLeft, ChevronRight, ExternalLink, X } from "lucide-react";
import { useState, useCallback, useEffect } from "react";
import { useTranslation } from "react-i18next";
import useEmblaCarousel from "embla-carousel-react";
import Autoplay from "embla-carousel-autoplay";

const Projects = () => {
    const [isVideoOpen, setIsVideoOpen] = useState(false);
    const [currentVideo, setCurrentVideo] = useState('');
    const { t } = useTranslation();

    const [emblaRef, emblaApi] = useEmblaCarousel(
        { loop: true, align: "start", dragFree: false },
        [Autoplay({ delay: 4000, stopOnInteraction: true, stopOnMouseEnter: true })]
    );

    const [selectedIndex, setSelectedIndex] = useState(0);
    const [scrollSnaps, setScrollSnaps] = useState<number[]>([]);

    const scrollPrev = useCallback(() => emblaApi?.scrollPrev(), [emblaApi]);
    const scrollNext = useCallback(() => emblaApi?.scrollNext(), [emblaApi]);
    const scrollTo = useCallback((index: number) => emblaApi?.scrollTo(index), [emblaApi]);

    const onSelect = useCallback(() => {
        if (!emblaApi) return;
        setSelectedIndex(emblaApi.selectedScrollSnap());
    }, [emblaApi]);

    useEffect(() => {
        if (!emblaApi) return;
        setScrollSnaps(emblaApi.scrollSnapList());
        onSelect();
        emblaApi.on("select", onSelect);
        return () => { emblaApi.off("select", onSelect); };
    }, [emblaApi, onSelect]);

    const projects = [
        {
            id: 1,
            title: t('projects.list.0.title'),
            description: t('projects.list.0.description'),
            technologies: ['WordPress', 'PHP', 'MySQL', 'JavaScript'],
            image: img7,
            website: 'https://www.coachingconcours.com/',
            type: 'website',
        },
        {
            id: 2,
            title: t('projects.list.1.title'),
            description: t('projects.list.1.description'),
            technologies: ['Python', 'Shiny', 'GeoJSON', 'Docker'],
            image: img5,
            github: 'https://github.com/PaulBLC/train-supprimes',
            website: 'https://dashboard.paulblanc.fr/',
            type: 'github',
        },
        {
            id: 3,
            title: t('projects.list.2.title'),
            description: t('projects.list.2.description'),
            technologies: ['n8n', 'Google Cloud Platform', 'Apify'],
            videoPath: '/n8n_webscrapping.mp4',
            image: img4,
            type: 'demo',
        },
        {
            id: 4,
            title: t('projects.list.3.title'),
            description: t('projects.list.3.description'),
            technologies: ['React', 'Tailwind CSS', 'TypeScript'],
            image: img2,
            github: 'https://github.com/PaulBLC/Portfolio',
            type: 'github',
        },
        {
            id: 5,
            title: t('projects.list.4.title'),
            description: t('projects.list.4.description'),
            technologies: ['n8n', 'IA', 'RSS', 'Email'],
            image: img1,
            github: 'https://github.com/PaulBLC/n8n_SendMail_RSS',
            type: 'github',
        },
    ];

    const openVideo = (videoPath: string) => {
        setCurrentVideo(videoPath);
        setIsVideoOpen(true);
    };

    const renderLinks = (project: typeof projects[number]) => {
        return (
            <div
                className="flex mt-auto gap-2 pt-3"
                onPointerDownCapture={(e) => e.stopPropagation()}
            >
                {project.type === 'demo' && project.videoPath && (
                    <button
                        onClick={(e) => { e.preventDefault(); openVideo(project.videoPath!); }}
                        className="inline-flex items-center gap-1.5 flex-1 justify-center px-3 py-1.5 rounded-lg text-xs font-medium text-white transition-all duration-200 active:scale-[0.98]"
                        style={{
                            background: '#5E6AD2',
                            boxShadow: '0 0 0 1px rgba(94,106,210,0.4), 0 2px 8px rgba(94,106,210,0.25)',
                        }}
                        onMouseEnter={(e) => (e.currentTarget.style.background = '#6872D9')}
                        onMouseLeave={(e) => (e.currentTarget.style.background = '#5E6AD2')}
                    >
                        <Video className="w-3.5 h-3.5" />
                        {t('projects.demo')}
                    </button>
                )}
                {project.github && (
                    <a
                        href={project.github}
                        target="_blank"
                        rel="noopener noreferrer"
                        className="inline-flex items-center gap-1.5 flex-1 justify-center px-3 py-1.5 rounded-lg text-xs font-medium text-[#EDEDEF] transition-all duration-200 active:scale-[0.98]"
                        style={{
                            background: 'rgba(255,255,255,0.05)',
                            boxShadow: '0 0 0 1px rgba(255,255,255,0.06)',
                        }}
                        onMouseEnter={(e) => (e.currentTarget.style.background = 'rgba(255,255,255,0.08)')}
                        onMouseLeave={(e) => (e.currentTarget.style.background = 'rgba(255,255,255,0.05)')}
                    >
                        <Github className="w-3.5 h-3.5" />
                        GitHub
                    </a>
                )}
                {project.website && (
                    <a
                        href={project.website}
                        target="_blank"
                        rel="noopener noreferrer"
                        className="inline-flex items-center gap-1.5 flex-1 justify-center px-3 py-1.5 rounded-lg text-xs font-medium text-[#EDEDEF] transition-all duration-200 active:scale-[0.98]"
                        style={{
                            background: 'rgba(255,255,255,0.05)',
                            boxShadow: '0 0 0 1px rgba(255,255,255,0.06)',
                        }}
                        onMouseEnter={(e) => (e.currentTarget.style.background = 'rgba(255,255,255,0.08)')}
                        onMouseLeave={(e) => (e.currentTarget.style.background = 'rgba(255,255,255,0.05)')}
                    >
                        <ExternalLink className="w-3.5 h-3.5" />
                        {t('projects.website')}
                    </a>
                )}
            </div>
        );
    };

    return (
        <section id="Projects" className="py-12 md:py-16 border-t border-white/[0.06]">
            <Title title={t('projects.title')} />

            {/* Carousel */}
            <div className="overflow-hidden" ref={emblaRef}>
                <div className="flex -ml-4">
                    {projects.map((project) => (
                        <div
                            key={project.id}
                            className="flex-[0_0_100%] min-w-0 pl-4 md:flex-[0_0_33.333%]"
                        >
                            <div
                                className="rounded-2xl border border-white/[0.06] h-full flex flex-col overflow-hidden transition-all duration-300 hover:border-white/[0.10]"
                                style={{
                                    background: 'linear-gradient(to bottom, rgba(255,255,255,0.05), rgba(255,255,255,0.02))',
                                    boxShadow: '0 0 0 1px rgba(255,255,255,0.06), 0 2px 20px rgba(0,0,0,0.4)',
                                }}
                                onMouseEnter={(e) => {
                                    e.currentTarget.style.boxShadow =
                                        '0 0 0 1px rgba(255,255,255,0.10), 0 8px 40px rgba(0,0,0,0.5), 0 0 60px rgba(94,106,210,0.06)';
                                }}
                                onMouseLeave={(e) => {
                                    e.currentTarget.style.boxShadow =
                                        '0 0 0 1px rgba(255,255,255,0.06), 0 2px 20px rgba(0,0,0,0.4)';
                                }}
                            >
                                <img
                                    src={project.image}
                                    alt={project.title}
                                    className="w-full h-44 object-cover"
                                    loading="lazy"
                                />
                                {/* Top gradient edge over image */}
                                <div className="h-px w-full bg-gradient-to-r from-transparent via-[#5E6AD2]/20 to-transparent -mt-px" />

                                <div className="p-5 flex flex-col flex-1">
                                    <h3 className="font-semibold text-sm text-[#EDEDEF] leading-snug">
                                        {project.title}
                                    </h3>
                                    <p className="text-xs text-[#8A8F98] mt-2 line-clamp-3 leading-relaxed">
                                        {project.description}
                                    </p>
                                    <div className="flex flex-wrap gap-1.5 mt-3">
                                        {project.technologies.map((tech) => (
                                            <span
                                                key={tech}
                                                className="inline-flex items-center px-2 py-0.5 rounded-full text-[10px] font-medium border border-[#5E6AD2]/25 bg-[#5E6AD2]/10 text-[#5E6AD2]"
                                            >
                                                {tech}
                                            </span>
                                        ))}
                                    </div>
                                    {renderLinks(project)}
                                </div>
                            </div>
                        </div>
                    ))}
                </div>
            </div>

            {/* Navigation */}
            <div className="flex items-center justify-center gap-4 mt-8">
                <button
                    onClick={scrollPrev}
                    className="w-8 h-8 flex items-center justify-center rounded-lg border border-white/[0.08] text-[#8A8F98] hover:text-[#EDEDEF] hover:border-white/[0.14] hover:bg-white/[0.05] transition-all duration-200"
                    aria-label="Previous"
                >
                    <ChevronLeft className="w-4 h-4" />
                </button>

                <div className="flex gap-1.5">
                    {scrollSnaps.map((_, index) => (
                        <button
                            key={index}
                            onClick={() => scrollTo(index)}
                            className={`h-1.5 rounded-full transition-all duration-300 ${
                                index === selectedIndex
                                    ? "bg-[#5E6AD2] w-6"
                                    : "bg-white/20 hover:bg-white/40 w-1.5"
                            }`}
                            aria-label={`Slide ${index + 1}`}
                        />
                    ))}
                </div>

                <button
                    onClick={scrollNext}
                    className="w-8 h-8 flex items-center justify-center rounded-lg border border-white/[0.08] text-[#8A8F98] hover:text-[#EDEDEF] hover:border-white/[0.14] hover:bg-white/[0.05] transition-all duration-200"
                    aria-label="Next"
                >
                    <ChevronRight className="w-4 h-4" />
                </button>
            </div>

            {/* Video modal */}
            {isVideoOpen && (
                <div
                    className="fixed inset-0 flex items-center justify-center z-50"
                    style={{ background: 'rgba(2,2,3,0.85)', backdropFilter: 'blur(12px)' }}
                    onClick={() => setIsVideoOpen(false)}
                >
                    <div
                        className="rounded-2xl border border-white/[0.08] w-[92%] max-w-4xl overflow-hidden"
                        style={{
                            background: 'rgba(10,10,12,0.95)',
                            boxShadow: '0 0 0 1px rgba(255,255,255,0.06), 0 24px 80px rgba(0,0,0,0.7)',
                        }}
                        onClick={(e) => e.stopPropagation()}
                    >
                        <div className="flex justify-between items-center px-5 py-4 border-b border-white/[0.06]">
                            <h3 className="text-sm font-semibold text-[#EDEDEF]">
                                {t('projects.demoTitle')}
                            </h3>
                            <button
                                onClick={() => setIsVideoOpen(false)}
                                className="w-7 h-7 flex items-center justify-center rounded-lg text-[#8A8F98] hover:text-[#EDEDEF] hover:bg-white/[0.06] transition-all duration-200"
                                aria-label="Close"
                            >
                                <X className="w-4 h-4" />
                            </button>
                        </div>
                        <video className="w-full" controls autoPlay>
                            <source src={currentVideo} type="video/mp4" />
                            {t('projects.videoError')}
                        </video>
                    </div>
                </div>
            )}
        </section>
    );
};

export default Projects;
