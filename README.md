# Next.js Tutorial

Demo project to learn and create an example Next.js project. The project consists of two parts: frontend and backend.

- Node.js and Express.js for backend
- Next.js for frontend

Project structure:

```
be          folder for backend (Express.js app)
    app     root for backend app
fe          folder for frontend (Next.js app)
    app     root for frontend app
```

## Current Features

1. Backend Express.js app with two endpoints - `/posts` and `/posts/[ID]`.
2. Frontend and Backend communincation over JSON API.
3. Frontend Next.js app with index, posts, and post by ID pages.
4. Two different implementation for Next.js pages:
    1. Static Generation - implementation of static generation functions (see `fe/app/pages/posts.js` and `fe/app/pages/posts/[id].js`).
    2. Server-Side Rendering - implementation of server-side rendering functions (see same files).
