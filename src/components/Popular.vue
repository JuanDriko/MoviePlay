<template>
    <div class="container mx-auto">
        <div class="flex justify-between border-b border-gray-500">
        </div>
        <div class="m-5">
            <h2 class="uppercase mt-5 text-yellow-500 text-lg font-semibold m-5">Películas mas populares</h2>
            <div class="grid grid-cols-1 sm:grid-cols-4 md:cols-4 lg:cols-4">
                
                <div class="flex flex-col items-center justify-center p-5 shadow-lg m-5" v-for="movie in data" :key="movie.id">    
                    <router-link :to="{ name: 'Details', params: { id: movie.id} }">                
                        <img :src="`${this.imagePath}${movie.poster_path}`" class="hover:opacity-75 transition easy-in-out duration-150">
                    </router-link>
                    <h2 class="text-yellow-500">{{ movie.title }}</h2>
                    <h5>{{ movie.release_date }}</h5>
                    
                </div>            
            </div>
            
        </div>        
    </div>
</template>

<script>

export default {
    data() {
        return {
            url: 'https://api.themoviedb.org/3',
            apiKey: 'api_key=01db13efe2231d46ff3e5e7ac559558a',
            imagePath: 'https://image.tmdb.org/t/p/original/',
            imageLenguaje:'https://api.themoviedb.org/3/movie/550?append_to_response=images&language=en-US&include_image_language=es,null',
            data: [],
        };
    },
    mounted() {
        this.getMovies();
    },
    methods: {
        getMovies() {
            fetch(`${this.url}/movie/popular?${this.apiKey}`)
                .then(response => response.json())                 
                .then(movieData => {
                    this.data = movieData.results;
                    console.log(this.data);
                })
                .catch(error => console.error(error));
        },
    },        
}
</script>

<style lang="scss" scoped>
</style>