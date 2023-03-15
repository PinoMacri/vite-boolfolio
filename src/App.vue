<script>
import axios from "axios";
import ProjectCard from "./components/projects/ProjectCard.vue";
import AppHeader from "./components/macro-components/AppHeader.vue"
const apiBaseUrl = "http://localhost:8000/api";
export default {
  name: "App",
  components: { ProjectCard, AppHeader },
  data: () => ({
    projects: []
  }),
  methods: {
    fetchProjects() {
      axios.get(apiBaseUrl + "/projects").then(res => {
        this.projects = res.data;;
      })
    }
  },
  created() {
    this.fetchProjects();
  }
};
</script>

<template>
  <AppHeader />
  <main class="container">
    <div class="d-flex justify-content-center">
      <ProjectCard :projects="projects" />
    </div>
  </main>
</template>

<style ></style>
