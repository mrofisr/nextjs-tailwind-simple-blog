import Layout from "@/components/Layout";
import Title from "@/components/Title";
import { getAllFilesFrontMatter } from "@/lib/mdx";
import ListLayout from "@/components/ListLayout";
import { POSTS_PER_PAGE } from "../../blog";

export async function getStaticPaths() {
  const totalPosts = await getAllFilesFrontMatter("posts");
  const totalPages = Math.ceil(totalPosts.length / POSTS_PER_PAGE);
  const paths = Array.from({ length: totalPages }, (_, i) => ({
    params: { page: (i + 1).toString() },
  }));

  return {
    paths,
    fallback: false,
  };
}

export async function getStaticProps(context) {
  const {
    params: { page },
  } = context;
  const posts = await getAllFilesFrontMatter("posts");
  const pageNumber = parseInt(page);
  const initialDisplayPosts = posts.slice(
    POSTS_PER_PAGE * (pageNumber - 1),
    POSTS_PER_PAGE * pageNumber
  );
  const pagination = {
    currentPage: pageNumber,
    totalPages: Math.ceil(posts.length / POSTS_PER_PAGE),
  };

  return {
    props: {
      posts,
      initialDisplayPosts,
      pagination,
    },
  };
}
const title = "Blog ✍️";
const subtitle =
  "I share anything that may help others, technologies I'm using and cool things I've made.";
export default function PostPage({ posts, initialDisplayPosts, pagination }) {
  return (
    <>
      <Layout title="Blog - @mrofisr" description={`${title} - ${subtitle}`}>
        <Title title={title} subtitle={subtitle} />
        <ListLayout
          posts={posts}
          initialDisplayPosts={initialDisplayPosts}
          pagination={pagination}
          title="All Posts"
        />
      </Layout>
    </>
  );
}
