"use client";
import Link from 'next/link'
import { usePathname } from 'next/navigation';

export default function NavButtons() {
    const links = [
        {
            name: "about",
            label: "About",
            matches: ["/", "/about"],
        },
        {
            name: "skills",
            label: "Skills",
            matches: ["/skills", "/skills/languages", "skills/frameworks"],
        },
        {
            name: "projects",
            label: "Projects",
            matches: ["/projects"],
        },
        {
            name: "experience",
            label: "Experience",
            matches: ["/experience"],
        },
    ]
    const pathname = usePathname();
    function isLinkActive(matches: string[]) {
        return matches.includes(pathname);
    }

    return (
        <div className="flex flex-row gap-3">
            {links.map((link) => (
                <Link key={link.name} href={"/" + link.name}> <button className={isLinkActive(link.matches) ? "text-xl active" : "text-xl"} >{link.label}</button></Link>
            ))}
        </div>
    );
}

