<script>
import axios from "axios";
import ProjectCard from "../components/projects/ProjectCard.vue";
const apiBaseUrl = "http://localhost:8000/api";
export default {
    name: "HomePage",
    components: { ProjectCard },
    data: () => ({
        projects: []
    }), methods: {
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
    <main class="container">
        <div class="d-flex justify-content-center">
            <ProjectCard :projects="projects" />
        </div>
    </main>
</template>

<style></style>