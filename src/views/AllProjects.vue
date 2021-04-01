<template>
  <div class="home">
    <FilterNav @changeFilter="current=$event" :current="current"/>
    <div v-if="projects.length">
      <div v-for="project in filteredProjects" :key="project.id">
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
import FilterNav from "../components/FilterNav.vue";

export default {
  name: "AllProjects",
  components: {
    singleProject,FilterNav
  },
  data() {
    return {
      projects: [],
      current:"all"
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
      let projectToggleComplete = this.projects.find((project) => {
        return project.id === id;
      });
      projectToggleComplete.complete = !projectToggleComplete.complete;
    },
  },
  computed:{
    filteredProjects(){
      if(this.current==="completed"){
        return this.projects.filter(project=>project.complete)
      }
      if(this.current==="ongoing"){
        return this.projects.filter(project=>!project.complete)
      }
      return this.projects
    }
  }
};
</script>
