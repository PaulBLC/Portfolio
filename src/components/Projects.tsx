import Title from "./Title";
import img4 from '../assets/projects/4.webp';
import img1 from '../assets/projects/1.webp';
import img5 from '../assets/projects/5.webp';
import img7 from '../assets/projects/7.webp';
import img2 from '../assets/projects/2.webp';
import { Github, Video, ChevronLeft, ChevronRight, ExternalLink } from "lucide-react";
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
        const links: { href: string; label: string; icon: React.ReactNode; style: string; onClick?: () => void }[] = [];

        if (project.type === 'demo' && project.videoPath) {
            links.push({
                href: "#",
                label: t('projects.demo'),
                icon: <Video className="w-4 h-4" />,
                style: "btn-accent",
                onClick: () => openVideo(project.videoPath!),
            });
        }
        if (project.github) {
            links.push({
                href: project.github,
                label: "GitHub",
                icon: <Github className="w-4 h-4" />,
                style: "btn-neutral",
            });
        }
        if (project.website) {
            links.push({
                href: project.website,
                label: t('projects.website'),
                icon: <ExternalLink className="w-4 h-4" />,
                style: "btn-primary",
            });
        }

        return (
            <div
                className="flex mt-auto gap-2 pt-2"
                onPointerDownCapture={(e) => e.stopPropagation()}
            >
                {links.map((link) =>
                    link.onClick ? (
                        <button
                            key={link.label}
                            className={`btn btn-sm flex-1 ${link.style}`}
                            onClick={(e) => { e.preventDefault(); link.onClick!(); }}
                        >
                            {link.icon}
                            {link.label}
                        </button>
                    ) : (
                        <a
                            key={link.label}
                            href={link.href}
                            target="_blank"
                            rel="noopener noreferrer"
                            className={`btn btn-sm flex-1 ${link.style}`}
                        >
                            {link.icon}
                            {link.label}
                        </a>
                    )
                )}
            </div>
        );
    };

    return (
        <div className="mt-10" id="Projects">
            <Title title={t('projects.title')} />

            {/* Carrousel */}
            <div className="overflow-hidden" ref={emblaRef}>
                <div className="flex -ml-4">
                    {projects.map((project) => (
                        <div
                            key={project.id}
                            className="flex-[0_0_100%] min-w-0 pl-4 md:flex-[0_0_33.333%]"
                        >
                            <div className="bg-base-300 p-6 h-full rounded-xl shadow-lg flex flex-col">
                                <img
                                    src={project.image}
                                    alt={project.title}
                                    className="w-full rounded-xl h-48 object-cover"
                                    loading="lazy"
                                />
                                <div className="mt-3">
                                    <h3 className="font-bold text-lg">{project.title}</h3>
                                    <p className="text-sm mt-1 line-clamp-3">{project.description}</p>
                                </div>
                                <div className="flex flex-wrap gap-2 my-3">
                                    {project.technologies.map((tech) => (
                                        <span key={tech} className="badge badge-accent badge-sm">
                                            {tech}
                                        </span>
                                    ))}
                                </div>
                                {renderLinks(project)}
                            </div>
                        </div>
                    ))}
                </div>
            </div>

            {/* Navigation : fleches + dots */}
            <div className="flex items-center justify-center gap-4 mt-6">
                <button onClick={scrollPrev} className="btn btn-circle btn-sm btn-ghost">
                    <ChevronLeft className="w-5 h-5" />
                </button>
                <div className="flex gap-2">
                    {scrollSnaps.map((_, index) => (
                        <button
                            key={index}
                            onClick={() => scrollTo(index)}
                            className={`h-2.5 rounded-full transition-all duration-300 ${
                                index === selectedIndex
                                    ? "bg-accent w-8"
                                    : "bg-base-content/30 hover:bg-base-content/50 w-2.5"
                            }`}
                            aria-label={`Slide ${index + 1}`}
                        />
                    ))}
                </div>
                <button onClick={scrollNext} className="btn btn-circle btn-sm btn-ghost">
                    <ChevronRight className="w-5 h-5" />
                </button>
            </div>

            {/* Modal video */}
            {isVideoOpen && (
                <div
                    className="fixed inset-0 bg-black/60 backdrop-blur-sm flex items-center justify-center z-50"
                    onClick={() => setIsVideoOpen(false)}
                >
                    <div
                        className="bg-base-300 p-4 rounded-lg w-[90%] max-w-4xl"
                        onClick={(e) => e.stopPropagation()}
                    >
                        <div className="flex justify-between items-center mb-4">
                            <h3 className="text-xl font-bold">{t('projects.demoTitle')}</h3>
                            <button
                                className="btn btn-sm btn-circle btn-ghost"
                                onClick={() => setIsVideoOpen(false)}
                            >
                                ✕
                            </button>
                        </div>
                        <video
                            className="w-full rounded-lg"
                            controls
                            autoPlay
                        >
                            <source src={currentVideo} type="video/mp4" />
                            {t('projects.videoError')}
                        </video>
                    </div>
                </div>
            )}
        </div>
    )
}

export default Projects;
