<template>
  <nav>
    <router-link to="/">Home</router-link>
    |
    <router-link to="/signup">Signup</router-link>
    |
    <router-link to="/login">Login</router-link>
    |
    <router-link to="/logout">Logout</router-link>
    |
    <router-link to="/posts">Posts</router-link>
    |
    <router-link to="/posts/new">New Post</router-link>
  </nav>
  <router-view />
</template>

<style>
#app {
  font-family: "Franklin Gothic Medium", "Arial Narrow", Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50;
}

nav {
  padding: 30px;
}

nav a {
  font-weight: bold;
  color: #4d18ed;
}

nav a.router-link-exact-active {
  color: #17d9c2;
}
</style>
