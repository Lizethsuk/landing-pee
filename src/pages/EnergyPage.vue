<template>
  <div>
    <HeadePage />
    <ImagePage message="Energia" background-image="Landscape-Color.jpg" />
    <div class="date">
      <b-container>
        <DatePage month="junio" day="06"  />
      </b-container>
    </div>

    <FooterPage />
  </div>
  <!-- <b-container fluid >
      <b-row class="no-gutters">

      </b-row>
 


      <b-row no-gutters>
       
      </b-row>
      <b-row>
        
      </b-row>

     
    </b-container> -->
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
.date
  background-color: pink;
</style>