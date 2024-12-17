// Config
import { projects, githubUsername } from "@/config";
import { fetchGithubUser } from "@/lib/github";

// UI Components
import Navbar from "@/components/navbar";
import ProjectCard from "@/components/projectShowCase";

import { Alert, AlertDescription, AlertTitle } from "@/components/ui/alert"
import { Avatar, AvatarFallback, AvatarImage } from "@/components/ui/avatar"
import { Badge } from "@/components/ui/badge"

import {
  Tooltip,
  TooltipContent,
  TooltipProvider,
  TooltipTrigger,
} from "@/components/ui/tooltip"


// Icons
import { SiGithub, SiLinkedin } from "react-icons/si";
import { FaCode, FaServer } from "react-icons/fa";

export default async function Home() {
  const user = await fetchGithubUser();

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
      {/* About Section */}
      <section
        id="about"
        className="snap-start flex flex-col items-center justify-center min-h-screen py-20 bg-gradient-to-b from-zinc-900 to-black text-center px-4"
      >
        <h3 className="text-4xl font-bold text-foreground mb-8">About Me</h3>
        <div className="grid grid-cols-1 md:grid-cols-2 gap-12 max-w-6xl mx-auto">
          <div className="flex flex-col items-center">
            <Alert className="w-full max-w-md rounded-lg shadow-lg p-6">
              <AlertTitle className="flex flex-col items-center mb-6">
                <div className="relative w-32 h-32 mb-4">
                  <Avatar className={`w-full h-full rounded-full overflow-hidden border-4 border-chart-1 shadow-lg`}>
                    <AvatarFallback>TK</AvatarFallback>
                    <AvatarImage src={user.avatar_url} alt="Avatar" />
                  </Avatar>
                  <TooltipProvider>
                    <Tooltip>
                      <TooltipTrigger>
                        <div className="absolute bottom-0 right-0 bg-chart-2 w-5 h-5 rounded-full border-2 border-gray-800"></div>
                      </TooltipTrigger>
                      <TooltipContent className=" bg-opacity-80 bg-primary text-zinc-900 p-2 rounded-md text-xs">
                      {user.bio}
                    </TooltipContent>
                  </Tooltip>
                </TooltipProvider>
              </div>
              <span className="font-bold text-3xl text-gray-100">{user.name ?? "TijmenK"}</span>
              <span className="text-lg text-gray-400 mt-1">{user.location === "Netherlands" ? "🇳🇱 | Netherlands" : user.location}</span>
            </AlertTitle>
            <AlertDescription className="w-full">
              <div className="text-start">
                <h4 className="font-bold text-xl text-gray-200 mb-3">GitHub Stats</h4>
                <div className="grid grid-cols-3 gap-4 text-gray-300">
                  <div className="flex flex-col items-center">
                    <span className="text-2xl font-semibold">{user.followers}</span>
                    <span className="text-xs text-gray-400">Followers</span>
                  </div>
                  <div className="flex flex-col items-center">
                    <span className="text-2xl font-semibold">{user.following}</span>
                    <span className="text-xs text-gray-400">Following</span>
                  </div>
                  <div className="flex flex-col items-center">
                    <span className="text-2xl font-semibold">{user.public_repos}</span>
                    <span className="text-xs text-gray-400">Repos</span>
                  </div>
                </div>
              </div>
            </AlertDescription>
          </Alert>
          <div className="flex justify-center space-x-4 mt-6">

            {/* Github Link */}
            <a href={`https://github.com/${githubUsername}`} target="_blank" rel="noopener noreferrer" className="text-gray-400 hover:text-primary transition-colors">
              <SiGithub size={24} />
            </a>

          </div>
        </div>
        <div className="flex flex-col items-start text-left">
          <p className="text-lg text-muted-foreground mb-6">
            Hi, I&apos;m TijmenK, a software developer based in the Netherlands. I specialize in building web applications and APIs using modern technologies.
          </p>
          <h4 className="text-2xl font-bold text-foreground mb-4">Skills & Expertise</h4>
          <div className="grid grid-cols-2 gap-4 mb-6">

            <div className="flex items-center">
              <FaServer className="text-primary mr-2" size={20} />
              <span>Backend Development</span>
            </div>

            <div className="flex items-center">
              <FaCode className="text-primary mr-2" size={20} />
              <span>API Design</span>
            </div>

            <div className="flex items-center">
              <SiGithub className="text-primary mr-2" size={20} />
              <span>Version Control</span>
            </div>

          </div>
          <h4 className="text-2xl font-bold text-foreground mb-4">Technologies</h4>
          <div className="flex flex-wrap gap-2">
            <Badge variant="secondary">JavaScript</Badge> {/* Taal */}
            <Badge variant="secondary">TypeScript</Badge> {/* Taal */}
            <Badge variant="secondary">Express</Badge> {/* JS Web Server */}

            <Badge variant="secondary">Mysql</Badge> {/* Database */}
            <Badge variant="secondary">PostgreSQL</Badge> {/* Database */}

            <Badge variant="secondary">PHP</Badge>  {/* Taal */}
            <Badge variant="secondary">Laravel</Badge>  {/* Framework */}

            <Badge variant="secondary">React</Badge>  {/* Taal */}
            <Badge variant="secondary">Next.js</Badge> {/* Framework */}
            <Badge variant="secondary">WS</Badge>  {/* WebSocket */}
          </div>
        </div>
      </div>
      <div className="grid grid-cols-1 sm:grid-cols-3 gap-8 max-w-6xl mx-auto mt-12">
        <Alert>
          <AlertTitle className="flex items-center font-bold justify-center">
            {/* <FaCode className="mr-2" /> Coding Experience  */}
          </AlertTitle>
          <AlertDescription>
            {/* Over 5 years of professional experience in software development, with a focus on web technologies. */}
          </AlertDescription>
        </Alert>
        <Alert>
          <AlertTitle className="flex items-center font-bold justify-center">
            {/* <FaLaptopCode className="mr-2" /> Projects Completed */}
          </AlertTitle>
          <AlertDescription>
            {/* Successfully delivered 20+ projects, ranging from small business websites to complex enterprise applications. */}
          </AlertDescription>
        </Alert>
        <Alert>
          <AlertTitle className="flex items-center font-bold justify-center">
            {/* <SiGithub className="mr-2" /> Open Source */}
          </AlertTitle>
          <AlertDescription>
            {/* Active contributor to several open-source projects, with over 500 commits on GitHub. */}
          </AlertDescription>
        </Alert>
      </div>
    </section>

      {/* Blog Section */ }
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
    </main >
  );
}
