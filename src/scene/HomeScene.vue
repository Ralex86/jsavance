<template>
  <div class="homeScene">
    <MoviesContainer />
  </div>
</template>

<script>
import MoviesContainer from '../containers/MoviesContainer.vue';

export default {
  name: 'app',
  components: {
    MoviesContainer,
  },
};
</script>
<style>
.homeScene {
  display: flex;
  flex-direction: column;
}
</style>
