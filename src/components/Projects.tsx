import Title from "./Title";
import img4 from '../assets/projects/4.png';
import imgPortfolio from '../assets/projects/2.png';
import { Github, Video } from "lucide-react";
import { useState } from "react";
import { useTranslation } from "react-i18next";

const projects = [
    {
        id: 1,
        title: 'Web Scrapping Fiches Google my Business',
        description: 'Ce Worflow permet de récupérer les fiches google non revendiquées.',
        technologies: ['n8n', 'Google Cloud Platform', 'Apify'],
        videoPath: '/n8n_webscrapping.mp4',
        repoLink: '#',
        image: img4,
        type: 'demo',
    },
    {
        id: 2,
        title: 'Portfolio',
        description: 'Mon portfolio personnalisé avec React, Tailwind CSS et TypeScript.',
        technologies: ['React', 'Tailwind CSS', 'TypeScript'],
        image: imgPortfolio,
        github: 'https://github.com/PaulBLC/Portfolio',
        type: 'github',
    },
];

const Projects = () => {
    const [isVideoOpen, setIsVideoOpen] = useState(false);
    const [currentVideo, setCurrentVideo] = useState('');
    const { t } = useTranslation();

    const openVideo = (videoPath: string) => {
        setCurrentVideo(videoPath);
        setIsVideoOpen(true);
    };

    return (
        <div className="mt-10" id="Projects">
            <Title title={t('projects.title')} />
            <div className="grid grid-cols-1 md:grid-cols-2 gap-8 justify-items-center">
                {projects.map((project) => (
                    <div key={project.id} className="bg-base-300 p-8 h-full rounded-xl shadow-lg flex flex-col w-full max-w-md">
                        <img 
                            src={project.image} 
                            alt={project.title}
                            className="w-full rounded-xl h-56 object-cover"
                        />
                        <div>
                            <h1 className="my-2 font-bold">
                                {project.title}
                            </h1>
                            <p className="text-sm">{project.description}</p>
                        </div>
                        <div className="flex flex-wrap gap-2 my-3">
                            {project.technologies && project.technologies.map((tech) => (
                                <span key={tech} className="badge badge-accent badge-sm">
                                    {tech}
                                </span>
                            ))}
                        </div>
                        <div className="flex w-full mt-auto">
                            {project.type === 'demo' && project.videoPath && (
                                <button
                                    className="btn btn-accent w-full"
                                    onClick={() => openVideo(project.videoPath!)}
                                >
                                    {t('projects.demo')}
                                    <Video className="w-4" />
                                </button>
                            )}
                            {project.type === 'github' && project.github && (
                                <a className="btn btn-neutral w-full" href={project.github} target="_blank" rel="noopener noreferrer">
                                    <Github className="w-4" />
                                    GitHub
                                </a>
                            )}
                        </div>
                    </div>
                ))}
            </div>
            {/* Modal pour la vidéo */}
            {isVideoOpen && (
                <div className="fixed inset-0 bg-black bg-opacity-50 flex items-center justify-center z-50">
                    <div className="bg-base-300 p-4 rounded-lg w-[90%] max-w-4xl">
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