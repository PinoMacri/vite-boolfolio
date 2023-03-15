<script>
export default {
    name: "ProjectCard",
    props: { projects: Array }
};
</script>

<template>
    <ul v-if="projects.length >= 1">
        <li v-for="project in projects" :key="project.id">{{ project.title }}</li>
    </ul>
    <h4 v-else>Non ci sono progetti</h4>
</template>

<style></style>