import { createRouter, createWebHistory } from "vue-router";
import HomePage from "../pages/HomePage.vue";
import ContactPage from "../pages/ContactPage.vue";
import NotFoundPage from "../pages/NotFoundPage.vue";
import ProjectDetailPage from "../pages/ProjectDetailPage.vue";
const router = createRouter({
    history: createWebHistory(),
    linkExactActiveClass: "active",
    routes: [
        { path: "/", name: "home", component: HomePage },
        { path: "/contact", name: "contact", component: ContactPage },
        { path: "/projects/:id", name: "project-detail", component: ProjectDetailPage },
        { path: "/:patchMatch(.*)*", name: "notfound", component: NotFoundPage },
    ]
});
export { router };