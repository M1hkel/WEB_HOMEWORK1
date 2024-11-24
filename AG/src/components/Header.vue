<template>
  <div class="header">
    <nav>
      <ul class="nav-links">
        <li>
          <router-link to="/">Home</router-link>
        </li>
        <li>
          <router-link to="/signup">Sign Up</router-link>
        </li>
      </ul>
    </nav>
  </div>
</template>
  
  <script>
  export default {
    name: "Header",
  };
  </script>
  
  <style scoped>
  @import "@/assets/header.css";
  </style>
  