<template>
  <div>
    <h1>Posts</h1>
    <div v-if="posts && posts.length > 0">
      <div v-for="post in posts" :key="post.postId">
        <Post :post="post" @like="likePost(post.postId)" />
      </div>
    </div>
    <div v-else>
      <p>No posts available.</p>
    </div>
    <button @click="resetAllLikes">Reset Likes</button>
  </div>
</template>

<script>
import { mapGetters, mapActions } from 'vuex';
import Post from '@/components/Post.vue';

export default {
  name: 'HomeView',
  components: {
    Post,
  },
  computed: {
    ...mapGetters(['getPosts']),
    posts() {
      return this.getPosts; 
    },
  },
  methods: {
    ...mapActions(['addLike', 'resetLikes']),
    likePost(postId) {
      this.addLike(postId); // Trigger like in Vuex store
    },
    resetAllLikes() {
      this.resetLikes(); // Reset likes for all posts
    },
  },
  mounted() {
    this.$store.dispatch('fetchPosts'); // Fetch posts on component mount
  },
};
</script>
