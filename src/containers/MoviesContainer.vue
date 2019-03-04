<template>
  <div class="movieContainer">
    <input
      class="search"
      type="text"
      v-model="search"
      placeholder="Search title.."
    />
    <div v-if="dataReady">
      <div class="movieList">
        <MovieCard
          v-for="movie in filteredList"
          :movie="movie"
          :key="movie.id"
        />
      </div>
    </div>
    <div v-if="!dataReady">
      Loading
    </div>
  </div>
</template>

<script>
import MovieCard from '../components/MovieCard.vue';
export default {
  name: 'MoviesContainer',
  components: {
    MovieCard,
  },
  data: function() {
    return {
      movies: [],
      movieList: [],
      search: '',
      dataReady: false,
    };
  },
  methods: {
    fetchMovies: function() {
      let self = this;
      const init = {
        method: 'GET',
      };

      const url = 'http://localhost:3000/api/v1/movies';

      fetch(url, init)
        .then(response => {
          return response.json();
        })
        .then(data => {
          self.movies = data;
          self.movieList = data;
          self.dataReady = true;
        })
        .catch(error => {});
    },
  },

  mounted() {
    this.fetchMovies();
  },
  computed: {
    filteredList() {
      return this.movieList.filter(movie => {
        return movie.title.toLowerCase().includes(this.search.toLowerCase());
      });
    },
  },
};
</script>

<style scoped>
.movieContainer {
  display: flex;
  flex-direction: column;
  padding: 16px;
}

.search {
  padding: 0 16px;
  background: #fff;
  border: 1px solid #dfe1e5;
  box-shadow: none;
  border-radius: 16px;
  appearance: none;
  height: 30px;
}

input.search:focus {
  outline-width: 0;
}

.movieList {
  display: flex;
  flex-wrap: wrap;
  padding: 16px;
}
</style>
