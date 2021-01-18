import Link from 'next/link'

function PostsPage({ posts }) {
  return (
    <div>
      <div>List of posts:</div>
      <div>
        {/* {posts} */}
        <p>Posts as a string:</p>
        {JSON.stringify(posts)}
      </div>
      
      <ul>
        {posts.map(({id, title}) => (
          <li>
            <Link href={`/posts/${encodeURIComponent(id)}`}>
              <a>ID#{id} {title}</a>
            </Link>
          </li>
        ))}
      </ul>
    </div>
  );
}

// export async function getServerSideProps() {
//   // Fetch data from external API.
//   const res = await fetch(`http://localhost:3000/posts/`);
//   const data = await res.json();

//   // Check if we got the response.
//   if (!data) {
//     return {
//       redirect: {
//         destination: '/',
//         permanent: false,
//       },
//     }
//   }

//   // Pass data to the page via props.
//   return { 
//     props: { posts:data["posts"] }
//   };
// }

/* Build time generation */

export async function getStaticProps() {  
  const res = await fetch('http://localhost:3000/posts/')
  const data = await res.json()

  return {
    props: {
      posts: data["posts"],
    },
  }
}

// export async function getStaticPaths() {
//   // Call an external API endpoint to get posts
//   const res = await fetch('http://localhost:3000/posts/')
//   const posts = await res.json()

//   // Get the paths we want to pre-render based on posts
//   const paths = posts.map((post) => `/posts/${post.id}`)

//   // We'll pre-render only these paths at build time.
//   // { fallback: false } means other routes should 404.
//   return { paths, fallback: false }
// }

export default PostsPage;
