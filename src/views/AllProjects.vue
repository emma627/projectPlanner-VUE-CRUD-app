<template>
  <div class="home">
    <div v-if="projects.length">
      <div v-for="project in projects" :key="project.id">
        <singleProject
          @delete="handleDelete"
          @toggle="handleToggle"
          :project="project"
        />
      </div>
    </div>
  </div>
</template>

<script>
import singleProject from "../components/singleProject.vue";
export default {
  name: "AllProjects",
  components: {
    singleProject,
  },
  data() {
    return {
      projects: [],
    };
  },
  mounted() {
    fetch("http://localhost:5000/projects")
      .then((res) => res.json())
      .then((data) => (this.projects = data))
      .catch((err) => console.log(err));
  },
  methods: {
    handleDelete(id) {
      this.projects = this.projects.filter((project) => project.id !== id);
    },
    handleToggle(id) {
      let projectToggleComplete = this.projects.find(project=>{
        return project.id === id
      })
      projectToggleComplete.complete = !projectToggleComplete.complete
    },
  },
};
</script>
