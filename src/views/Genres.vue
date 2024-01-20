<template>
    <div class="container mx-auto min-h-screen">
        <div v-if="genre" class="grid grid-cols-1 sm:grid-cols-4 md:cols-4 lg:cols-4">
            <button class="flex justify-center bg-gray-800 rounded-full p-5 shadow-lg m-5 w-40" v-for="genre in genresData" :key="genre.id" @click="getGenreMovie(genre.id)">
                <h2 class="text-yellow-500">{{ genre.name }}</h2>
            </button>
        </div>

        <div v-if="movieGenre.length" class="grid grid-cols-1 sm:grid-cols-4 md:cols-4 lg:cols-4">
            <div class="flex flex-col items-center justify-center p-5 shadow-lg m-5" v-for="movie in movieGenre" :key="movie.id">
                <router-link :to="{ name: 'Details', params: { id: movie.id} }">                
                    <img :src="`https://image.tmdb.org/t/p/original/${movie.poster_path}`" class="w-1/2 mx-auto" />
                </router-link>
                <h2 class="text-yellow-500">{{ movie.title }}</h2>
                <h5>{{ movie.release_date }}</h5>
            </div>
        </div>
    </div>
</template>

<script>
export default {
    data() {
        return {
            genre:true,
            genresData: [],
            movieGenre: [] 
        };
    },
    methods: {
        getGenres() {
            fetch(`https://api.themoviedb.org/3/genre/movie/list?api_key=01db13efe2231d46ff3e5e7ac559558a`)
                .then(response => response.json())
                .then(data => {
                    this.genresData = data.genres;
                    console.log('genresData', this.genresData);                  
                })
                .catch(error => console.error(error));
        },
        getGenreMovie(genreId) {
            fetch(`https://api.themoviedb.org/3/discover/movie?api_key=01db13efe2231d46ff3e5e7ac559558a&with_genres=${genreId}`)
                .then(response => response.json())
                .then(data => {
                    this.movieGenre = data.results;
                    console.log('movieGenre', this.movieGenre);
                })
                .catch(error => console.error(error));
                this.genre = false
        },
    },
    mounted() {
        this.getGenres();
    }
};
</script>

<style scoped>
</style>
