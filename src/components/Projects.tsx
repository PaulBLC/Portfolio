import Title from "./Title"
import img4 from '../assets/projects/4.png';
import { Github, Video } from "lucide-react";
import { useState } from "react";

const projects = [
    {
        id: 1,
        title: 'Web Scrapping Fiches Google my Business',
        description: 'Ce Worflow permet de récupérer les fiches google non revendiquées.',
        technologies: ['n8n', 'Google Cloud Platform', 'Apify'],
        videoPath: '/n8n_webscrapping.mp4',
        repoLink: '#',
        image: img4,
    },
];

const Projects = () => {
    const [isVideoOpen, setIsVideoOpen] = useState(false);
    const [currentVideo, setCurrentVideo] = useState('');

    const openVideo = (videoPath: string) => {
        setCurrentVideo(videoPath);
        setIsVideoOpen(true);
    };

    return (
        <div className="mt-10" id="Projects">
            <Title title="Projet n8n" />
            <div className="grid md:grid-cols-3 gap-4 justify-items-center">
                {projects.map((project) => (
                    <div key={project.id} className="bg-base-300 p-8 h-fit rounded-xl shadow-lg md:col-start-2">
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
                            {project.technologies.map((tech) => (
                                <span key={tech} className="badge badge-accent badge-sm">
                                    {tech}
                                </span>
                            ))}
                        </div>
                        <div className="flex">
                            <button 
                                className={`btn btn-accent ${project.repoLink === '#' ? 'w-full' : 'w-2/3'}`}
                                onClick={() => openVideo(project.videoPath)}
                            >
                                Demo
                                <Video className="w-4" />
                            </button>

                            {project.repoLink !== '#' && (
                                <a className="btn btn-neutral w-1/3 ml-2" href={project.repoLink}>
                                    <Github className="w-4" />
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
                            <h3 className="text-xl font-bold">Démo du projet</h3>
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
                            Votre navigateur ne supporte pas la lecture de vidéos.
                        </video>
                    </div>
                </div>
            )}
        </div>
    )
}

export default Projects