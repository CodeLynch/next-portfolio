"use client";

import Link from "next/link";
import { usePathname } from "next/navigation";

export default function SkillsComponent() {
    const sublinks = [
        {
            name: "languages"
        },
        {
            name: "tools"
        },
        {
            name: "frameworks"
        }
    ]
    const routeName = usePathname();

    function slugMatch(name: string) {
        return routeName.endsWith(name);

    }

    return (
        <div className="flex flex-col h-80 justify-end pb-10">
            <ul className="option-list text-primary font-bold text-fade-in text-5xl w-200">
                {sublinks.map((link) => (
                    <li key={link.name} className={slugMatch(link.name) ? "active" : ""}>
                        <Link href={link.name}>
                            {link.name.toUpperCase()}
                        </Link>
                    </li>
                ))}
            </ul>
        </div>
    );
}
