<template>
  <div  bg-variant="info" class="content-date" :style="inlineStyle">
    <b-row>
      <b-col>
        <p class="subtitle">
          Conferencia <br />
          Informativa
        </p>
      </b-col>
      <b-col>
     <br>
        <div id="container">
          <div class="month" id="navi" v-text="'de'+ ' ' + month"></div>
          <div id="infoi" v-text="day"></div>
        </div>
      </b-col>
      <b-col>
        <b-button class="button-nav" squared>Inscribete aqui</b-button>
      </b-col>
  
    </b-row>
    <b-row> </b-row>
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
    day: {
      type: String,
      require: true,
    },
   backgroundColor:  String,
    
  }
};
</script>

<style lang="stylus" scoped>
@import '../styles/main.styl';

.content-date {
  background-color: #7D6247;
  color: white;
  padding-top: 30px;
  text-align: center;
}

.month 
  font-size: 25px;


.number {
  // margin-left -10px
  font-size: 40px;
}

#container {
  position: relative;
}

#navi, #infoi {
  // width: 100%;
  // height: 30%;
  position: absolute;
  top: 0;
  left: 0;

}

#infoi {
  z-index: 10;
  margin-left: -15px;
  font-size: 82px;
  margin-top: -50px;
  font-weight 650
  
}

#navi {
  background-color:secondary-energia;
  color: #FFFFFF
  text-align right 
  padding-right: 20px;
  font-size 22px
  width 190px
  height 40px
  font-weight bold
}
.subtitle
  font-size 22px
  line-height 22px
  padding 15px 0px 18px
  font-weight 500
</style>