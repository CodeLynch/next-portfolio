import { ReactNode } from "react";
import NavButtons from "./NavButtons";

type LayoutProps = {
    children: ReactNode,
    bubbleComponent: ReactNode
}

export default function Layout({ children, bubbleComponent }: LayoutProps) {
    return (
        <div className="flex flex-col min-h-screen justify-center items-center bg-background font-sans">
            <div className="flex w-screen min-h-95 items-center justify-center gap-40">
                <div className="flex w-200 min-h-80 flex-col">
                    {children}
                    <NavButtons />
                </div>
                <div className="w-120">
                    {bubbleComponent}
                </div>
            </div>
            <footer className="flex text-center justify-center absolute bottom-0">codelynch &copy; 2025</footer>
        </div>
    )
}
