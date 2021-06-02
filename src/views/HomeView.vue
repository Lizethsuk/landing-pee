<template>
  <div>
    <div></div>
    <section>
      <b-container fluid class="bv-example-row hello">
        <b-row>
          <b-col>
            <b-nav>
              <b-nav-item active>Active </b-nav-item>
              <b-nav-item>Link</b-nav-item>
              <b-nav-item>Another Link</b-nav-item>
              <b-nav-item disabled>Disabled</b-nav-item>
            </b-nav>
          </b-col>
        </b-row>
        <b-row>
          <b-col
            class="home-banner d-flex align-items-start justify-content-center flex-column"
          >
            <h1>PEE ONLINE</h1>
            <h2>
              PROGRAMA DE ESPECIALIZACIÓN <br />
              PARA EJECUTIVOS
            </h2>
          </b-col>
          <b-col class="d-flex align-items-center justify-content-center">
            <FormHome />
          </b-col>
        </b-row>
      </b-container>
    </section>
    <section>
      <b-container class="bv-example-row section-areas">
        <b-row>
          <b-col>
            <h3 class="text-center pb-5">
              CONOCE NUESTROS <br />ÁREAS DE ESPECIALIZACIÓN
            </h3>
            <ul class="navbar-nav d-inline-block d-flex flex-wrap">
              <li class="nav-item li-area">
                <div class="box-area">
                  <router-link class="nav-link" to="/salud_page"
                    >Salud <br />
                  </router-link>
                </div>
              </li>
              <li class="nav-item li-area">
                <div class="box-area">
                  <router-link class="nav-link" to="/energy_page"
                    >Energia
                    
                    </router-link
                  >
                </div>
              </li>
              <li class="nav-item li-area">
                <div class="box-area">
                  <router-link class="nav-link" to="/ti_page"
                    >Tecnología de <br />
                    la Información</router-link
                  >
                </div>
              </li>
              <li class="nav-item li-area">
                <div class="box-area">
                  <router-link class="nav-link" to="/marketing_page"
                    >Marketing</router-link
                  >
                </div>
              </li>
              <li class="nav-item li-area">
                <div class="box-area">
                  <router-link class="nav-link" to="/finanzas_page"
                    >Finanzas</router-link
                  >
                </div>
              </li>
              <li class="nav-item li-area">
                <div class="box-area">
                  <router-link class="nav-link" to="/b2b_page"
                    >Business to <br />
                    Business
                  </router-link>
                </div>
              </li>
              <li class="nav-item li-area">
                <div class="box-area">
                  <router-link class="nav-link" to="/logistica_page"
                    >Operaciones y <br />
                    Logística de Proyectos</router-link
                  >
                </div>
              </li>
              <li class="nav-item li-area">
                <div class="box-area">
                  <router-link class="nav-link" to="/administracion_page"
                    >Administración y <br />
                    Dirección de <br />
                    la Información</router-link
                  >
                </div>
              </li>
              <li class="nav-item li-area">
                <div class="box-area">
                  <router-link class="nav-link" to="/mineria_page"
                    >Mineria</router-link
                  >
                </div>
              </li>
            </ul></b-col
          >
        </b-row>
      </b-container>
    </section>
    <section>
      <b-container class="bv-example-row section-areas">
        <b-row>
          <b-col cols="10" class="text-center mx-auto">
            <h3 class="pb-3">VENTAJAS</h3>
            <h3 class="pb-5">
              PEE ES UN PROGRAMA CORTO, FLEXIBLE <br />
              Y SE ADAPTA A TUS NECESIDADES
            </h3>
            <p>
              Lorem ipsum dolor, sit amet consectetur adipisicing elit. Dicta
              vero odio in? Sit sunt id eveniet autem, aliquam ratione nihil
              vero iusto. Voluptates velit, quis accusamus voluptatum aliquid
              voluptas pariatur.
            </p>
          </b-col>
        </b-row>
      </b-container>
    </section>
    <section>
      <b-container class="bv-example-row section-areas">
        <b-row>
          <b-col class="text-center">
            <h3 class="pb-3">VENTAJAS</h3>
            <h3 class="pb-5">
              PEE ES UN PROGRAMA CORTO, FLEXIBLE <br />
              Y SE ADAPTA A TUS NECESIDADES
            </h3>
            <p>
              Lorem ipsum dolor, sit amet consectetur adipisicing elit. Dicta
              vero odio in? Sit sunt id eveniet autem, aliquam ratione nihil
              vero iusto. Voluptates velit, quis accusamus voluptatum aliquid
              voluptas pariatur.
            </p>
          </b-col>
        </b-row>
      </b-container>
    </section>
    <section class="section-areas">
      <b-container>
        <b-row>
          <b-col cols="9" class="mx-auto text-center">
            <b-container fluid>
              <b-row>
                <b-col cols="6">
                  <Date />
                </b-col>
                <b-col cols="6">
                  <p>dnsdn dndks skasnk</p>
                </b-col>
              </b-row>
            </b-container>
          </b-col>
        </b-row>
      </b-container>
    </section>

    <section>
      <b-footer>
        <b-nav-item active>Active </b-nav-item>
        <b-nav-item>Link</b-nav-item>
        <b-nav-item>Another Link</b-nav-item>
        <b-nav-item disabled>Disabled</b-nav-item>
      </b-footer>
    </section>

    <router-view />
  </div>
</template>

<script>
import FormHome from "../components/FormHome";
import Date from "../components/Date";
export default {
  name: "HomeView",
  props: {
    msg: String,
  },
  components: {
    FormHome,
    Date,
  },
};
</script>


<style lang="stylus" scoped>
@import '../styles/main.styl';

h3 {
  margin: 40px 0 0;
}

ul {
  list-style-type: none;
  padding: 0;
  width: 100%;
}

.nav-item {
  display: inline-block;
  margin: 0px;
  width: 33.33%;
  min-height: 70px;
  font-size: 24px;
}

a {
  color: white;
  width: 100%;
  height: 100%;
}

h1 {
  font-size: 55px;
  text-transform: uppercase;
  border-bottom: 2px solid white;
  width: 100%;
}

.navbar-nav {
  flex-direction: row;
}

.hello {
  background-color: primary-pee;
  color: white;
}

.nav-link {
  padding-left: 20px;
  padding-bottom: 20px;
  display: flex;
  align-items: flex-end;
}

.box-area {
  color: white;
  font-weight: bold;
  line-height: 23px;
  width: 100%;
  height: 180px;
  border: 1px solid white;
  background-color: bg-black;
}

.home-banner {
  height: 88vh;
}

.section-areas {
  padding: 120px 0px;
}

section {
  border-bottom: 4px solid primary-pee;
}
</style>
