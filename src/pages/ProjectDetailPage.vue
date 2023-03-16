<script>
import axios from "axios";
const apiBaseUrl = "http://127.0.0.1:8000/api/";
export default {
    name: "ProjectDetailpage",
    data: () => ({
        project: null
    }), methods: {
        getProject() {
            const endpoint = apiBaseUrl + 'projects/' + this.$route.params.id;
            axios.get(endpoint).then(res => {
                this.project = res.data;
            }).catch(err => {
                console.log(err);
            })
        },
    }, created() {
        this.getProject();
    }
}
</script>

<template>
    <div v-if="project" class="card me-3 text-center p-3" style="width: 18rem;">
        <img :src="`http://localhost:8000/storage/${project.image}`" class="card-img-top" alt="...">
        <div class="card-body p-0">
            <h5 class="card-title">{{ project.title }}</h5>
            <p class="card-text">{{ project.description }}</p>
            <a :href="project.github" class="btn btn-primary">Git-Hub</a>
        </div>
    </div>
</template>