"use client"
// Config
import { githubUsername, skills } from "@/config";
import { fetchGithubUser, fetchGithubFollowers } from "@/lib/github";

// UI Components
import { Alert, AlertDescription, AlertTitle } from "@/components/ui/alert"
import { Avatar, AvatarFallback, AvatarImage } from "@/components/ui/avatar"
import { Badge } from "@/components/ui/badge"

import {
    Tooltip,
    TooltipContent,
    TooltipProvider,
    TooltipTrigger,
} from "@/components/ui/tooltip"

interface GithubUser {
    avatar_url: string;
    bio: string;
    name: string;
    location: string;
    followers: string[];
    following: number;
    public_repos: number;
}

interface GithubFollowers {
    avatar_url: string;
}

// Icons
import { SiGithub } from "react-icons/si";
import { FaCode, FaServer } from "react-icons/fa";

import { useEffect, useState } from "react";

const AboutMe = () => {
    const [user, setUser] = useState<GithubUser>({
        avatar_url: "",
        bio: "",
        name: "",
        location: "",
        followers: [],
        following: 0,
        public_repos: 0,
    });
    const [followers, setFollowers] = useState<GithubFollowers[]>([]);

    useEffect(() => {
        const fetchData = async () => {
            const userData = await fetchGithubUser();
            setUser(userData);

            const followersData = await fetchGithubFollowers();
            setFollowers(followersData);
        };
        fetchData();
    }, []);

    return (
        <section
            id="about"
            className="snap-start flex flex-col items-center justify-center min-h-screen py-20 bg-radial text-center px-4 sm:mt-6"
        >
            <h3 className="text-4xl font-bold text-foreground mb-8">About Me</h3>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-12 max-w-6xl mx-auto">
                <div className="flex flex-col items-center sm:ml-16">
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
                        { skills.map((skill, index) => (
                            <Badge key={index} variant="secondary">{skill}</Badge>
                        ))}
                    </div>
                </div>
            </div>
            <div className="grid grid-cols-1 sm:grid-cols-3 gap-8 max-w-6xl mx-auto mt-12">
                <Alert>
                    <AlertTitle className="flex items-center font-bold justify-center mb-2">
                        <FaCode className="mr-2" /> Coding Experience
                    </AlertTitle>
                    <AlertDescription>
                        Im a software developer student im in my last year of my study. I have experience with multiple languages and frameworks.
                    </AlertDescription>
                </Alert>
                <Alert>
                    <AlertTitle className="flex items-center font-bold justify-center mb-2">
                        <FaServer className="mr-2" /> Backend Development
                    </AlertTitle>
                    <AlertDescription>
                        I have experience with backend development with Node.js and Express. I have also worked with databases like MySQL and PostgreSQL.
                    </AlertDescription>
                </Alert>
                <Alert>
                    <AlertTitle className="flex items-center font-bold justify-center mb-2">
                        <SiGithub className="mr-2" /> Open Source
                    </AlertTitle>
                    <AlertDescription>
                        I have contributed to multiple open-source projects and have a few projects of my own.
                    </AlertDescription>
                </Alert>
            </div>
            <div>
                {followers.length > 0 && (
                    <div className="max-w-6xl mx-auto mt-12">
                        <h4 className="text-2xl font-bold text-foreground mb-4 text-center">Followers</h4>
                        <div className="flex flex-wrap gap-4 justify-center">
                            {followers.map((follower, index) => (
                                <div key={index} className="flex flex-col items-center">
                                    <Avatar className="w-12 h-12 rounded-full overflow-hidden border-4 border-chart-1 shadow-lg">
                                        <AvatarFallback>TK</AvatarFallback>
                                        <AvatarImage src={follower.avatar_url} alt="Follower" loading="lazy" />
                                    </Avatar>
                                </div>
                            ))}
                        </div>
                    </div>
                )}
            </div>

        </section>
    );
}

export default AboutMe;