// Nextjs
import Link from "next/link";

// React
import { JSX } from "react";

// UI Components
import { Card } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";

// Icon
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

const tagIconMap: { [key: string]: JSX.Element } = {
  "React": <SiReact className="mr-1" size={14} />,
  "TypeScript": <SiTypescript className="mr-1" size={14} />,
  "Next.js": <SiNextdotjs className="mr-1" size={14} />,
  "TailwindCSS": <SiTailwindcss className="mr-1" size={14} />,
  "Node.js": <SiNodedotjs className="mr-1" size={14} />,
  "Express": <SiExpress className="mr-1" size={14} />,
  "Jest": <SiJest className="mr-1" size={14} />
};

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

function getLinkIcon(linkName: string): JSX.Element {
  const lower = linkName.toLowerCase();
  if (lower.includes("github")) return <SiGithub className="inline mr-1" />;
  if (lower.includes("demo") || lower.includes("live") || lower.includes("preview")) return <FiExternalLink className="inline mr-1" />;
  if (lower.includes("doc")) return <SiMdbook className="inline mr-1" />;
  return <FiExternalLink className="inline mr-1" />;
}

const ProjectCard = ({
  title,
  description,
  links,
  tags,
  year,
  role,
  status
}: ProjectCardProps) => {
  return (
    <Card
      className="p-6 bg-zinc-800 border border-zinc-700 rounded-lg hover:shadow-xl hover:-translate-y-1 transition-all duration-300 ease-in-out overflow-hidden flex flex-col h-full"
    >
      {/* Title & Description */}
      <h4 className="text-2xl font-bold text-foreground mb-2">{title}</h4>
      <p className="text-sm text-muted-foreground leading-relaxed">{description}</p>

      {/* Tech Stack */}
      {tags.length > 0 && (
        <div className="mt-6">
          <h5 className="text-md font-semibold text-foreground mb-2">Tech Stack</h5>
          <div className="flex flex-wrap gap-2">
            {tags.map((tag, tIndex) => {
              const Icon = tagIconMap[tag] || <FiTag className="mr-1" size={14} />;
              return (
                <Badge
                  key={tIndex}
                  className="text-xs font-medium flex items-center bg-primary text-gray-100 px-2 py-1 rounded-full"
                >
                  {Icon}
                  {tag}
                </Badge>
              );
            })}
          </div>
        </div>
      )}

      <div className="flex-grow" />

      {/* Project Info */}
      {(year || status || role) && (
        <div className="flex flex-col text-sm text-muted-foreground space-y-1 border-t border-zinc-700 pt-4 mt-6">
          <h5 className="text-md font-semibold text-foreground mb-2">Project Info</h5>
          {typeof year !== 'undefined' && (
            <p>
              <span className="font-semibold text-foreground">Year:</span> {year}
            </p>
          )}
          {role && (
            <p>
              <span className="font-semibold text-foreground">Role:</span> {role}
            </p>
          )}
          {status && (
            <p>
              <span className="font-semibold text-foreground">Status:</span> {status}
            </p>
          )}
        </div>
      )}

      {/* Links / Buttons */}
      {links.length > 0 && (
        <div className="flex flex-row flex-wrap gap-4 mt-6">
          {links.map((link, lIndex) => {
            const isExternal = link.url.startsWith("http");
            const linkContent = (
              <>
                {getLinkIcon(link.type || link.name)}
                {link.name}
              </>
            );

            return isExternal ? (
              <Link
                key={lIndex}
                href={link.url}
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center text-sm text-primary border border-primary rounded-md px-4 py-2 hover:text-foreground hover:bg-primary transition-colors"
              >
                {linkContent}
              </Link>
            ) : (
              <Link
                key={lIndex}
                href={link.url}
                className="inline-flex items-center text-sm text-primary border border-primary rounded-md px-4 py-2 hover:text-foreground hover:bg-primary transition-colors"
              >
                {linkContent}
              </Link>
            );
          })}
        </div>
      )}
    </Card>
  );
};

export default ProjectCard;
