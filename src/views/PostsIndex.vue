<template>
  <div class="home">
    <h1>{{ message }}</h1>
    <div v-for="post in posts" v-bind:key="post.id">
      <h2>{{ post.title }}</h2>
      <p>{{ post.body }}</p>
      <router-link v-bind:to="`/posts/${post.id}`">
        <img v-bind:src="post.image" v-bind:alt="post.title" style="max-width: 250px" />
      </router-link>
    </div>
  </div>
</template>

<script>
import axios from "axios";

export default {
  data: function () {
    return {
      message: "My Cool Blog",
      posts: [],
    };
  },
  created: function () {
    this.indexPosts();
  },
  methods: {
    indexPosts() {
      axios.get("/posts").then((response) => {
        console.log(response.data);
        this.posts = response.data;
      });
    },
  },
};
</script>

<style>
h1 {
  color: rgb(0, 0, 0);
  font-family: Georgia;
}
h2 {
  color: rgb(0, 0, 0);
  font-family: Arial, Helvetica, sans-serif;
}
</style>
