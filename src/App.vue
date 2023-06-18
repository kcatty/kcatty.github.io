<template>
  <nav>
    <router-link to="/">Home</router-link> |
    <router-link to="/about">About</router-link>
  </nav>
  <h1 class="mb-4 text-3xl font-bold text-blue-600 underline">
    Tailwind CSS 3 with vue js 3
  </h1>
  <button class="px-6 py-2 text-sm text-green-100 bg-indigo-600 rounded">
    {{ $t("welcome") }}
  </button>
  <router-view />
</template>

<style>
#app {
  font-family: Avenir, Helvetica, Arial, sans-serif;
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
  color: #2c3e50;
}

nav a.router-link-exact-active {
  color: #42b983;
}
</style>
