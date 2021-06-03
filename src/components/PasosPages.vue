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
              <p>Calendario</p>
              <p v-text="calendarioText"></p>
            </div>
          </b-col>
          <b-col lg="3" cols="12">
            <div class="pasos-content">       
            <Informes :color="colorIcon"/>
            <p>Informes e inscripcione</p>
            <p v-text="informeText"></p>
            </div>
          </b-col>
          <b-col lg="3" cols="12">
            <div class="pasos-content">
            <Folleto :color="colorIcon"/>
            <p>Folleto</p>
            <p v-text="folletoText"></p>
            </div>
          </b-col>
          <b-col lg="3" cols="12">
            <div class="text-center ">
            <Admision :color="colorIcon"/>
            <p>Admision</p>
            <p v-text="admisionText"></p>
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
.title
  text-align center
  font-size 25px
.pasos-content
  border-right: solid var(--line-color);
  text-align center
.pasos-page {
  left: 0;
  bottom: 0;
  width: 100%;
  background-color: var(--bg-color);
}

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