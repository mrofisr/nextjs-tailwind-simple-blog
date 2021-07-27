import fs from "fs";
import { MDXLayoutRenderer } from "@/components/MDXComponents";
import {
  formatSlug,
  getAllFilesFrontMatter,
  getFileBySlug,
  getFiles,
} from "@/lib/mdx";
import generateRss from "@/lib/generate-rss";

export async function getStaticPaths() {
  const posts = getFiles("posts");
  return {
    paths: posts.map((p) => ({
      params: {
        slug: formatSlug(p).split("/"),
      },
    })),
    fallback: false,
  };
}

export async function getStaticProps({ params }) {
  const allPosts = await getAllFilesFrontMatter("posts");
  const postIndex = allPosts.findIndex(
    (post) => formatSlug(post.slug) === params.slug.join("/")
  );
  const prev = allPosts[postIndex + 1] || null;
  const next = allPosts[postIndex - 1] || null;
  const post = await getFileBySlug("posts", params.slug.join("/"));
  // rss
  const rss = generateRss(allPosts);
  fs.writeFileSync("./public/feed.xml", rss);

  return { props: { post, prev, next } };
}

export default function Blog({ post, prev, next }) {
  const { mdxSource, frontMatter } = post;

  return (
    <>
      <MDXLayoutRenderer
        mdxSource={mdxSource}
        frontMatter={frontMatter}
        prev={prev}
        next={next}
      />
    </>
  );
}
