<template>
  <div>
    <div class="date-page" :style="cssVars">
      <b-container class="bv-footer-row">
        <div bg-variant="info" class="content-date">
          <b-row>
            <b-col md="4" align-self="center">
              <p  v-text="dateText" class="subtitle">
              </p>
            </b-col>
            <b-col md="4" cols="12" align-self="center" >
              <div id="container" align-items="center">
                <div class="month" id="navi" v-text="'de' + ' ' + month"></div>
                <div id="infoi" v-text="day"></div>
              </div>
            </b-col>
            <b-col md="4" cols="12" align-self="center">
              <b-button class="button-nav" v-text="buttonText" squared></b-button>
            </b-col>
          </b-row>
          <b-row> </b-row>
        </div>
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
    }
  },
  computed: {
    cssVars() {
      return {
        "--bg-color": this.bgColor,
      };
    },
  },
};
</script>

<style lang="stylus" scoped>
@import '../styles/main.styl';

.date-page 
  left: 0;
  bottom: 0;
  width: 100%;
  background-color: var(--bg-color);


.content-date 
  color: white;
  padding: 30px;
  text-align: center;
  
 
.month 
  font-size: 25px;

.number 
  font-size: 40px;

#container 
  position: relative;

#navi, #infoi 
  position: absolute;
  top: -10px;
  left: 0;

#infoi 
  z-index: 10;
  margin-left: -30px;
  font-size: 82px;
  margin-top: -54.5px;
  font-weight: 650;


#navi 
  background-color: secondary-energia;
  color: #FFFFFF;
  text-align: right;
  padding-right: 20px;
  font-size: 22px;
  width: 196px;
  height: 40px;
  font-weight: bold;

.subtitle 
  font-size: 22px;
  line-height: 22px;
  padding: 15px 0px 18px;
  font-weight: 500;
  margin-bottom 0px
</style>