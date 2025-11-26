import Image from "next/image";

export default function BubblePortrait(props: {imageUrl: string}) {
    return (
        <div className="flex flex-col relative">
            <div className="dot"/>
            <Image 
            style={{opacity: 0}}
            className="fade-in absolute top-15 left-20"
            src={props.imageUrl}
            alt="My portrait"
            height={400}
            width={400}
            />
        </div>
    );
}
