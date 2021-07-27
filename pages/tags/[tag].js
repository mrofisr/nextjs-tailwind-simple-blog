import Layout from "@/components/Layout";
import ListLayout from "@/components/ListLayout";
import generateRss from "@/lib/generate-rss";
import { getAllFilesFrontMatter } from "@/lib/mdx";
import { getAllTags } from "@/lib/tags";
import kebabCase from "@/lib/utils/kebabCase";
import fs from "fs";
import path from "path";

const root = process.cwd();

export async function getStaticPaths() {
  const tags = await getAllTags("posts");

  return {
    paths: Object.keys(tags).map((tag) => ({
      params: {
        tag,
      },
    })),
    fallback: false,
  };
}

export async function getStaticProps({ params }) {
  const allPosts = await getAllFilesFrontMatter("posts");
  const filteredPosts = allPosts.filter(
    (post) =>
      post.draft !== true &&
      post.tags.map((t) => kebabCase(t)).includes(params.tag)
  );

  // rss
  const rss = generateRss(filteredPosts, `tags/${params.tag}/feed.xml`);
  const rssPath = path.join(root, "public", "tags", params.tag);
  fs.mkdirSync(rssPath, { recursive: true });
  fs.writeFileSync(path.join(rssPath, "feed.xml"), rss);

  return { props: { posts: filteredPosts, tag: params.tag } };
}

export default function Tags({ posts, tag }) {
  const title = tag[0].toUpperCase() + tag.split(" ").join("-").slice(1);
  return (
    <Layout title={`${tag} - @mrofisr`} description={`${title} - @mrofisr`}>
      <ListLayout posts={posts} title={title} />
    </Layout>
  );
}
