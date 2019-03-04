<template>
  <div class="movie">
    <div
      class="poster"
      v-bind:style="{
        backgroundImage:
          'url(' + 'http://localhost:3000/posters/' + movie.poster + ')',
      }"
    ></div>
    <div class="infos">
      <div class="title">
        <router-link :to="{path: `/movie/${movie.id}`}">
          <span>{{ movie.title }}</span>
        </router-link>
      </div>
      <div>{{ movie.year }}</div>
      <div>{{ movie.language }}</div>
      <div>{{ movie.genre }}</div>
    </div>
  </div>
</template>

<script>
export default {
  name: 'MovieCard',
  props: {movie: Object},
};
</script>

<style scoped>
.movie {
  display: flex;
  flex-direction: column;
  flex: 1 0 300px;
  margin: 16px;

  background-color: rgb(255, 255, 255);
  box-shadow: rgba(0, 0, 0, 0.2) 0px 2px 4px;
  border-radius: 16px;

  overflow: hidden;
}

.title {
  margin-bottom: 8px;
}

.infos {
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: space-between;
  padding: 16px;
  text-align: center;
}
.poster {
  height: 200px;
  background-repeat: no-repeat;
  background-size: cover;
}
</style>
