"use client";

import { usePathname } from "next/navigation";

export default function OptionsComponent(listItems: string[]) {
    const routeName = usePathname();

    function slugMatch(name: string) {
        return routeName.endsWith(name);

    }

    return (
        <div className="flex flex-col h-80 justify-end pb-10">
            <ul className="option-list text-primary font-bold text-fade-in text-5xl w-200">
                {listItems.map((item, i) => (
                    <li key={i} className={slugMatch(item) ? "active" : ""}>
                        {item.toUpperCase()}
                    </li>
                ))}
            </ul>
        </div>
    );
}
