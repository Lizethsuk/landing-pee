<template>
  <div>
    <div class="date-page" :style="cssVars">
      <b-container class="pasos-areas ">
          <b-row>
            <b-col md="3" cols="12"  align-self="center"  >
              <div class="text-date text-date-desktop">
              <span v-text="dateText" class="subtitle"></span>
              <br>
              <span v-text="dateTextSecond" class="subtitle"></span>
              </div> 
              <div class="text-date text-date-responsive">
              <span v-text="dateText" class="subtitle"></span>
              <span v-text="dateTextSecond" class="subtitle second-title"></span>
              </div>
            </b-col>
            <b-col md="4" cols="12" class="day-content" align-self="center" >
               <div class="section-content">
                  <div v-text="day" class="section-1">
                  </div>
                  <div  v-text="'de' + ' ' + month" class="section-2" >
                  </div>
                </div>
            </b-col>
            <b-col md="1" class="divider-content" >
              <div class="vl"></div>
            </b-col>
            <b-col  md="4" cols="12"  align-self="center">
               <div  class="button-content">
                 <b-button class="button-nav" v-text="buttonText" squared></b-button>
              </div>
            </b-col>
          </b-row>
      </b-container>
    </div>
  </div>
</template>

<script>
export default {
  name: "DatePage",
  props: {
    month: {
      type: String,
      require: true,
    },
    buttonText:{
      type: String,
      require: true,
    },
    dateText:{
      type: String,
      require: true,
    },
    day: {
      type: String,
      require: true,
    },
    bgColor: {
      type: String,
      default: "pink",
    },
    bgColorButton: {
      type: String,
      default: "pink",
    },
    bgColorDivider: {
      type: String,
      default: "pink",
    },
    dateTextSecond :{
      type: String,
      require: true,
    }
  },
  computed: {
    cssVars() {
      return {
        "--bg-color": this.bgColor,
        "--bg-color-button": this.bgColorButton,
        "--bg-color-divider":this.bgColorDivider
      };
    },
  },
};
</script>

<style lang="stylus" scoped>
@import '../styles/main.styl';

.text-date-responsive
  display none
.button-content
  padding-top 10px
  text-align center
.border-text
  border-left: 5px solid blue
  padding-right 50px
.vl {
  border-left: 1px solid var(--bg-color-divider);
  height: 100px;
  margin-left -20px
}
.text-date
  text-align right 
  padding-right 50px
  justify-content: center;
  font-family: gt-pressura-bold

.section-content
  display: flex;
  flex-direction: row
  justify-content: center;
  font-family: gt-pressura-bold
.section-1
  position absolute
  z-index 2
  width 50px
  font-size 75px
  margin-right 170px
  margin-top -40px
  font-weight: bold;
.section-2
  background-color: var(--bg-color-button);
  font-size: 22px;
  position relative
  z-index 1
  text-align right
  width: 180px;
  padding-right 10px
  font-weight: bold;
  height: 40px;
.btn-secondary
  background-color: var(--bg-color-button);
  border-color  var(--bg-color-button);
  font-family: gt-pressura-bold
.date-page 
  left: 0;
  bottom: 0;
  width: 100%;
  background-color: var(--bg-color);

.pasos-areas 
  padding: 20px 0px;
  padding-top: 20px;
  color white

.content-date 
  color: white;
  padding: 30px;
  text-align: center;
  
.month 
  font-size: 25px;

.number 
  font-size: 40px;

.button-nav
  width: 250px;
  height: 49px;
  font-size: 22px;
  font-weight: bold;
  
.subtitle 
  font-size: 22px;
  line-height: 22px;
  padding: 15px 0px 18px;
  font-weight: 500;
  margin-bottom 0px

@media only screen and (max-width: 767px) 
  .text-date-responsive
    display block
  .text-date-desktop
    display none
  .text-date
    text-align center 
    padding-right 0px !important
    // justify-content: center;
  .day-content
    padding-top 20px
  .divider-content
    display none
  .second-title
    padding-left 5px
  

</style>