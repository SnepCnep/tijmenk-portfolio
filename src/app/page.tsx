// UI Components
import Navbar from "@/components/navbar";

// Selections
import AboutMe from "@/components/selection/aboutme";
import Projects from "@/components/selection/projects";

export default async function Home() {
  return (
    <main className="snap-y snap-mandatory h-screen overflow-y-scroll scroll-smooth bg-zinc-900 text-foreground">
      {/* Navbar */}
      <Navbar />

      {/* Intro Section */}
      <section
        id="intro"
        className="snap-start flex flex-col items-center justify-center min-h-screen py-20 bg-radial text-center px-4 sm:mt-6"
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
      <AboutMe />

      {/* Projects Section */}
      <Projects />

      {/* Blog Section */}
    </main >
  );
}
