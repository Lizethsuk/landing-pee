<template>
  <div>
    <div class="date-page" :style="cssVars">
      <b-container class="pasos-areas ">
          <b-row>
            <b-col lg="4" cols="12"  align-self="center"  >
              <div class="text-date">
              <span v-text="dateText" class="subtitle"></span>
              <br>
              <span v-text="dateTextSecond" class="subtitle"></span>
              </div>
            </b-col>
            <b-col lg="4" cols="12"  align-self="center" >
               <div class="section-content">
                  <div v-text="day" class="section-1">
                  </div>
                  <div  v-text="'de' + ' ' + month" class="section-2" >
                  </div>
                </div>
            </b-col>
            <b-col lg="1">
              <div class="vl"></div>
            </b-col>
            <b-col  lg="3" cols="12"  align-self="center">
               <div >
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

// #container 
//   position: relative;

// #navi, #infoi 
//   position: absolute;
//   top: -10px;
//   left: 0;

// #infoi 
//   z-index: 10;
//   margin-left: -30px;
//   font-size: 82px;
//   margin-top: -54.5px;
//   font-weight: 650;
// #navi 
//   background-color: var(--bg-color-button);
//   color: #FFFFFF;
//   text-align: right;
//   padding-right: 20px;
//   font-size: 22px;
//   width: 196px;
//   height: 40px;
//   font-weight: bold;
.button-nav
  width: 196px;
  height: 40px;
  font-size: 22px;
  font-weight: bold;
  
.subtitle 
  font-size: 22px;
  line-height: 22px;
  padding: 15px 0px 18px;
  font-weight: 500;
  margin-bottom 0px
</style>