<template>
    <div class="post">
      <div class="post-header">
        <img :src="post.author.avatar" alt="Author's Avatar" />
        <div>
          <h3>{{ post.author.name }}</h3>
          <span>{{ post.author.postDate }}</span>
        </div>
      </div>
      <img v-if="post.image" :src="post.image" alt="Post image" class="post-image" />
      <p class="post-content">{{ post.content }}</p>
      <div class="post-footer">
        <div class="likes">
          <button @click="likePost">👍 {{ post.likes }}</button>
        </div>
        <div class="comments">💬 {{ post.comments }}</div>
      </div>
    </div>
  </template>
  
  <script>
  export default {
    name: "Post",
    props: {
      post: Object,
    },
    methods: {
      likePost() {
        this.$emit("like"); 
      },
    },
  };
  </script>
  
  <style scoped>
  @import "@/assets/post.css";
  </style>
  