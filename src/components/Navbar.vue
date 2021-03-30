<template>
  <nav class="navbar">
    <router-link :to="{ name: 'AllProjects' }">All Projects</router-link>
    <router-link :to="{ name: 'AddProject' }">Add Project</router-link>
  </nav>
</template>

<script>
export default {
  name: "Navbar",
};
</script>

<style scoped>
.navbar {
  text-align: center;
  margin: 50px auto;
}
.navbar a {
  display: inline-block;
  text-decoration: none;
  margin: auto 60px;
  font-size: 25px;
  font-weight: bold;
  color: #2c3e50;
}
a.router-link-active {
 color:steelblue;
}
</style>
