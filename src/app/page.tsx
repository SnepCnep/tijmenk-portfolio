// Next.js
import Navbar from "@/components/navbar";
import { Card } from "@/components/ui/card";

export default function Home() {
  return (
    <main className="snap-y snap-mandatory h-screen overflow-y-scroll scroll-smooth bg-zinc-900 text-foreground">
      {/* Navbar */}
      <Navbar />

      {/* Intro Section */}
      <section
        id="intro"
        className="snap-start flex flex-col items-center justify-center h-screen bg-gradient-to-b from-zinc-900 to-black text-center"
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

      {/* About Section */}
      <section
        id="about"
        className="snap-start flex flex-col items-center justify-center h-screen bg-gradient-to-b from-zinc-900 to-black text-center"
      >
        <h3 className="text-3xl font-bold text-foreground">About Me</h3>
        <p className="mt-4 text-lg text-muted-foreground max-w-2xl mx-auto">
          COMING SOON
        </p>
      </section>

      {/* Projects Section */}

      <section
        id="projects"
        className="snap-start flex flex-col items-center justify-center h-screen bg-gradient-to-b from-zinc-900 to-black text-center"
      >
        <h3 className="text-3xl font-bold text-foreground">My Projects</h3>
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6 mt-10 max-w-4xl mx-auto">
          <Card className="p-6 bg-zinc-800 border border-zinc-700">
            <h4 className="text-xl font-bold text-foreground">Project 1</h4>
            <p className="mt-2 text-muted-foreground">
              A brief description of your amazing project.
            </p>
          </Card>
          <Card className="p-6 bg-zinc-800 border border-zinc-700">
            <h4 className="text-xl font-bold text-foreground">Project 2</h4>
            <p className="mt-2 text-muted-foreground">
              Another brief description of an awesome project.
            </p>
          </Card>
          <Card className="p-6 bg-zinc-800 border border-zinc-700">
            <h4 className="text-xl font-bold text-foreground">Project 3</h4>
            <p className="mt-2 text-muted-foreground">
              Yet another cool project description.
            </p>
          </Card>
        </div>
      </section>

      {/* Blog Section */}
      <section
        id="blog"
        className="snap-start flex flex-col items-center justify-center h-screen bg-gradient-to-b from-zinc-900 to-black text-center"
      >
        <h3 className="text-3xl font-bold text-foreground">Blog</h3>
        <p className="mt-4 text-lg text-muted-foreground max-w-2xl mx-auto">
          Welcome to my blog! Here, I share insights, tutorials, and stories
          about my experiences as a developer. Stay tuned for updates!
        </p>
      </section>
    </main>
  );
}
