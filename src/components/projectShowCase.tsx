// Icons
import { FiTag, FiExternalLink } from "react-icons/fi";
import {
  SiGithub,
  SiReact,
  SiTypescript,
  SiNextdotjs,
  SiTailwindcss,
  SiNodedotjs,
  SiExpress,
  SiMdbook,
  SiJest
} from "react-icons/si";

// UI Components
import { Card } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";

// React
import { JSX } from "react";

const tagIconMap: { [key: string]: JSX.Element } = {
  "React": <SiReact className="mr-1" size={14} />,
  "TypeScript": <SiTypescript className="mr-1" size={14} />,
  "Next.js": <SiNextdotjs className="mr-1" size={14} />,
  "TailwindCSS": <SiTailwindcss className="mr-1" size={14} />,
  "Node.js": <SiNodedotjs className="mr-1" size={14} />,
  "Express": <SiExpress className="mr-1" size={14} />,
  "Jest": <SiJest className="mr-1" size={14} />

};

interface Link {
  name: string;
  type?: string;
  url: string;
}

interface ProjectCardProps {
  title: string;
  description: string;
  links: Link[];
  tags: string[];
  year?: number;
  role?: string;
}

function getLinkIcon(linkName: string): JSX.Element {
  const lower = linkName.toLowerCase();
  if (lower.includes("github")) return <SiGithub className="inline mr-1" />;
  if (lower.includes("demo") || lower.includes("live")) return <FiExternalLink className="inline mr-1" />;
  if (lower.includes("preview")) return <FiExternalLink className="inline mr-1" />;
  if (lower.includes("doc")) return <SiMdbook className="inline mr-1" />;
  return <FiExternalLink className="inline mr-1" />;
}

const ProjectCard = ({
  title,
  description,
  links,
  tags,
  year,
  role
}: ProjectCardProps) => {
  return (
    <Card
      className="p-6 bg-zinc-800 border border-zinc-700 rounded-lg hover:shadow-xl hover:-translate-y-1 hover:border-gradient-to-r hover:from-primary hover:to-secondary transition-all duration-300 ease-in-out"
      style={{ transitionProperty: "transform, box-shadow, border-color" }}
    >
      <div className="flex flex-col h-full">
        {/* Title & Description */}
        <div className="mb-4">
          <h4 className="text-2xl font-bold text-foreground">{title}</h4>
          <p className="mt-2 text-sm text-muted-foreground">{description}</p>
        </div>

        {/* Project Info Section */}
        {(year || role) && (
          <div className="text-left text-sm text-muted-foreground mb-4 space-y-1 border-t border-zinc-700 pt-4">
            <h5 className="text-md font-semibold text-foreground mb-2">Project Info</h5>
            {year && (
              <p>
                <span className="font-semibold text-foreground">Year:</span> {year}
              </p>
            )}
            {role && (
              <p>
                <span className="font-semibold text-foreground">Role:</span> {role}
              </p>
            )}
          </div>
        )}

        <div className="mt-auto">
          {/* Technology Stack Section */}
          {tags.length > 0 && (
            <div className="border-t border-zinc-700 pt-4 mb-4">
              <h5 className="text-md font-semibold text-foreground mb-2">Tech Stack</h5>
              <div className="flex flex-wrap gap-2">
                {tags.map((tag, tIndex) => {
                  const Icon = tagIconMap[tag] || <FiTag className="mr-1" size={14} />;
                  return (
                    <Badge
                      key={tIndex}
                      className="text-xs font-medium flex items-center bg-primary text-gray-350 px-2 py-1 rounded-full"
                    >
                      {Icon}
                      {tag}
                    </Badge>
                  );
                })}
              </div>
            </div>
          )}

          {/* Links Section */}
          {links.length > 0 && (
            <div className="border-t border-zinc-700 pt-4">
              <h5 className="text-md font-semibold text-foreground mb-2">Links</h5>
              <div className="flex flex-wrap gap-4 items-center">
                {links.map((link, lIndex) => (
                  <a
                    key={lIndex}
                    href={link.url}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="flex items-center text-sm text-primary hover:underline hover:text-primary-foreground transition-colors"
                  >
                    {getLinkIcon(link.type || link.name)}
                    {link.name}
                  </a>
                ))}
              </div>
            </div>
          )}
        </div>
      </div>
    </Card>
  );
};

export default ProjectCard;
