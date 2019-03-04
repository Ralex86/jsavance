<template>
  <div class="formScene">
    <h3>
      Add a new movie to the database
    </h3>
    <form class="movieForm">
      <h5>
        Movie
      </h5>
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

      <h5>
        Director
      </h5>
      <input
        class="formInput"
        type="text"
        placeholder="ex: Dupond"
        id="name"
        v-model="movie.name"
      />
      <input
        class="formInput"
        type="text"
        placeholder="ex: 2015-01-01"
        id="birthdate"
        v-model="movie.birthdate"
      />
      <input
        class="formInput"
        type="text"
        placeholder="ex: French"
        id="nationality"
        v-model="movie.nationality"
      />

      <button type="button" class="submitButton" v-on:click="saveMovie($event)">
        Submit
      </button>
    </form>
  </div>
</template>

<script>
export default {
  name: 'app',
  data: function() {
    return {
      movie: {
        title: '',
        year: '',
        language: '',
        genre: '',
        name: '',
        birthdate: '2019-01-01',
        nationality: '',
      },
    };
  },
  methods: {
    saveMovie: function(event) {
      event.preventDefault();
      const url = `http://localhost:3000/api/v1/movies`;
      fetch(url, {
        method: 'POST',
        headers: {
          Accept: 'application/json',
          'Content-Type': 'application/json',
        },
        body: JSON.stringify(this.movie),
      })
        .then(response => {
          return response.json();
          this.$router.push('/');
        })
        .then(data => {
          console.log('hey');
        })
        .catch(error => {});
    },
  },
};
</script>

<style>
.formScene {
  display: flex;
  flex-direction: column;
  justify-content: center;
}

.movieForm {
  display: flex;
  flex-direction: column;
  width: 400px;
  margin: 0 auto;
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

input.formInput:focus {
  outline-width: 0;
}
</style>
