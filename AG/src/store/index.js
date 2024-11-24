
import { createStore } from 'vuex';

export default createStore({
  state: {
    posts: [],
  },
  mutations: {
    setPosts(state, posts) {
      state.posts = posts;
    },
    addLike(state, postId) {
      const post = state.posts.find((p) => p.postId === postId);
      if (post) post.likes++;
    },
    resetLikes(state) {
      state.posts.forEach((post) => (post.likes = 0));
    },
  },
  actions: {
    fetchPosts({ commit }) {
      fetch("/src/data/posts.json")
        .then((response) => response.json())
        .then((data) => {
          commit("setPosts", data);
        })
        .catch((error) => console.error("Error fetching posts:", error));
    },
    addLike({ commit }, postId) {
      commit("addLike", postId);
    },
    resetLikes({ commit }) {
      commit("resetLikes");
    },
  },
  getters: {
    getPosts(state) {
      return state.posts;
    },
  },
});
