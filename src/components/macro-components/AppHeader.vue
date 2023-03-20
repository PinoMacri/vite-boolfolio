<script>
</script>

<template>
    <nav class="navbar navbar-expand-lg bg-body-tertiary">
        <div class="container-fluid">
            <RouterLink to="/" class="navbar-brand "><img class="my-pm" src="../../../public/22.png" alt=""></RouterLink>
            <button class="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarText"
                aria-controls="navbarText" aria-expanded="false" aria-label="Toggle navigation">
                <span class="navbar-toggler-icon"></span>
            </button>
            <div class="collapse navbar-collapse" id="navbarText">
                <ul class="navbar-nav me-auto mb-2 mb-lg-0">
                    <li class="nav-item">
                        <router-link class="nav-link" :to="{ name: 'home' }">Home</router-link>
                    </li>
                    <li class="nav-item">
                        <router-link class="nav-link" :to="{ name: 'contact' }">Contact</router-link>
                    </li>
                </ul>
            </div>
        </div>
    </nav>
</template>

<style>
.my-pm {
    width: 150px;
}

.navbar {
    margin-top: 10px;
    box-shadow: 15px -10px 145px 15px rgb(170, 25, 25), 0 0 1em blue, 0 0 0.2em red;
}
</style>