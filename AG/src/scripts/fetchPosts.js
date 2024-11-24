export async function fetchPosts() {
    try {
      const response = await fetch("/src/data/posts.JSON");
      if (!response.ok) throw new Error("Failed to fetch posts");
      const data = await response.json();
      return data; // Return fetched data (posts)
    } catch (error) {
      console.error("Error fetching posts:", error);
      throw error;
    }
  }
  