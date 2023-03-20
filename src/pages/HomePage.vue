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
    <head>
        <meta charset="utf-8">
        <meta name="viewport" content="width=device-width, initial-scale=1">
        <link rel="dns-prefetch" href="//fonts.gstatic.com">
        <link href="https://fonts.googleapis.com/css?family=Nunito" rel="stylesheet">
        <link rel="stylesheet" href="https://cdnjs.cloudflare.com/ajax/libs/font-awesome/6.3.0/css/all.min.css"
            integrity="sha512-SzlrxWUlpfuzQ+pcUCosxcglQRNAq/DZjVsC0lE40xsADsfeQoEypE+enwcOiGjk/bSuGGKHEyjSoQ1zVisanQ=="
            crossorigin="anonymous" referrerpolicy="no-referrer" />

    </head>
    <div class="my-main">
        <main class="container">
            <div class="d-flex justify-content-center">
                <ProjectCard :projects="projects" />
            </div>
        </main>
    </div>
</template>

<style>
.my-main {
    background-color: black;
}
</style>