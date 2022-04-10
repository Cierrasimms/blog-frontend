<template>
  <div class="home">
    <h1>Post Info</h1>
    <h2>{{ post.title }}</h2>
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

<style>
h1 {
  color: rgb(61, 1, 101);
  text-shadow: 2px 2px #00eeff;
}
h2 {
  color: rgb(107, 11, 170);
}
p {
  color: rgb(91, 18, 180);
}
div {
  background-color: rgb(253, 184, 214);
}
</style>
