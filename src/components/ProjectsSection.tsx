import { SquareArrowOutUpRight } from "lucide-react";
import { Badge } from "./ui/badge";
import { Card, CardContent } from "./ui/card";

interface ProjectsSectionProps {
    className?: string;
    id: string;
};

// Projects Contents
const myProjects = [
    {
        id: 1,
        name: 'Simple E-Commerce Website',
        description:
            'A simple e-commerce website with some features like cart, checkout, and more.',
        tech: [
            'TypeScript',
            'React',
            'React Router',
            'Redux Toolkit',
            'Tailwind CSS',
        ],
        image: '/e-commerce.png',
        link: {
            icon: {
                dep: <SquareArrowOutUpRight color="#000000" strokeWidth={1.5} size={18} />,
                github: (
                    <svg xmlns="http://www.w3.org/2000/svg" width={24} height={24} viewBox="0 0 24 24"><g fill="none" stroke="#000" strokeLinecap="round" strokeLinejoin="round" strokeWidth={2}><path strokeDasharray={32} strokeDashoffset={32} d="M12 4c1.67 0 2.61 0.4 3 0.5c0.53 -0.43 1.94 -1.5 3.5 -1.5c0.34 1 0.29 2.22 0 3c0.75 1 1 2 1 3.5c0 2.19 -0.48 3.58 -1.5 4.5c-1.02 0.92 -2.11 1.37 -3.5 1.5c0.65 0.54 0.5 1.87 0.5 2.5c0 0.73 0 3 0 3M12 4c-1.67 0 -2.61 0.4 -3 0.5c-0.53 -0.43 -1.94 -1.5 -3.5 -1.5c-0.34 1 -0.29 2.22 0 3c-0.75 1 -1 2 -1 3.5c0 2.19 0.48 3.58 1.5 4.5c1.02 0.92 2.11 1.37 3.5 1.5c-0.65 0.54 -0.5 1.87 -0.5 2.5c0 0.73 0 3 0 3"><animate fill="freeze" attributeName="stroke-dashoffset" dur="0.7s" values="32;0"></animate></path><path strokeDasharray={10} strokeDashoffset={10} d="M9 19c-1.41 0 -2.84 -0.56 -3.69 -1.19c-0.84 -0.63 -1.09 -1.66 -2.31 -2.31"><animate fill="freeze" attributeName="stroke-dashoffset" begin="0.8s" dur="0.2s" values="10;0"></animate></path></g></svg>
                )
            },
            deploy: 'https://toko-ku-omega.vercel.app/',
            repo: 'https://github.com/Efandio/toko-ku',
        },
    },
    {
        id: 2,
        name: 'Simple Anime Information Website',
        description:
            'A simple anime information website using data from the Anilist API.',
        tech: ['TypeScript', 'Vue', 'Vue Router', 'Pinia'],
        image: '/anime.png',
        link: {
            icon: {
                dep: <SquareArrowOutUpRight color="#000000" strokeWidth={1.5} size={18} />,
                github: (
                    <svg xmlns="http://www.w3.org/2000/svg" width={24} height={24} viewBox="0 0 24 24"><g fill="none" stroke="#000" strokeLinecap="round" strokeLinejoin="round" strokeWidth={2}><path strokeDasharray={32} strokeDashoffset={32} d="M12 4c1.67 0 2.61 0.4 3 0.5c0.53 -0.43 1.94 -1.5 3.5 -1.5c0.34 1 0.29 2.22 0 3c0.75 1 1 2 1 3.5c0 2.19 -0.48 3.58 -1.5 4.5c-1.02 0.92 -2.11 1.37 -3.5 1.5c0.65 0.54 0.5 1.87 0.5 2.5c0 0.73 0 3 0 3M12 4c-1.67 0 -2.61 0.4 -3 0.5c-0.53 -0.43 -1.94 -1.5 -3.5 -1.5c-0.34 1 -0.29 2.22 0 3c-0.75 1 -1 2 -1 3.5c0 2.19 0.48 3.58 1.5 4.5c1.02 0.92 2.11 1.37 3.5 1.5c-0.65 0.54 -0.5 1.87 -0.5 2.5c0 0.73 0 3 0 3"><animate fill="freeze" attributeName="stroke-dashoffset" dur="0.7s" values="32;0"></animate></path><path strokeDasharray={10} strokeDashoffset={10} d="M9 19c-1.41 0 -2.84 -0.56 -3.69 -1.19c-0.84 -0.63 -1.09 -1.66 -2.31 -2.31"><animate fill="freeze" attributeName="stroke-dashoffset" begin="0.8s" dur="0.2s" values="10;0"></animate></path></g></svg>
                )
            },
            deploy: 'https://rid-anime.vercel.app/',
            repo: 'https://github.com/Efandio/Rid-Anime-Vue',
        },
    },
];


const ProjectsSection: React.FC<ProjectsSectionProps> = ({ className, id }) => {
    return (
        <main id={id} className={`w-full h-fit flex flex-col py-5 ${className}`}>
            <span className="flex justify-center">
                <Badge className="px-4 text-sm">My Projects</Badge>
            </span>

            <section className="grid grid-cols-1 lg:grid-cols-2 gap-5 justify-items-center mt-8 lg:mt-14">
                {myProjects.map((projects) => (
                    <Card key={projects.id} className="w-[80vw] lg:w-[45vw] h-[50vh] lg:h-[90vh] py-0 px-0 border-none">
                        <CardContent className="px-0">
                            <img className="rounded-lg" src={projects.image} alt="" />
                            
                            <section className="px-4 flex flex-col justify-between h-[25vh] lg:h-[30vh] gap-4 mt-2">
                                <div className="flex flex-col gap-1">
                                    <h3 className="font-semibold lg:text-xl">{projects.name}</h3>
                                    <p className="leading-4 text-black/70 text-sm">{projects.description}</p>
                                </div>

                                <div className="flex flex-col gap-3 pb-3">
                                    <div className="grid grid-cols-2 lg:grid-cols-2 gap-2 w-50 lg:w-50">
                                        {projects.tech.map((tech, index) => (
                                            <Badge key={index}>{tech}</Badge>
                                        ))}
                                    </div>
                                    <div className="flex items-center gap-5">
                                        <a className="flex items-center gap-1 text-xs" href={projects.link.deploy}><span>{projects.link.icon.dep}</span>Live Demo</a>
                                        <a className="flex items-center gap-1 text-xs" href={projects.link.repo}><span>{projects.link.icon.github}</span>Repository</a>
                                    </div>
                                </div>
                            </section>
                        </CardContent>
                    </Card>
                ))}
            </section>
        </main>
    )
};

export default ProjectsSection;