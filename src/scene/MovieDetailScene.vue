<template>
  <div class="detailScene">
    <div class="container" v-if="dataExist">
      <MovieCard :movie="movie" />
      <form class="ratingForm">
        <h5>
          Rating
        </h5>
        <Rating :rate="movie.avgRate" :countRate="movie.countRate" />
        <input
          id="number"
          type="number"
          min="0"
          max="5"
          step="0.5"
          i
          v-model="userRating"
        />
        <button
          type="button"
          class="submitButton"
          v-on:click="postUserRating($event)"
        >
          Submit rating
        </button>
      </form>
      <h5>
        Edit this movie
      </h5>
      <form class="movieForm">
        <input
          class="formInput"
          type="text"
          placeholder="ex: Interstellar"
          id="title"
          v-model="movie.title"
        />
        <input
          class="formInput"
          type="text"
          placeholder="ex: 1998"
          id="year"
          v-model="movie.year"
        />
        <input
          class="formInput"
          type="text"
          placeholder="ex: French"
          id="language"
          v-model="movie.language"
        />
        <input
          class="formInput"
          type="text"
          placeholder="ex: Fantasy"
          id="genre"
          v-model="movie.genre"
        />
        <button
          type="button"
          class="submitButton"
          v-on:click="updateMovie($event)"
        >
          Submit
        </button>
      </form>
      <form class="posterForm" enctype="multipart/form-data">
        <h5>
          Edit movie poster
        </h5>
        <input
          id="poster"
          type="file"
          ref="file"
          v-on:change="handleFileUpload"
          name="poster"
        />
        <button
          type="button"
          class="submitButton"
          v-on:click="updateMoviePoster($event)"
        >
          Upload
        </button>
      </form>

      <button
        type="button"
        class="deleteButton"
        v-on:click="deleteMovie($event)"
      >
        Delete
      </button>
    </div>
    <div v-if="!dataExist">
      Le film nexiste pas
    </div>
  </div>
</template>

<script>
import MovieCard from '../components/MovieCard.vue';
import Rating from '../components/Rating.vue';
export default {
  name: 'app',
  props: ['id'],
  components: {
    MovieCard,
    Rating,
  },
  data: function() {
    return {
      movie: null,
      dataExist: false,
      poster: null,
      userRating: 0,
    };
  },
  methods: {
    postUserRating: function(event) {
      event.preventDefault();
      const url = `http://localhost:3000/api/v1/rating`;
      var formData = new FormData();
      formData.append('rate', JSON.stringify(this.userRating));
      formData.append('movieId', JSON.stringify(this.movie.id));
      fetch(url, {
        method: 'POST',
        body: formData,
      })
        .then(response => {
          return response.json();
        })
        .then(data => {
          console.log('hey');
          this.$router.go('/');
        })
        .catch(error => {});
    },
    deleteMovie: function(event) {
      event.preventDefault();
      const url = `http://localhost:3000/api/v1/movies/${this.movie.id}`;
      fetch(url, {
        method: 'DELETE',
        headers: {
          Accept: 'application/json',
          'Content-Type': 'application/json',
        },
      })
        .then(response => {
          return response.json();
        })
        .then(data => {
          console.log('hey');
          this.$router.push('/');
        })
        .catch(error => {});
    },
    updateMovie: function(event) {
      event.preventDefault();
      const url = `http://localhost:3000/api/v1/movies`;
      fetch(url, {
        method: 'PUT',
        headers: {
          Accept: 'application/json',
          'Content-Type': 'application/json',
        },
        body: JSON.stringify(this.movie),
      })
        .then(response => {
          return response.json();
        })
        .then(data => {
          console.log('hey');
          this.$router.go('/');
        })
        .catch(error => {});
    },
    handleFileUpload: function() {
      this.poster = this.$refs.file.files[0];
    },

    updateMoviePoster: function(event) {
      event.preventDefault();
      const url = `http://localhost:3000/poster`;
      var formData = new FormData();
      formData.append('poster', this.poster);
      formData.append('movie', JSON.stringify(this.movie));
      fetch('http://localhost:3000/poster', {
        method: 'POST',
        body: formData,
      })
        .then(response => {
          return response.json();
        })
        .then(data => {
          console.log('hey');
          this.$router.go('/');
        })
        .catch(error => {});
    },
    fetchMovie: function() {
      let self = this;
      const init = {
        method: 'GET',
      };

      const url = `http://localhost:3000/api/v1/movies/${this.id}`;

      fetch(url, init)
        .then(response => {
          return response.json();
        })
        .then(data => {
          if (data.length > 0) {
            self.movie = data[0];
            self.dataExist = true;
          }
        })
        .catch(error => {});
    },
  },

  mounted() {
    this.fetchMovie();
  },
};
</script>

<style scoped>
.container {
  display: flex;
  flex-direction: column;
  justify-content: center;
}
.detailScene {
  display: flex;
  justify-content: center;
}

.ratingForm {
  display: flex;
  flex-direction: column;
}

.movieForm {
  display: flex;
  flex-direction: column;
}

.posterForm {
  display: flex;
  flex-direction: column;
}
.posterForm > input.formInput {
  margin: 8px 0;
}

.posterForm > button.submitButton {
  margin: 8px 0;
}

.movieForm > input.formInput {
  margin: 8px 0;
}

.movieForm > button.submitButton {
  margin: 8px 0;
}

.formInput {
  padding: 0 16px;
  background: #fff;
  border: 1px solid #dfe1e5;
  box-shadow: none;
  border-radius: 16px;
  appearance: none;
  height: 30px;
}

.submitButton {
  display: flex;
  flex-direction: row;
  align-items: center;
  justify-content: center;

  cursor: pointer;
  user-select: none;

  background-color: #6cc0e5;
  padding: 8px 0;
  border-width: 1px;
  border-style: solid;
  border-color: transparent;
  border-image: initial;
  border-radius: 6px;
  color: white;
}

.deleteButton {
  display: flex;
  flex-direction: row;
  align-items: center;
  justify-content: center;

  cursor: pointer;
  user-select: none;

  background-color: #ff4136;
  padding: 8px 0;
  border-width: 1px;
  border-style: solid;
  border-color: transparent;
  border-image: initial;
  border-radius: 6px;
  color: white;
}

input.formInput:focus {
  outline-width: 0;
}
</style>
