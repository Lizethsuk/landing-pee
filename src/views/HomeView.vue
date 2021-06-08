<template>
  <div>
    <!-- <div></div> -->
    <section style="border-bottom: none !important">
      <b-container fluid class="bv-example-row hello">
        <HeadePage />
        <!-- <b-row>
          <b-col>
            <b-nav>
              <b-nav-item active>Active </b-nav-item>
              <b-nav-item>Link</b-nav-item>
              <b-nav-item>Another Link</b-nav-item>
              <b-nav-item disabled>Disabled</b-nav-item>
            </b-nav>
            
          </b-col>
        </b-row> -->
        <b-row>
          <b-col
            cols="12"
            lg="6"
            class="d-flex align-items-center justify-content-center flex-column"
          >
            <div class="home-banner">
              <div
                class="
                  d-flex
                  align-items-center
                  justify-content-right
                  flex-column
                "
              >
                <h1>PEE ONLINE</h1>
                <h2>
                  PROGRAMA DE ESPECIALIZACIÓN <br />
                  PARA EJECUTIVOS
                </h2>
              </div>
              <hr class="line" />
              <h4>Conoce nuestras 8 áreas</h4>
              <ul class="list-title">
                <li>Administración y Dirección de Personas</li>
                <li>Finanzas</li>
                <li>Marketing</li>
                <li>Operaciones y Logística</li>
                <li>Tecnologías de Información</li>
                <li>Salud</li>
                <li>Energía</li>
                <li>B2B</li>
              </ul>
              <div>
                <div class="section-content2">
                  <div class="section-1">07</div>
                  <div class="section-2">
                    <div class="init-date">
                      <span>inicio</span><br />
                      de junio
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </b-col>
          <b-col
            cols="12"
            lg="6"
            class="d-flex align-items-center justify-content-center"
          >
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
          </b-col>
        </b-row>
        <b-row>
          <b-col cols="12" lg="4" md="6" class="pl-0 pr-0"  >
            <div class="flip-card"  >
              <div class="flip-card-inner">
                <div class="flip-card-front bg-salud"  >
                  <router-link class="nav-link" to="/salud_page" 
                    >Salud
                    
                </router-link>
                </div>
                <div class="flip-card-back">
                  <router-link to="/salud_page">
                    <h1>John Doe</h1>
                    <p>Architect & Engineer</p>
                    <p>We love that guy</p>                    
                  </router-link>                 
                </div>
              </div>
            </div>
          </b-col>
          <b-col cols="12" lg="4" md="6" class="pl-0 pr-0">
            <div class="flip-card">
              <div class="flip-card-inner">
                <div class="flip-card-front bg-energia">
                  <router-link class="nav-link" to="/energy_page"
                    >Energia
                    
                </router-link>
                </div>
                <div class="flip-card-back">
                  <router-link  to="/energy_page"
                    >   
                    <h1>John Doe</h1>
                  <p>Architect & Engineer</p>
                  <p>We love that guy</p>
                    
                </router-link>
               
                </div>
              </div>
            </div>
     
          </b-col>
          <b-col cols="12" lg="4" md="6" class="pl-0 pr-0">
            <div class="flip-card">
              <div class="flip-card-inner">
                <div class="flip-card-front bg-ti">
                   <router-link class="nav-link" to="/ti_page"
                    >Tecnología de <br />
                    la Información</router-link
                  >
                </div>
                <div class="flip-card-back">
                  <router-link  to="/ti_page"
                    >Tecnología de <br />
                    la Información</router-link
                  >
                
                </div>
              </div>
            </div>
          </b-col>
          <b-col cols="12" lg="4" md="6" class="pl-0 pr-0">
            <div class="flip-card">
              <div class="flip-card-inner">
                <div class="flip-card-front bg-marketing">
                   <router-link class="nav-link" to="/marketing_page"
                    >Marketing</router-link
                  >
                </div>
                <div class="flip-card-back">
                   <router-link  to="/marketing_page"
                    >Marketing</router-link
                  >
                </div>
              </div>
            </div>
          </b-col>
          <b-col cols="12" lg="4" md="6" class="pl-0 pr-0">
            <div class="flip-card">
              <div class="flip-card-inner">
                <div class="flip-card-front bg-finanzas">
                  <router-link class="nav-link" to="/finanzas_page"
                    >Finanzas</router-link
                  >
                </div>
                <div class="flip-card-back">
                  <router-link  to="/finanzas_page"
                    >Finanzas</router-link
                  >
                </div>
              </div>
            </div>
          </b-col>
          <b-col cols="12" lg="4" md="6" class="pl-0 pr-0">
            <div class="flip-card">
              <div class="flip-card-inner">
                <div class="flip-card-front bg-b2b">
                       <router-link class="nav-link" to="/b2b_page"
                    >Business to <br />
                    Business
                  </router-link>
                </div>
                <div class="flip-card-back">
                  <router-link  to="/b2b_page"
                    >Finanzas</router-link
                  >
                </div>
              </div>
            </div>
          </b-col>
          <b-col cols="12" lg="4" md="6" class="pl-0 pr-0">
            <div class="flip-card">
              <div class="flip-card-inner">
                <div class="flip-card-front ">
                   <router-link class="nav-link" to="/logistica_page"
                    >Operaciones y <br />
                    Logística de Proyectos</router-link
                  >
                </div>
                <div class="flip-card-back">
                 <router-link to="/logistica_page"
                    >Finanzas</router-link
                  >
                </div>
              </div>
            </div>
          </b-col>
          <b-col cols="12" lg="4" md="6" class="pl-0 pr-0">
            <div class="flip-card">
              <div class="flip-card-inner">
                <div class="flip-card-front bg-administracion">
                  <router-link class="nav-link" to="/administracion_page"
                    >Administración y <br />
                    Dirección de <br />
                    la Información</router-link
                  >
                </div>
                <div class="flip-card-back">
                <router-link  to="/administracion_page"
                    >Administración y <br />
                    Dirección de <br />
                    la Información</router-link
                  >
                </div>
              </div>
            </div>
          </b-col>
          <b-col cols="12" lg="4" md="6" class="pl-0 pr-0">
            <div class="flip-card">
              <div class="flip-card-inner">
                <div class="flip-card-front bg-mineria">
                     <router-link class="nav-link" to="/mineria_page"
                    >Mineria</router-link
                  >
                </div>
                <div class="flip-card-back">
                  <router-link  to="/mineria_page"
                    >Mineria</router-link
                  >
                </div>
              </div>
            </div>
          </b-col>       
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
    <section class="sect-rankings">
      <b-container>
        <b-row>
          <b-col cols="12" md="4">
            <h1>vjhbjjj nnn guiuu buuu</h1>
          </b-col>
          <b-col cols="12" md="5"> </b-col>
          <b-col cols="12" md="3">
            <p>
              Lorem, ipsum dolor sit amet consectetur adipisicing elit.
              Architecto cum optio laboriosam, ullam neque quia repellendus
              explicabo soluta facere minus. Dolores voluptates neque est
              eligendi dolore expedita, optio harum magnam!
            </p>
          </b-col>
        </b-row>
      </b-container>
    </section>
    <div class="section-areas-inicio">
      <section>
        <b-container>
          <b-row>
            <b-col cols="12" class="mx-auto text-center">
              <b-container class="container-date">
                <b-row>
                  <b-col md="6" cols="12" align-self="center">
                    <div>
                      <div class="section-content">
                        <div class="section-1">07</div>
                        <div class="section-2">
                          <div class="init-date">
                            <span>inicio</span><br />
                            de junio
                          </div>
                        </div>
                      </div>
                    </div>
                  </b-col>
                  <b-col
                    md="6"
                    cols="12"
                    class="d-flex alig-items-center justify-content-center"
                  >
                    <div class="contact">
                      <b-container class="contact-container">
                        <b-row class="pb-3">
                          <b-col cols="2"><img src="../assets/home/iconos/info/mail.png" alt=""></b-col>
                          <b-col cols="10"><h5>fdfndjfnjkdnfjkd</h5></b-col>
                        </b-row>
                        <b-row>
                          <b-col cols="2"><img src="../assets/home/iconos/info/tel.png" alt=""></b-col>
                          <b-col cols="10"><h5>fdfndjfnjkdnfjkd</h5></b-col>
                        </b-row>
                      </b-container>
                    </div>
                  </b-col>
                </b-row>
              </b-container>
            </b-col>
          </b-row>
        </b-container>
      </section>
    </div>

    <FooterPage />

    <router-view />
  </div>
