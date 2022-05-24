export async function getAllPostData() {
  const res = await fetch("https://api.hashnode.com/", {
    method: "POST",
    headers: {
      "Content-Type": "application/json",
      Authorization: process.env.HASHNODE_TOKEN,
    },
    body: JSON.stringify({
      query:
        'query {user(username: "thewannabedev") {publication {posts(page: 0) {title brief slug dateAdded contentMarkdown}}}}',
    }),
  });
  const jsonResponse = await res.json();

  const posts = jsonResponse.data.user.publication.posts;

  return posts.map((post) => {
    return {
      params: {
        slug: post.slug,
        title: post.title,
        dateAdded: post.dateAdded,
        description: post.brief,
        contentMarkdown: post.contentMarkdown,
      },
    };
  });
}

export async function getAllPostSlugs() {
  const res = await fetch("https://api.hashnode.com/", {
    method: "POST",
    headers: {
      "Content-Type": "application/json",
      Authorization: "0ab3bb7b-9df8-47e0-9dad-e1fcf82c9f60",
    },
    body: JSON.stringify({
      query:
        'query {user(username: "thewannabedev") {publication {posts(page: 0) {slug}}}}',
    }),
  });
  const jsonResponse = await res.json();

  const posts = jsonResponse.data.user.publication.posts;

  return posts.map((post) => {
    return {
      params: {
        slug: post.slug,
      },
    };
  });
}
