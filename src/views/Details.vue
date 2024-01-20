<template>
  <div class="container mx-auto p-10 min-h-screen">
    <div class="mx-auto w-1/2 flex flex-col">
    <h2 class="uppercase mt-5 text-yellow-500 text-lg font-semibold mx-auto">
      {{ movieDetails.title }}
    </h2>
    
        <img
        :src="`https://image.tmdb.org/t/p/original/${movieDetails.poster_path}`"
        class="w-1/2 mx-auto"
        />
        <h5>{{ movieDetails.release_date }}</h5>
        <span class="text-sm text-gray-500"
        >Género:
        <span v-for="(genre, index) in movieDetails.genres" :key="index">
            {{ genre.name }}
            <span v-if="index < movieDetails.genres.length - 1">, </span>
        </span>
        </span>
        <p>{{ movieDetails.overview }}</p>
        <a :href="movieDetails.homepage" target="_blank" class="text-blue-500 hover:text-blue-700 mx-auto">Pagina Oficial</a>
    </div>
    
  </div>
</template>

<script>
export default {
  props: {
    id: Number,
  },
  data() {
    return {
      movieDetails: [],
    };
  },
  mounted() {
    this.getMovie();
  },
  methods: {
    getMovie() {
      console.log("Received ID:", this.id);
      fetch(
        `https://api.themoviedb.org/3/movie/${this.id}?api_key=01db13efe2231d46ff3e5e7ac559558a`
      )
        .then((response) => response.json())
        .then((dataMovie) => {
          this.movieDetails = dataMovie;
          console.log(this.movieDetails);
        })
        .catch((error) => console.error("Error cargando detalles", error));
    },
  },
};
</script>

<style scoped></style>
