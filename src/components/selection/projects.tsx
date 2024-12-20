// Config
import { projects } from "@/config";

// UI Components
import ProjectCard from "@/components/projectShowCase";

// Types
interface LinkObj {
    name: string;
    type?: string;
    url: string;
  }
  
  interface ProjectCardProps {
    title: string;
    description: string;
    links: LinkObj[];
    tags: string[];
    year?: number | string;
    role?: string;
    status?: string;
  }


const Projects = () => {
    return (
        <section
            id="projects"
            className="snap-start flex flex-col items-center justify-center min-h-screen py-20 bg-radial text-center px-4 sm:mt-6"
        >
            <h3 className="text-4xl font-bold text-foreground mb-12">My Projects</h3>
            <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8 max-w-6xl mx-auto">
                {projects && projects.map((project: ProjectCardProps, index: number) => (
                    <ProjectCard key={index} {...project} />
                ))}
            </div>
        </section>
    );
}

export default Projects;