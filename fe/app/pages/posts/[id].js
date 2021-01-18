import { useRouter } from "next/router";
import Link from "next/link";
// import * as MyLink from 'next/link'

const Post = ({ post: { title, author } }) => {
  return (
    <div>
      <h1>{title}</h1>
      <dl>
        <dt>Author:</dt>
        <dd>{author}</dd>
      </dl>

      <Link href="/posts">
        <a>Go back</a>
      </Link>
    </div>
  );
};

// export async function getServerSideProps(context) {
//   const { id } = context.query;

//   const res = await fetch(`http://localhost:3000/posts/${id}/`);
//   const data = await res.json();

//   return {
//     props: { post:data["post"] },
//   };
// }

export async function getStaticProps({params}) {
  console.log(params);
  
  const { id } = params;

  const res = await fetch(`http://localhost:3000/posts/${id}/`);
  const data = await res.json();

  return {
    props: { post: data["post"] },
  };
}

export async function getStaticPaths() {
  const res = await fetch("http://localhost:3000/posts/");
  const data = await res.json();

  // Get the paths we want to pre-render based on posts
  const paths = data["posts"].map((post) => `/posts/${post.id}`);

  // We'll pre-render only these paths at build time.
  // { fallback: false } means other routes should 404.
  return { paths, fallback: false };
}

export default Post;
