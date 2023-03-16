<script>
export default {
    name: "ProjectCard",
    props: { projects: Array }
};
</script>

<template>
    <div v-if="projects.length" class="d-flex">
        <div v-for="project in projects" :key="project.id" class="card me-3 text-center p-3" style="width: 18rem;">
            <img :src="project.image" class="card-img-top" alt="...">
            <div class="card-body p-0">
                <h5 class="card-title">{{ project.title }}</h5>
                <p class="card-text">{{ project.description }}</p>
                <a :href="project.github" class="btn btn-primary">Git-Hub</a>
                <router-link class="btn btn-primary ms-3"
                    :to="{ name: 'project-detail', params: { id: project.id } }">Vedi</router-link>
            </div>
        </div>
    </div>
    <div v-else>
        <h4>Non ci sono progetti</h4>
    </div>
</template>

<style></style>