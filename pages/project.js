import Layout from "@/components/Layout";
import Title from "@/components/Title";

const title = "Projects 📚";
const subtitle =
  "A selection of projects I've worked on";
export default function projects() {
  return (
    <Layout
      title="Project - @mrofisr"
      description={`${title} - ${subtitle}`}
    >
      <Title title={title} subtitle={subtitle} />
    </Layout>
  );
}
