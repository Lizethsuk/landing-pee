<template>
  <transition name="slide-fade" mode="out-in">
    <router-view />
  </transition>
</template>

<script>
export default {
  name: "App",
};
</script>

<style lang="stylus">
// .slide-fade-enter-active {
//   transition: all .1s ease;
// }
// .slide-fade-leave-active {
//   transition: all .1s cubic-bezier(1.0, 0.5, 0.8, 1.0);
// }
// .slide-fade-enter, .slide-fade-leave-to{
//   opacity: 0;
// }
</style>