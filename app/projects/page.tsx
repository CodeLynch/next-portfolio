import ProjectsComponent from "../components/ProjectsComponent";
import Layout from "../components/Layout";
import BubblePortrait from "../components/BubblePortrait";

export default function Home() {
    return (
        <Layout bubbleComponent={<BubblePortrait imageUrl="/tala.png" />}>
            <ProjectsComponent />
        </Layout>
    );
}
