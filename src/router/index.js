import { createRouter, createWebHistory } from "vue-router";
import AllProjects from "../views/AllProjects.vue";
import AddProject from "../views/AddProject.vue";

const routes = [
  {
    path: "/",
    name: "AllProjects",
    component: AllProjects,
  },
  {
    path: "/add",
    name: "AddProject",
    component: AddProject,
  }
];

const router = createRouter({
  history: createWebHistory(process.env.BASE_URL),
  routes
});

export default router;
