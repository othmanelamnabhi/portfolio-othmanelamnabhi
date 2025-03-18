export async function getAllPostData() {
	const res = await fetch("https://gql.hashnode.com/", {
		method: "POST",
		headers: {
			"Content-Type": "application/json",
			Authorization: process.env.HASHNODE_TOKEN,
		},
		body: JSON.stringify({
			query: `query Publication($host: String = "thewannabedev.hashnode.dev") {
	publication(host: $host) {
		posts(first: 5) {
			edges {
				node {
					title
					brief
					slug
					publishedAt
					content {
						markdown
					}
				}
			}
		}
	}
}`,
		}),
	});
	const jsonResponse = await res.json();

	const posts = jsonResponse.data.publication.posts.edges;

	return posts.map((post) => ({
		params: {
			slug: post.node.slug,
			title: post.node.title,
			dateAdded: post.node.publishedAt,
			description: post.node.brief,
			contentMarkdown: post.node.content.markdown,
		},
	}));
}

export async function getAllPostSlugs() {
	const res = await fetch("https://gql.hashnode.com/", {
		method: "POST",
		headers: {
			"Content-Type": "application/json",
			Authorization: process.env.HASHNODE_TOKEN,
		},
		body: JSON.stringify({
			query: `query Publication($host: String = "thewannabedev.hashnode.dev") {
	publication(host: $host) {
		posts(first: 5) {
			edges {
				node {
					slug
				}
			}
		}
	}
}`,
		}),
	});
	const jsonResponse = await res.json();

	const posts = jsonResponse.data.publication.posts.edges;

	return posts.map((post) => ({
		params: {
			slug: post.node.slug,
		},
	}));
}
