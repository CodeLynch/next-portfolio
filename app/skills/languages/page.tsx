import SkillsComponent from "../../components/SkillsComponent";
import Layout from "../../components/Layout";
import BubbleLanguages from "@/app/components/BubbleLanguanges";

export default function Home() {
    return (
        <Layout bubbleComponent={<BubbleLanguages imageUrl="/tala.png" />}>
            <SkillsComponent />
        </Layout>
    );
}
