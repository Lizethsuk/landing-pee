<template>
  <div>
   
    <HeadePage  />

<div>
  
</div>
     <p class="title">MARKETING</p>
  
  </div>
</template>

<script>
import HeadePage from '../components/HeadePage'

export default {
  name:"MarketingPage",
  components:{
    HeadePage
  }
}
</script>

<style lang="stylus" scoped>

 @import "../styles/main.styl"

.title 
  background-color primary-marketing
  font font-sourcesans-extrabold
  color black
  font-size 45px
  min-height 280px
  width 100%
  margin 0 auto
  border-radius 0 0 27px 27px
  box-shadow(0px 4px 5px 0px secondary-marketing)



</style>