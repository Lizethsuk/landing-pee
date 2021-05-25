<template>
  <div class="nav mx-auto my-auto m-auto d-flex">
    <b-navbar toggleable="lg" type="dark" variant="dark" class="m-auto">
      <b-navbar-brand href="../">
        <router-link class="nav-link" to="/">lOGO  </router-link>
      </b-navbar-brand>
      <b-navbar-toggle target="nav-collapse"></b-navbar-toggle>
      <b-collapse id="nav-collapse" is-nav>
        <b-navbar-nav>
          <b-nav-item href="#"> <router-link class="nav-link item-nav" to=""> Admisión </router-link> </b-nav-item>
          <p class="line"></p>
          <b-nav-item href="#">  <router-link class="nav-link item-nav" to=""> Financiamento </router-link>  </b-nav-item>
          <p class="line"></p>
          <b-nav-item href="#"><router-link class="nav-link item-nav" to=""> Especialización </router-link></b-nav-item>
          <p class="line"></p>
          <b-nav-item href="#"><router-link class="nav-link item-nav" to=""> Areas </router-link> </b-nav-item>
          <b-nav-item> <b-button class="button-nav" squared>Solicita información</b-button></b-nav-item>
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
.button-nav
  padding 10px 25px 10px 25px
.nav
  background-color #212529 !important
</style>