</template>

<script>
import HeadePage from "../components/HeadePage.vue";
import FormHome from "../components/FormHome";
import FooterPage from "../components/FooterPage";
export default {
  name: "HomeView",
  props: {
    msg: String,
  },
  components: {
    FormHome,
    FooterPage,
    HeadePage,
  },
};
</script>


<style lang="stylus" scoped>
@import '../styles/main.styl';

.flip-card {
  background-color: transparent;
  width: 300px;
  height: 300px;
  perspective: 1000px;
  color: white;
  font-weight: bold;
  line-height: 23px;
  width: 100%;
  height: 180px;
  border: 1px solid white;
}

.flip-card-inner {
  position: relative;
  width: 100%;
  height: 100%;
  text-align: center;
  transition: transform 0.6s;
  transform-style: preserve-3d;
  box-shadow: 0 4px 8px 0 rgba(0, 0, 0, 0.2);
}

.flip-card:hover .flip-card-inner {
  transform: rotateY(180deg);
}

.flip-card-front, .flip-card-back {
  position: absolute;
  width: 100%;
  height: 100%;
  -webkit-backface-visibility: hidden;
  backface-visibility: hidden;
}

.flip-card-front {
  background-color:black;
  color: black;
    &.bg-salud{
     background-image: url('../assets/home/areas/salud/kv.jpg')!important;
    };
    &.bg-energia{
     background-image: url('../assets/home/areas/energia/kv.jpg')!important;
    };
   
    &.bg-finanzas{
     background-image: url('../assets/home/areas/finanzas/kv.jpg')!important;
    }
    &.bg-administracion{
     background-image: url('../assets/home/areas/administracion/kv.jpg')!important;
    }
    &.bg-b2b{
     background-image: url('../assets/home/areas/b2b/kv.jpg')!important;
    }
    &.bg-marketing{
     background-image: url('../assets/home/areas/marketing/kv.jpg')!important;
    }
    &.bg-ti{
     background-image: url('../assets/home/areas/ti/kv.jpg')!important;
    };
    &.bg-mineria{
     background-image: url('../assets/home/areas/mineria/kv.jpg')!important;
    };
}

