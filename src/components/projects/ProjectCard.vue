<script>
export default {
    name: "ProjectCard",
    props: { projects: Array },
    data() {
        return {

        };
    },
    methods: {
        truncateDescription(description) {
            if (description.length > 50) {
                return description.substring(0, 250) + '...';
            } else {
                return description;
            }
        }
    }
};
</script>

<template>
    <div>
        <div v-if="projects.length" class="my-main d-flex my-cards container flex-wrap justify-content-center">

            <div v-for="project in projects" :key="project.id" class="card me-3 mb-4 text-center p-3" style="width: 19rem;">
                <div class="d-flex justify-content-between align-items-center">
                    <img class="pm22 mb-2" src="../../../public/22.png" alt="La mia immagine">
                    <p :style="{ backgroundColor: project.type.color }"
                        class="card-text type-technology my-type text-white">{{
                            project.type.label
                        }}</p>
                </div>
                <h5 :data-text="project.title" id="titolo" class="card-title mt-2">{{ project.title }}</h5>


                <img v-if="project.image" :src="project.image" class="card-img-top" alt="...">
                <div class="card-body p-0 d-flex flex-column justify-content-between">
                    <p class="mt-3 my-desc text-white">{{ truncateDescription(project.description) }}</p>

                    <div class="d-flex justify-content-center mt-2 mb-4">

                        <router-link class="btn btn-success ms-3"
                            :to="{ name: 'project-detail', params: { id: project.id } }"><i class="fa-solid fa-eye"></i>
                        </router-link>
                    </div>
                    <div class="d-flex justify-content-center flex-wrap ">
                        <p class="my-tech mb-3" v-for="technology in project.technologies" :key="technology.id">

                            <span class="card-text type-technology" :style="{ backgroundColor: technology.color }">{{
                                technology.label }}</span>
                        </p>
                    </div>


                </div>
            </div>
        </div>
        <div v-else>
            <h4 class="text-white">Non ci sono progetti</h4>
        </div>
    </div>
</template>

<style lang="scss" scoped>
.type-technology {
    border-radius: 5px;
    padding: 5px;
    font-weight: bold;
}

.my-desc {
    text-shadow: 1px 1px 2px black, 0 0 1em blue, 0 0 0.2em red
}

;


.pm22 {
    width: 100px;
}

.my-type {
    font-size: 12px;

}

.my-tech {
    font-size: 12px;
    margin: 0px 5px;
    margin-bottom: 10px;
}

.card {
    border-radius: 50px;
    margin-top: 20px;
    background: linear-gradient(-45deg, rgb(117, 90, 21), black, rgb(122, 94, 21), black);
    background-size: 400% 400%;
    animation: gradients 5s ease infinite;
}

@keyframes gradients {
    0% {
        background-position: 0% 50%;
    }

    50% {
        background-position: 100% 50%;
    }

    100% {
        background-position: 0% 50%;
    }
}

#titolo {
    position: relative;
    color: rgb(218, 218, 218);
}

#titolo::before {
    content: attr(data-text);
    position: absolute;
    overflow: hidden;
    white-space: nowrap;
    max-width: 15em;
    height: 100%;
    color: white;
    text-shadow: 1px 1px 30px rgb(255, 0, 85), 0 0 0.2em rgb(255, 208, 0);
    animation: movimento 13s infinite;
    animation-direction: alternate;
}

@keyframes movimento {
    0% {
        max-width: 0;
    }
}

@media screen and (max-width: 840px) {
    #titolo {
        font-size: 20px;
    }
}

@media screen and (max-width: 600px) {
    #titolo {
        font-size: 18px;
        left: -80px;
    }
}</style>