export default function AboutComponent() {
    return(
        <div className="flex flex-col h-80">
            <div className="flex flex-col">
                <span className="text-5xl text-primary">
                welcome, i&apos;m <strong>john vergil aparri</strong><br/>
                </span>
                <div className="flex flex-row">
                    <span style={{marginTop: "-1.5px"}} className="text-5xl text-primary mb-5">a&nbsp;</span>
                    <ul className="roles text-5xl text-primary mb-5">
                    <li>software developer</li>
                    <li>web developer</li>
                    <li>game developer</li>
                    <li>programming enthusiast</li>
                    <li>lifelong learner</li>
                    </ul>
                </div>
            </div>
            <div className="text-fade-in w-200 mb-5">
                But I must explain to you how all this mistaken idea of denouncing pleasure and praising pain was born and I will give you a complete account of the system, and 
                expound the actual teachings of the great explorer of the truth, the master-builder of human happiness. No one rejects, dislikes, or avoids pleasure itself, because
                it is pleasure, but because those who do not know how to pursue pleasure rationally encounter consequences that are extremely painful. Nor again is there anyone who
                loves or pursues or desires to obtain pain of itself, because it is pain, but because occasionally circumstances occur in which toil and pain can procure him some
            </div>
        </div>
    );
}