.flip-card-back {
  background-color: bg-black;
  color: white;
  transform: rotateY(180deg);
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

.nav {
  border-width: 0px !important;
  -webkit-box-shadow: 0px 0px !important;
  box-shadow: 0px 0px !important;
  background-color: rgba(0, 0, 0, 0) !important;
  background-image: -webkit-gradient(linear, 50% 0%, 50% 100%, color-stop(0%, rgba(0, 0, 0, 0)), color-stop(100%, rgba(0, 0, 0, 0))) !important;
  background-image: -webkit-linear-gradient(270deg, rgba(0, 0, 0, 0) 0%, rgba(0, 0, 0, 0) 100%) !important;
  background-image: linear-gradient(180deg, rgba(0, 0, 0, 0) 0%, rgba(0, 0, 0, 0) 100%) !important;
  color: black !important;
}

.navbar {
  color: black !important;
}

.pr-0 {
  padding-right: 0px !important;
}

.pl-0 {
  padding-left: 0px !important;
}

h3 {
  margin: 40px 0 0;
}

ul {
  list-style-type: none;
  padding: 0;
  width: 100%;
}

.nav-item2 {
  display: inline-block;
  margin: 0px;
  max-width: 380px;
  width: 100%;
  min-height: 70px;
  font-size: 24px;
}

a {
  color: white;
  width: 100%;
  height: 100%;
}

h1 {
  font-size: 60px;
  text-transform: uppercase;
  width: 100%;
  font-weight: bold;
  color: primary-pee;
}

h2 {
  font-size: 33px;
  text-transform: uppercase;
  width: 100%;
  font-weight: bold;
  color: primary-pee;
}

.line {
  border-top: 4px solid primary-pee;
  width: 48rem;
  margin-left: -220px;
  opacity: 1 !important;
  margin-block-start: 0px;
  margin-right: 0px;
  right: 0;
}

.navbar-nav {
  flex-direction: row;
}

.hello {
  background-image: url('../assets/home/banner/kv.jpg');
  color: white;
  height: 100vh;
  background-size: cover;
  background-repeat: no-repeat;
}

.list-title li {
  font-size: 24px;
}

.nav-link {
  padding-left: 20px;
  padding-bottom: 20px;
  display: flex;
  align-items: flex-end;
}

.home-banner {
  max-width: 780px;
}

.init-date {
  top: -35px;
  position: relative;
  right: 0px;
  text-align: left;
  width: 90px;
  margin-right: 0px;
  margin-left: auto;
}

.section-areas {
  padding: 120px 0px;
}

.container-date {
  border: 3px solid primary-pee;
  max-width: 1050px;
  width: 100%;
}

.section-areas-inicio {
  background-color: black;
  padding: 150px 0px !important;
}

.section-content {
  padding: 50px 0px 35px;
  display: flex;
  flex-direction: row;
  justify-content: center;
}

.section-content2 {
  padding: 20px 10px 10px 0px;
  display: flex;
  justify-content: left;

  .section-2 {
    width: 250px;
  }

  .section-1 {
    font-size: 118px;
    margin-top: -82px;
  }
}

.section-1 {
  position: absolute;
  z-index: 2;
  width: 50px;
  font-size: 137px;
  margin-right: 282px;
  margin-top: -87px;
  font-weight: bold;
  color: white;
}

.section-2 {
  background-color: primary-pee;
  font-size: 22px;
  line-height: 35px;
  position: relative;
  z-index: 1;
  text-align: right;
  width: 230px;
  padding-right: 10px;
  font-weight: bold;
  height: 50px;

  span {
    color: primary-pee;
    top: -20px;
  }
}

.contact {
  border-left: 2px solid white;
  margin: auto 0;
  padding: 10px 0px;
  width: 100%;

  .contact-container {
    max-width: 300px;
    color: white;
    width: 100%;
  }
}

.sect-rankings {
  background-color: #252A2D;
  padding: 100px 0px;
}

@media only screen and (max-width: 1200px) {
  .line {
    width: auto;
    margin-left: 0px;
  }

  .hello {
    height: auto;
    padding-bottom: 120px;
  }

  .section-2 {
    width: 197px;
    padding-right: 0px;
  }

  .section-1 {
    margin-right: 252px;
  }
}

@media only screen and (max-width: 767px) {
  .section-1 {
    margin-right: 179px;
    margin-top: -70px;
    font-size: 106px;
  }

  .contact {
    border-left: none;
  }
}
</style>
