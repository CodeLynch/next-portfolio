import BubblePortrait from "./BubblePortrait";
import NavButtons from "./NavButtons";

export default function Layout({ children }) {
  return (
    <div className="flex flex-col min-h-screen justify-center items-center bg-background font-sans">
        <div className="flex min-h-95 items-center justify-center gap-40">
            <div className="flex min-h-80 flex-col">
                {children}
                <NavButtons/>
            </div>
            <div>
            <BubblePortrait imageUrl="/tala.png"/>
            </div>
        </div>
    <footer className="flex text-center justify-center absolute bottom-0">codelynch &copy; 2025</footer>
    </div>
  )
}
