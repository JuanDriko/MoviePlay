<template>
    <div class="container mx-auto min-h-screen">
        <div class="flex justify-between border-b border-gray-500">
        </div>
        <div class="m-5">
            <div v-if="searchData.length" class="grid grid-cols-1 sm:grid-cols-4 md:cols-4 lg:cols-4">
                <div class="flex flex-col items-center justify-center p-5 shadow-lg m-5" v-for="movie in searchData" :key="movie.id">    
                    <router-link :to="{ name: 'Details', params: { id: movie.id} }">                
                        <img :src="`https://image.tmdb.org/t/p/original/${movie.poster_path}`" class="w-1/2 mx-auto" />
                    </router-link>
                    <h2 class="text-yellow-500">{{ movie.title }}</h2>
                    <h5>{{ movie.release_date }}</h5>
                </div>            
            </div>
            
            <h2 v-else class="uppercase mt-5 text-yellow-500 text-lg font-semibold m-5">No se encontraron resultados, inténtelo nuevamente</h2>
            
        </div>        
    </div>
</template>

<script>
export default {
    props: {
        querySearch: String
    },
    data() {
        return {
            searchData: []
        }
    },
    methods: {
        getSearch() {
            fetch(`https://api.themoviedb.org/3/search/movie?api_key=01db13efe2231d46ff3e5e7ac559558a&query=${encodeURIComponent(this.querySearch)}`)
                .then(response => response.json())                 
                .then(search => {
                    this.searchData = search.results.filter(movie => movie.title.toLowerCase().includes(this.querySearch.trim().toLowerCase()));
                    console.log('searchdata', this.searchData);                  
                })
                .catch(error => console.error(error));
        },
    },
    watch: {
        querySearch(newQuerySearch, oldQuerySearch) {
            this.searchData = [];
            this.getSearch();
        },
    },
    mounted() {
        this.querySearch
        this.getSearch();
    },
};
</script>

<style scoped>
</style>
