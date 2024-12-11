// React
import React from "react";

// NextJs
import Link from "next/link";

// Utils
import { cn } from "@/lib/utils";

// UI Components
import {
    NavigationMenu,
    NavigationMenuItem,
    NavigationMenuLink,
    NavigationMenuList,
    navigationMenuTriggerStyle
} from "@/components/ui/navigation-menu";
import {
    Tooltip,
    TooltipContent,
    TooltipProvider,
    TooltipTrigger,
} from "@/components/ui/tooltip"


const navbarItems = [
    {
        title: "Home",
        description: "Go back to the home page",
        href: "/",
    },
    {
        title: "Projects",
        description: "View my projects",
        href: "#projects",
    },
    {
        title: "About",
        description: "Learn more about me",
        href: "#about",
    },
    {
        title: "Blog",
        description: "Read my blog posts",
        href: "#blog",
    },
];

const Navbar = () => {
    return (
        <nav className="fixed top-0 left-0 w-full z-50 bg-gradient-to-b from-gray-900 to-transparent backdrop-blur-md">
            <div className="container mx-auto flex justify-between items-center h-16 px-4 lg:px-8">
                <div className="text-2xl font-bold text-chart-1">TijmenK</div>

                <NavigationMenu>
                    <NavigationMenuList className="flex gap-6">
                        {navbarItems.map((item) => (
                            <TooltipProvider key={item.title}>
                                <Tooltip>
                                    <TooltipTrigger>
                                        <NavigationMenuItem className={navigationMenuTriggerStyle()}>
                                            <Link href={item.href}>
                                                {item.title}
                                            </Link>
                                        </NavigationMenuItem>
                                    </TooltipTrigger>
                                    <TooltipContent className="bg-gray-900">{item.description}</TooltipContent>
                                </Tooltip>
                            </TooltipProvider>
                        ))}
                    </NavigationMenuList>
                </NavigationMenu>
            </div>
        </nav>
    );
};

export default Navbar;

const ListItem = React.forwardRef<
  React.ElementRef<"a">,
  React.ComponentPropsWithoutRef<"a">
>(({ className, title, children, ...props }, ref) => {
  return (
    <li>
      <NavigationMenuLink asChild>
        <a
          ref={ref}
          className={cn(
            "block select-none space-y-1 rounded-md p-3 leading-none no-underline outline-none transition-colors hover:bg-accent hover:text-accent-foreground focus:bg-accent focus:text-accent-foreground",
            className
          )}
          {...props}
        >
          <div className="text-sm font-medium leading-none">{title}</div>
          <p className="line-clamp-2 text-sm leading-snug text-muted-foreground">
            {children}
          </p>
        </a>
      </NavigationMenuLink>
    </li>
  );
});
ListItem.displayName = "ListItem";