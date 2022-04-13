<template>
  <nav class="navbar navbar-light" style="background-color: #8080ff">
    <div class="container-fluid">
      <a class="navbar-brand" href="#">Navbar</a>
      <button
        class="navbar-toggler"
        type="button"
        data-bs-toggle="collapse"
        data-bs-target="#navbarNav"
        aria-controls="navbarNav"
        aria-expanded="false"
        aria-label="Toggle navigation"
      >
        <span class="navbar-toggler-icon"></span>
      </button>
      <div class="collapse navbar-collapse" id="navbarNav">
        <ul class="navbar-nav">
          <li class="nav-item">
            <a class="nav-link active" aria-current="page" href="#">Home</a>
          </li>
          <li class="nav-item">
            <a class="nav-link" href="/posts">Posts</a>
          </li>
          <li class="nav-item">
            <a class="nav-link" href="/posts/new">New Post</a>
          </li>
          <li v-if="!isLoggedIn" key="" class="nav-item">
            <a class="nav-link" href="/signup">Sign Up</a>
          </li>
          <li v-if="!isLoggedIn" class="nav-item">
            <a class="nav-link" href="/login">Login</a>
          </li>
          <li v-if="isLoggedIn" class="nav-item">
            <a class="nav-link" href="/logout">Logout</a>
          </li>
        </ul>
      </div>
    </div>
  </nav>

  <router-view />
</template>

<script>
export default {
  data: function () {
    return {
      isLoggedIn: false,
    };
  },
  watch: {
    $route: function () {
      this.isLoggedIn = !!localStorage.jwt;
    },
  },
};
</script>

<style>
h1 {
  font-family: "Century Gothic", CenturyGothic, AppleGothic, sans-serif;
  font-size: 24px;
  font-style: normal;
  font-variant: normal;
  font-weight: 700;
  line-height: 26.4px;
}
h3 {
  font-family: "Century Gothic", CenturyGothic, AppleGothic, sans-serif;
  font-size: 14px;
  font-style: normal;
  font-variant: normal;
  font-weight: 700;
  line-height: 15.4px;
}
p {
  font-family: "Century Gothic", CenturyGothic, AppleGothic, sans-serif;
  font-size: 14px;
  font-style: normal;
  font-variant: normal;
  font-weight: 400;
  line-height: 20px;
}
blockquote {
  font-family: "Century Gothic", CenturyGothic, AppleGothic, sans-serif;
  font-size: 21px;
  font-style: normal;
  font-variant: normal;
  font-weight: 400;
  line-height: 30px;
}
pre {
  font-family: "Century Gothic", CenturyGothic, AppleGothic, sans-serif;
  font-size: 13px;
  font-style: normal;
  font-variant: normal;
  font-weight: 400;
  line-height: 18.5714px;
}
body {
  background-image: url("https://media.istockphoto.com/vectors/cute-corgi-butt-welsh-corgi-dog-looking-back-seamless-pattern-vector-vector-id1231299531?k=20&m=1231299531&s=612x612&w=0&h=6nPTs-0CkOo36dQkRGsZIBDmq05qAFGWIhrT7Wd3i78=");
}
</style>
