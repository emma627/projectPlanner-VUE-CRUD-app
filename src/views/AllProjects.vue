<template>
  <div class="home">
    <div v-if="projects.length">
      <div v-for="project in projects" :key="project.id">
        <singleProject :project="project"/>
      </div>
    </div>
  </div>
</template>

<script>
import singleProject from "../components/singleProject.vue";
export default {
  name: "AllProjects",
  components: {
    singleProject
  },
  data() {
    return {
      projects: [],
    };
  },
  mounted() {
    fetch('http://localhost:5000/projects')
      .then(res => res.json())
      .then(data => this.projects = data)
      .catch(err => console.log(err))
  },
};
</script>
