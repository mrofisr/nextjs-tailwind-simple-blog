import Layout from "@/components/Layout";
import Title from "@/components/Title";
import { getAllFilesFrontMatter } from '@/lib/mdx'
import ListLayout from "@/components/ListLayout";

const title = "Blog ✍️";
const subtitle =
  "I share anything that may help others, technologies I'm using and cool things I've made.";

export const POSTS_PER_PAGE = 5;

export async function getStaticProps() {
  const posts = await getAllFilesFrontMatter("posts");
  const initialDisplayPosts = posts.slice(0, POSTS_PER_PAGE);
  const pagination = {
    currentPage: 1,
    totalPages: Math.ceil(posts.length / POSTS_PER_PAGE),
  };

  return { props: { initialDisplayPosts, posts, pagination } };
}

export default function blog({ posts, initialDisplayPosts, pagination }) {
  return (
    <Layout title="Blog - @mrofisr" description={`${title} - ${subtitle}`}>
      <Title title={title} subtitle={subtitle} />
      <ListLayout
        posts={posts}
        initialDisplayPosts={initialDisplayPosts}
        pagination={pagination}
        title="All Posts"
      />
    </Layout>
  );
}
