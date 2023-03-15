<script>
import axios from "axios";
import ProjectCard from "./components/projects/ProjectCard.vue";
const apiBaseUrl = "http://localhost:8000/api";
export default {
  name: "App",
  components: { ProjectCard },
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
  <main>
    <ProjectCard :projects="projects" />
  </main>
</template>

<style ></style>
