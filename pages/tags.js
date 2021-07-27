import Layout from "@/components/Layout";
import Title from "@/components/Title";
import { getAllTags } from "@/lib/tags";
import kebabCase from "@/lib/utils/kebabCase";
import Link from "next/dist/client/link";
import config from "@/data/config";

export async function getStaticProps() {
  const tags = await getAllTags("posts");

  return { props: { tags } };
}

export default function Tags({ tags }) {
  const sortedTags = Object.keys(tags).sort((a, b) => tags[b] - tags[a]);
  return (
    <Layout title={config.page.tags.header} description={`${config.page.tags.title} - ${config.page.tags.subtitle}`}>
      <Title title={config.page.tags.title} subtitle={config.page.tags.subtitle} />
      <div class="my-3 flex flex-wrap -m-1">
        {Object.keys(tags).length === 0 && "No tags found."}
        {sortedTags.map((t) => {
          return (
            <Link key={t} href={`/tags/${kebabCase(t)}`}>
              <a className="m-1 bg-gray-300 hover:bg-gray-400 rounded-full px-2 font-bold text-sm leading-loose cursor-pointer">
                {t}
              </a>
            </Link>
          );
        })}
      </div>
    </Layout>
  );
}
