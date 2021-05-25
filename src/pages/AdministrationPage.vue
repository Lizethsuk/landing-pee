<template>
  <div>
    <HeadePage />
    <ImagePage message="Administración y dirección de personas" background-image="Landscape-Color.jpg" />
    <div class="date">
      <b-container>
        <DatePage month="abril" day="29"  />
      </b-container>
    </div>

    <FooterPage />
  </div>
</template>

<script>
import HeadePage from "../components/HeadePage";
import FooterPage from "../components/FooterPage";
import ImagePage from "../components/ImagePage.vue";
import DatePage from "../components/DatePage.vue";

export default {
  name:"AdministrationPage",
  components: {
    HeadePage,
    FooterPage,
    ImagePage,
    DatePage,
  },
}
</script>

<style lang="stylus" scoped>

 @import "../styles/main.styl"

.title 
  background-color primary-administracion
  font font-sourcesans-extrabold
  color black
  font-size 45px
  min-height 280px
  width 100%
  margin 0 auto
  border-radius 0 0 27px 27px
  box-shadow(0px 4px 5px 0px secondary-administracion)



</style>