<template>
    <div class="flex mt-3">
        <router-link to="/">
        <h1 class="flex m-5"><i class="fas fa-video"></i><strong class="ml-2"> MoviePlay</strong></h1>
        </router-link>
        <ul class="flex mt-5">

            <li><router-link to="/" class="ml-7">Inicio</router-link></li>
            <li><router-link to="/Genres/" class="ml-7">Géneros</router-link></li>
            
        </ul>
    </div>
</template>

<script>
    export default {
        
    }
</script>

<style lang="scss" scoped>

</style>