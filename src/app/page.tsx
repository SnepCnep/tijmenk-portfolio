// Config
import { projects } from "@/config";

// UI Components
import Navbar from "@/components/navbar";
import ProjectCard from "@/components/projectShowCase";

export default async function Home() {

  return (
    <main className="snap-y snap-mandatory h-screen overflow-y-scroll scroll-smooth bg-zinc-900 text-foreground">
      {/* Navbar */}
      <Navbar />

      {/* Intro Section */}
      <section
        id="intro"
        className="snap-start flex flex-col items-center justify-center h-screen bg-gradient-to-b from-zinc-900 to-black text-center px-4"
      >
        <h1 className="text-5xl font-extrabold leading-tight tracking-tight sm:text-6xl">
          Welcome to <span className="text-primary">My Portfolio</span>.
        </h1>
        <h2 className="text-xl sm:text-2xl mt-6 font-medium text-muted-foreground">
          Hi, I&apos;m{" "}
          <span className="font-bold text-primary">TijmenK</span>, a Software
          Developer.
        </h2>
      </section>

      {/* Projects Section */}
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

      {/* About Section */}
      {/* <section
        id="about"
        className="snap-start flex flex-col items-center justify-center h-screen bg-gradient-to-b from-zinc-900 to-black text-center px-4"
      >
        <h3 className="text-3xl font-bold text-foreground">About Me</h3>
        <p className="mt-4 text-lg text-muted-foreground max-w-2xl mx-auto">
          COMING SOON
        </p>
        <div>
          <h1>My Github</h1>
          
        </div>
      </section> */}

      {/* Blog Section */}
      {/* <section
        id="blog"
        className="snap-start flex flex-col items-center justify-center h-screen bg-gradient-to-b from-zinc-900 to-black text-center px-4"
      >
        <h3 className="text-3xl font-bold text-foreground">Blog</h3>
        <p className="mt-4 text-lg text-muted-foreground max-w-2xl mx-auto">
          Welcome to my blog! Here, I share insights, tutorials, and stories
          about my experiences as a developer. Stay tuned for updates!
        </p>
      </section> */}
    </main>
  );
}
