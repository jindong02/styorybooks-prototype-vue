<template>
  <router-view/>
</template>

<style>
body {
  margin: 0;
  background-color: #424242;
}
#app {
  font-family: Avenir, Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  color: #2c3e50;
}
a {
  text-decoration: none;
}
nav {
  padding: 30px;
}
.svg-inline--fa.fa-magnifying-glass {
  color: #f65261;
}
nav a {
  font-weight: bold;
  color: #2c3e50;
}

nav a.router-link-exact-active {
  color: #42b983;
}
</style>
