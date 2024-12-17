// Config
import { projects } from "@/config";

// UI Components
import ProjectCard from "@/components/projectShowCase";

const Projects = () => {
    return (
        <section
            id="projects"
            className="snap-start flex flex-col items-center justify-center min-h-screen py-20 bg-gradient-to-b from-zinc-900 to-black text-center px-4"
        >
            <h3 className="text-4xl font-bold text-foreground mb-12">My Projects</h3>
            <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8 max-w-6xl mx-auto">
                {projects && projects.map((project, index) => (
                    <ProjectCard
                        key={index}
                        title={project.title}
                        description={project.description}
                        links={project.links || []}
                        tags={project.tags || []}
                        year={project.year || undefined}
                        role={project.role || undefined}
                    />
                ))}
            </div>
        </section>
    );
}

export default Projects;