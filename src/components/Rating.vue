<template>
  <div class="ratingContainer" v-if="rate != null">
    <div class="rating">
      <div
        class="star on"
        v-for="s in (Math.round(rate * 2) / 2) % 1 !== 0
          ? Math.round(rate * 2) / 2 - 0.5
          : Math.round(rate * 2) / 2"
      ></div>
      <div class="star half" v-if="(Math.round(rate * 2) / 2) % 1 !== 0" />
      <div
        class="star"
        v-for="s in Math.floor(5 - Math.round(rate * 2) / 2)"
      ></div>
    </div>

    <div class="exact">note: {{ rate }}/5</div>
    <div class="countRate">reviews: {{ countRate }}</div>
  </div>
  <div v-else>
    No vote yet
  </div>
</template>

<script>
export default {
  name: 'Rating',
  props: ['rate', 'countRate'],
};
</script>

<style scoped>
.countRate {
  margin-left: 8px;
}

.ratingContainer {
  display: flex;
  flex-direction: column;
}

.exact {
  margin-left: 8px;
}

.rating {
  display: flex;
}

.star {
  font-size: x-large;
  display: inline-block;
  color: gray;
}
.star:last-child {
  margin-right: 0;
}
.star:before {
  content: '\2605';
}
.star.on {
  color: gold;
}
.star.half:after {
  content: '\2605';
  color: gold;
  position: absolute;
  margin-left: -21.5px;
  width: 11px;
  overflow: hidden;
}
</style>
