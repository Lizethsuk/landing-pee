<template>
  <svg xmlns="http://www.w3.org/2000/svg" :width="width" :height="width">
    <path
     :class="color"
      class="prefix__a"
      d="M3.813 12.45v7.418h4.945v-6.182h4.945v6.182h4.945V12.45l-7.417-6.182z"
    />
    <path
      class="prefix__a"
      :class="color"
      :stroke-width="strokeWidth"
      stroke-miterlimit="10"
      d="M22.11 8.514L18.648 5.63V.358H14.94v2.181L12.324.358a1.547 1.547 0 00-1.979 0L.557 8.514a1.546 1.546 0 101.979 2.375l8.8-7.331 8.8 7.331a1.545 1.545 0 001.978-2.375z"
    />
  </svg>
</template>

<script>
export default {
  name: "Folleto",
  props: {
    color: {
      type: String,
      default: "white", // green, green--outline, white
      required: false,
    },
    strokeWidth: {
      type: Number,
      default: 5,
      required: false,
    },
    width: {
      type: Number,
      default: 50,
      required: false,
    },
  },
};
</script>

<style lang="css" scoped>
.green {
  fill: #61ffab;
  stroke: none;
}

.green--outline {
  fill: #354258;
  stroke: #61ffab;
}

.white {
  fill: mintcream;
  stroke: none;
}
</style>