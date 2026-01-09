import AboutComponent from "./components/AboutComponent";
import Layout from "./components/Layout";
import BubblePortrait from "./components/BubblePortrait";

export default function Home() {
    return (
        <Layout bubbleComponent={<BubblePortrait imageUrl="/tala.png" />}>
            <AboutComponent />
        </Layout>
    );
}
