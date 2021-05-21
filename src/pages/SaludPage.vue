<template>
  <div>
   
    <HeadePage  />
   
     <p class="title">SALUD</p>
  </div>
</template>

<script>
import HeadePage from '../components/HeadePage'

export default {
  name:"SaludPage",
  components:{
    HeadePage
  }
}
</script>

<style lang="stylus" scoped>

 @import "../styles/main.styl"

.title 
  background-color primary-salud
  font font-sourcesans-extrabold
  color black
  font-size 45px
  min-height 280px
  width 100%
  margin 0 auto
  border-radius 0 0 27px 27px
  box-shadow(0px 4px 5px 0px secondary-salud)



</style>