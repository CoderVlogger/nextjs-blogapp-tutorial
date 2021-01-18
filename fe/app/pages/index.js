import Link from "next/link";

function HomePage() {
  return (
    <div>
      <h1>Welcome to demo Blog Posts application.</h1>

      <div>Current features:</div>
      <div>
        <ul>
          <li>
            <Link href={`/posts`}>
              <a>
                Posts - list and details page for posts.
              </a>
            </Link>
          </li>
        </ul>
      </div>
    </div>
  );
}

export default HomePage;
