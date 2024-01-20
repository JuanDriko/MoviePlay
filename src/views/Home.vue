<template>
    <div class="container mx-auto">
        <div>
            <Popular/>
        </div>
    </div>
</template>

<script>
import Navbar from '../components/Navbar.vue';
import Searchbar from '../components/Searchbar.vue';
import Popular from '../components/Popular.vue';
import Footer from '../components/Footer.vue';

export default {
    components: {
        Navbar,
        Searchbar,
        Popular,
        Footer
    },
    data() {
        return {
        };
    },       
}
</script>

<style lang="scss" scoped>
</style>

