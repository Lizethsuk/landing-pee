<template>
  <div class="content-date">
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
          <div class="month" id="navi">de mayo</div>
          <div id="infoi">06</div>
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
  font-size: 80px;
  margin-top: -50px;
  
}

#navi {
  background-color:secondary-energia;
  color: #7D6247
  text-align right 
  padding-right: 20px;
  width 190px
  height 40px
}
.subtitle
  font-size 25px
</style>