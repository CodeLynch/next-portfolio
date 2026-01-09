import Image from "next/image";

export default function BubbleLanguages(props: { imageUrl: string }) {
    return (
        <div className="flex flex-col relative">
            <div className="dot" style={{ height: "400px", width: "400px" }} />
            <Image
                style={{ opacity: 0 }}
                className="fade-in absolute top-15 left-20"
                src={props.imageUrl}
                alt="My portrait"
                height={200}
                width={200}
            />
            <div className="dot" style={{ height: "400px", width: "400px" }} />
            <Image
                style={{ opacity: 0 }}
                className="fade-in absolute top-15 left-20"
                src={props.imageUrl}
                alt="My portrait"
                height={100}
                width={100}
            />
        </div>
    );
}

