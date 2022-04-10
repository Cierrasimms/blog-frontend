<template>
  <div class="home">
    <h1>Post Info</h1>
    <p>{{ post.title }}</p>
    <p>{{ post.body }}</p>
    <img v-bind:src="post.image" v-bind:alt="post.title" style="max-width: 250px" />
    <div></div>
    <router-link to="/posts">Back to all posts</router-link>
  </div>
</template>

<script>
import axios from "axios";

export default {
  data: function () {
    return {
      message: "Sup!",
      post: [],
    };
  },
  created: function () {
    this.showPosts();
  },
  methods: {
    showPosts() {
      axios.get(`/posts/${this.$route.params.id}`).then((response) => {
        this.post = response.data;
      });
    },
  },
};
</script>

<style></style>
