<template>
  <div>
    <div class="pasos-page" :style="cssVars">
      <b-container class="bv-example-row pasos-areas">
        <b-row>
          <p class="title">Siguientes pasos</p>
        </b-row>
        <b-row>
          <b-col lg="3" cols="12">
            <div class="pasos-content">
              <Calendario :color="colorIcon"/>
              <p class="subtitle">Calendario</p>
              <p v-text="calendarioText" class="description-text"></p>
              <div class="vl"></div>
            </div>
             
          </b-col>
          <b-col lg="3" cols="12">
            <div class="pasos-content">       
            <Informes :color="colorIcon"/>
            <p class="subtitle">Informes e inscripciones</p>
            <p v-text="informeText"  class="description-text"></p>
            </div>
          </b-col>
          <b-col lg="3" cols="12">
            <div class="pasos-content">
            <Folleto :color="colorIcon"/>
            <p class="subtitle">Folleto</p>
            <p v-text="folletoText"  class="description-text"></p>
            </div>
          </b-col>
          <b-col lg="3" cols="12">
            <div class="text-center ">
            <Admision :color="colorIcon"/>
            <p class="subtitle">Admision</p>
            <p v-text="admisionText"  class="description-text"></p>
            </div>
          </b-col>
        </b-row>
      </b-container>
    </div>
  </div>
</template>

<script>
import Informes from './Icons/Informes'
import Calendario from './Icons/Calendario'
import Folleto from './Icons/Folleto'
import Admision from './Icons/Admision'
export default {
  name: "PasosPages",
  components:{
    Informes,
    Calendario,
    Folleto,
    Admision
  },
  props: {
    bgColor: {
      type: String,
      default: "pink",
    },
    lineColor: {
      type: String,
      default: "pink",
    },
    colorIcon:{
      type: String,
      default: "pink",
    },
    calendarioText:{
      type:String
    },
    informeText:{
      type:String
    },
    folletoText:{
      type:String
    },
    admisionText:{
      type:String
    }
  },
  computed: {
    cssVars() {
      return {
        "--bg-color": this.bgColor,
        "--line-color": this.lineColor,
      };
    },
  },
};
</script>

<style lang="stylus" scoped>
@import '../styles/main.styl';
.subtitle
  font-family gt-pressura-bold
.title
  text-align center
  font-size 30px
  font-family gt-pressura-bold
.pasos-content
  border-right: 2px solid var(--line-color);
  text-align center
  height: 180px;
.pasos-page {
  left: 0;
  bottom: 0;
  width: 100%;
  background-color: var(--bg-color);
}
.description-text
  font-family Raleway-Regular
.pasos-areas {
  padding: 50px 0px;
  padding-top: 20px;
  color white
}
@media (max-width: 767px) {

  .pasos-content {
    
   border-right: none;
  }

}
</style>