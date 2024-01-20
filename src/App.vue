<template>
  <div>
    
    <div class="container mx-auto">
        <div class="flex justify-between border-b border-gray-500  bg-gray-800">
            <Navbar/>
            <Searchbar/>
        </div>
        <router-view>
        </router-view>
        <div>
            <Footer/>
        </div>
    </div>
  </div>
</template>

<script>
import Navbar from './components/Navbar.vue';
import Searchbar from './components/Searchbar.vue';
import Footer from './components/Footer.vue';

export default {
    components: {
        Navbar,
        Searchbar,
        Footer
    },
    data() {
        return {
        };
    },       
}
</script>

<style scoped>

</style>
