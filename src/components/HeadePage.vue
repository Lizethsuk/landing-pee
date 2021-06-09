<template>
  <div class="nav mx-auto my-auto m-auto d-flex">
    <b-navbar toggleable="lg" type="dark"  class="m-auto">
      <b-navbar-brand href="../" to="/">
        <img src="../assets/components/header/logo/logo.png" alt="" class="img-logo">
        <!-- <router-link class="nav-link" to="/">lOGO  </router-link> -->
      </b-navbar-brand>
      <b-navbar-toggle target="nav-collapse"></b-navbar-toggle>
      <b-collapse id="nav-collapse" is-nav>
        <b-navbar-nav>
          <b-nav-item-dropdown text="Areas" class="nav-link item-nav" right>
            <b-dropdown-item to="/salud_page" href="#">Salud</b-dropdown-item>
            <b-dropdown-item to="/energy_page" href="#">Energia</b-dropdown-item>
            <b-dropdown-item to="/ti_page" href="#">Tecnologia de la informacion</b-dropdown-item>
            <b-dropdown-item to="/marketing_page" href="#">Marketing</b-dropdown-item>
            <b-dropdown-item to="/finanzas_page" href="#">Finanzas</b-dropdown-item>
            <b-dropdown-item to="/b2b_page" href="#">Business to Business</b-dropdown-item>
            <b-dropdown-item to="/logistica_page" href="#">Operaciones y Logistica de Proyectos</b-dropdown-item>
            <b-dropdown-item to="/administracion_page" href="#">Administracion y Direccion de la Informacion</b-dropdown-item>
            <b-dropdown-item to="/mineria_page" href="#">Mineria</b-dropdown-item>
          </b-nav-item-dropdown>
        
          <p class="line"></p>
          <b-nav-item href="#" to="/admision_page" class="nav-link item-nav">Admisión
            <!-- <router-link  > Admisión </router-link>  -->
          </b-nav-item>
          <p class="line"></p>
          <b-nav-item href="#" to="/financiamiento_page" class="nav-link item-nav">
            Financiamento
            <!-- <router-link class="nav-link item-nav" to="">  </router-link>   --></b-nav-item>
          <b-nav-item to="/solicita_informacion" > <b-button class="button-nav" squared>Solicita información</b-button></b-nav-item>
        </b-navbar-nav>
      </b-collapse>
    </b-navbar>
  </div>
</template>

<script>
export default {
  name: "HeadePage",
};
</script>

<style lang="stylus" scoped>
@import '../styles/main.styl';
.img-logo
  max-width 254px
  width 100%
.navbar.navbar-dark.bg-dark 
  background-color: bg-header;
.line
  border-right: 1px solid white;
  margin-top: 25px;
  height 15px
.item-nav
  padding-right 15px
  padding-left 15px
  padding-top 10px
  font-family Raleway-Regular
.button-nav
  padding 10px 25px 10px 25px
  background-color primary-pee
  color black
  font-family gt-pressura-bold
.nav
  background-color bg-black !important
.router-link-active
  color #9F8F6C !important
// .nav-item.nav-item.nav-item a {
//   color: red !important;
// }
@media (max-width: 480px) 
  .img-logo
    max-width 204px
    width 100%
</style>