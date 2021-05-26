<template>
  <div>
    <HeadePage />
    <ImagePage message="Energia" background-image="Landscape-Color.jpg" />
    <DatePage bgColor="#7D6247"   month="junio" day="06"  />
    <FooterPage />
  </div>
</template>

<script>
import HeadePage from "../components/HeadePage";
import FooterPage from "../components/FooterPage";
import ImagePage from "../components/ImagePage.vue";
import DatePage from "../components/DatePage.vue";
export default {
  name: "EnergyPage",
  components: {
    HeadePage,
    FooterPage,
    ImagePage,
    DatePage,
  },

};
</script>

<style lang="stylus" scoped>
@import '../styles/main.styl';

</style>