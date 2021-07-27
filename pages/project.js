import Layout from "@/components/Layout";
import Title from "@/components/Title";
import config from "@/data/config";
export default function projects() {
  return (
    <Layout title={config.page.project.header} description={`${config.page.project.title} - ${config.page.project.subtitle}`}>
      <Title title={config.page.project.title} subtitle={config.page.project.subtitle} />
    </Layout>
  );
}
