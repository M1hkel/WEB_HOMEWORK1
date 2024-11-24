<template>
  <div>
    <form @submit.prevent="validateForm">
      <label>
        Username:
        <input v-model="username" type="text" required />
      </label>
      <label>
        Password:
        <input v-model="password" type="password" required />
      </label>
      <button type="submit">Sign Up</button>
      <p v-if="error" v-html="error"></p> 
    </form>
  </div>
</template>

<script>
import { validatePassword } from '../scripts/passwordValidation';

export default {
  data() {
    return {
      username: "",
      password: "",
      error: "",
    };
  },
  methods: {
    validateForm() {
      const conditions = validatePassword(this.password);
      if (conditions.length) {
        this.error = `Password is not valid: <br>${conditions.join("<br>")}`;
      } else {
        this.error = "";

        //Valid password redirects to home
        const router = this.$router;
        router.push("/");
      }
    },
  },
};
</script>
