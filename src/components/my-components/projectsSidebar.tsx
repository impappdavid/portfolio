"use client"
import React from 'react';
import Link from 'next/link';

// Define a type for the valid slugs
type ProjectSlug = 'cinemaview' | 'azura';

const projectData: Record<ProjectSlug, { links: { title: string; href: string; target: string; disabled: boolean; }[] }> = {
    cinemaview: {
        links: [
            {
                title: "Frontend",
                href: "/frontend", // Custom href for Cinema View
                target: "_self", // Opens in the same tab
                disabled: false // Link is enabled
            }
        ],
    },
    azura: {
        links: [
            {
                title: "Frontend",
                href: "/frontend", // Custom href for Azura
                target: "_self", // Opens in the same tab
                disabled: false // Link is enabled
            },
            {
                title: "Backend (soon)",
                href: "/backend", // Custom href for Backend
                target: "_self", // Opens in the same tab
                disabled: true // Link is disabled
            },
            {
                title: "GitHub",
                href: "https://github.com/impappdavid/Azura", // Custom href for GitHub
                target: "_blank", // Opens in a new tab
                disabled: false // Link is enabled
            },
            {
                title: "Live demo (soon)",
                href: "https://your-live-demo-link.com", // Custom href for Live demo
                target: "_blank", // Opens in a new tab
                disabled: true // Link is disabled
            }
        ],
    }
};

interface ProjectsSidebarProps {
    slug: ProjectSlug; // Use the defined type for slug
}

const ProjectsSidebar: React.FC<ProjectsSidebarProps> = ({ slug }) => {
    const projectContent = projectData[slug] || projectData.cinemaview; // Default to Cinema View if slug is not found

    return (
        <div className="w-full flex flex-col justify-end gap-2 text-md px-2">
            <div className="text-bold text-sm">Menu</div>
            {projectContent.links.map((link, index) => (
                link.disabled ? (
                    <span
                        key={index}
                        className="text-sm px-1.5 py-1 border-l dark:border-white border-black bg-zinc-500/10" // Style for disabled link
                    >
                        {link.title}
                    </span>
                ) : (
                    <Link
                        key={index} // Use index as key for simplicity, but consider a unique identifier if available
                        href={link.href} // Use the custom href from the project data
                        target={link.target} // Set the target attribute
                        className="text-sm px-1.5 py-1 border-l dark:border-white border-black bg-zinc-500/10 hover:bg-zinc-200/70 dark:hover:bg-zinc-500/10 transition-all"
                    >
                        {link.title}
                    </Link>
                )
            ))}
        </div>
    );
};

export default ProjectsSidebar;
