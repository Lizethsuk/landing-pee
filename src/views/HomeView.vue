<template>
  <div>

    <!-- <div></div> -->
    <section style="border-bottom: none !important">
      <b-container fluid class="bv-example-row hello">
        <b-row>
          <b-col>
            <HeadePage />
          </b-col>
        </b-row>
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
                <b-container>
                  <b-row>
                    <b-col cols="2">
                      <div class="d-flex align-items-center">
                        <span>inicio</span>
                      </div>
                    </b-col>
                    <b-col>
                      <div class="section-content2">
                  <div class="section-1">07</div>
                  <div class="section-2">
                    <div class="init-date">
                      <span>de junio</span>
                      
                    </div>
                  </div>
                </div>
                    </b-col>
                  </b-row>
                </b-container>
                
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
    <section class="section-areas-0">
      <b-container class="bv-example-row section-areas">
        <b-row>
          <b-col>
            <h3 class="text-center ">
              CONOCE NUESTROS <br />ÁREAS DE ESPECIALIZACIÓN
            </h3>
          </b-col>
        </b-row>
        <b-row class="d-flex justify-content-center">
          <b-col cols="12" lg="4" sm="6" class="pl-0 pr-0"  >
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
          <b-col cols="12" lg="4" sm="6" class="pl-0 pr-0">
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
          <b-col cols="12" lg="4" sm="6" class="pl-0 pr-0">
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
          <b-col cols="12" lg="4" sm="6" class="pl-0 pr-0">
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
          <b-col cols="12" lg="4" sm="6" class="pl-0 pr-0">
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
          <b-col cols="12" lg="4" sm="6" class="pl-0 pr-0">
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
          <b-col cols="12" lg="4" sm="6" class="pl-0 pr-0">
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
          <b-col cols="12" lg="4" sm="6" class="pl-0 pr-0">
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
          <b-col cols="12" lg="4" sm="6" class="pl-0 pr-0">
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
    <section class="section s-ventajas">
      <b-container class="bv-example-row ">
        <b-row>
          <b-col cols="10" class="text-center mx-auto">
            <h3 class="pb-3">VENTAJAS</h3>
            <h3 class="pb-5">
              PEE ES UN PROGRAMA CORTO, FLEXIBLE <br />
              Y SE ADAPTA A TUS NECESIDADES
            </h3>
            <p>
              Son una opción flexible que permite que el participante pueda perfeccionarse en un
              área o detro de ella. <br> Requiere la aprobación de cinco cursos elegidos por el participante. <br>
              El tiempo para completarlo es de dos años como máximo, contados a partir del primer curso que tome.
            </p>
          </b-col>
        </b-row>
        <b-row class="pt-5">
          <b-col lg="3" md="6" class="text-center" >
              <img src="../assets/home/iconos/ventajas/v-01.png" alt="" >
          </b-col>
          <b-col lg="3" md="6" class="text-center" >
              <img src="../assets/home/iconos/ventajas/v-02.png" alt="" >
          </b-col>
          <b-col lg="3" md="6" class="text-center" >
              <img src="../assets/home/iconos/ventajas/v-03.png" alt="" >
          </b-col>
          <b-col lg="3" md="6" class="text-center" >
              <img src="../assets/home/iconos/ventajas/v-04.png" alt="" >
          </b-col>
        </b-row>
      </b-container>
    </section>
    <section class="section s-certificado">
      <b-container class="bv-example-row ">
        <b-row>
          <b-col class="text-center">
            <h3 class="pb-1">3 FORMAS DE OBTENER TU <br> CERTIFICADO DE ESPECIALIZACIÓN</h3>
            <h3 class="pb-5">
              PEE ES UN PROGRAMA CORTO, FLEXIBLE <br />
              Y SE ADAPTA A TUS NECESIDADES
            </h3>
            <p class="pb-5">
              El certificado de Especialización requiere la aprobación de cinco cursos elegidos por el participante, 
              y pueden ser llevados según las siguientes opciones*:
            </p>
            <div>
              <b-container>
                <b-row>
                  <b-col lg="8">
                    <b-container class="container-inter c-row-inter h-100" >
                      <b-row>
                        <b-col md="6" class="col-option">
                          <b-container class="container-inter">
                            <b-row>
                              <b-col cols="12">
                                <h4>OPCIÓN 1</h4>
                              </b-col>
                              <b-col cols="12">
                                <div class="box-option">
                                 <b-container class="box-container">
                                   <b-row>
                                     <b-col cols="4" class="pr-0">
                                       <h2>5</h2>
                                     </b-col>
                                      <b-col cols="8" class="d-flex align-items-center pl-1">
                                        <p>Cursos de la Especialidad elegida</p>
                                      </b-col>
                                   </b-row>
                                 </b-container>
                               </div>
                              </b-col>
                            </b-row>
                          </b-container>
                           
                        </b-col>
                        <b-col  md="6">
                           <b-container class="container-inter">
                             <b-row>
                               <b-col cols="12">
                                <h4>OPCIÓN 2</h4>
                              </b-col>
                               <b-col cols="12">
                               <div class="box-option">
                                 <b-container class="box-container">
                                   <b-row>
                                     <b-col cols="4" class="pr-0">
                                       <h2>4</h2>
                                     </b-col>
                                      <b-col cols="8" class="d-flex align-items-center pl-1">
                                        <p>Cursos de la Especialidad elegida</p>
                                      </b-col>
                                   </b-row>
                                 </b-container>
                               </div>
                             </b-col>
                             <b-col cols="12">
                               <img src="../assets/home/iconos/certificado-especializacion/conector/conector.png" alt="" >
                             </b-col>
                             <b-col cols="12">
                               <div class="box-option">
                                 <b-container class="box-container">
                                   <b-row>
                                     <b-col cols="4" class="pr-0">
                                       <h2>1</h2>
                                     </b-col>
                                      <b-col cols="8" class="d-flex align-items-center pl-1">
                                        <p>Curso de otra área</p>
                                      </b-col>
                                   </b-row>
                                 </b-container>
                               </div>
                             </b-col>
                             </b-row>
                           </b-container>
                        </b-col>
                      </b-row>
                       <b-row>
                  <b-col class="col-option">
                    <p>*Para las Áreas de Energía, Salud, B2B y Minería solo se podrá elegir la opción
1 y 2 para obtener el Certificado de Especialización.</p>
                  </b-col>
                </b-row>
                    </b-container>
                  </b-col>
                  <b-col lg="4">
                     <b-container class="container-inter">
                             <b-row>
                               <b-col cols="12">
                                <h4>OPCIÓN 3</h4>
                              </b-col>
                               <b-col cols="12">
                               <div class="box-option">
                                 <b-container class="box-container">
                                   <b-row>
                                     <b-col cols="4" class="pr-0">
                                       <h2>3</h2>
                                     </b-col>
                                      <b-col cols="8" class="d-flex align-items-center pl-1">
                                        <p>Cursos de la Especialidad elegida</p>
                                      </b-col>
                                   </b-row>
                                 </b-container>
                               </div>
                             </b-col>
                             <b-col cols="12">
                               <img src="../assets/home/iconos/certificado-especializacion/conector/conector.png" alt="" >
                             </b-col>
                             <b-col cols="12">
                               <div class="box-option">
                                 <b-container class="box-container">
                                   <b-row>
                                     <b-col cols="4" class="pr-0">
                                       <h2>1</h2>
                                     </b-col>
                                      <b-col cols="8" class="d-flex align-items-center pl-1">
                                        <p>Cursos de otra Especialidad elegida</p>
                                      </b-col>
                                   </b-row>
                                 </b-container>
                               </div>
                             </b-col>
                             <b-col cols="12">
                               <img src="../assets/home/iconos/certificado-especializacion/conector/conector.png" alt="" >
                             </b-col>
                             <b-col cols="12">
                               <div class="box-option">
                                 <b-container class="box-container">
                                   <b-row>
                                     <b-col cols="4" class="pr-0">
                                       <h2>1</h2>
                                     </b-col>
                                      <b-col cols="8" class="d-flex align-items-center pl-1">
                                        <p>Cursos de otra área</p>
                                      </b-col>
                                   </b-row>
                                 </b-container>
                               </div>
                             </b-col>
                             </b-row>
                           </b-container>
                  </b-col>
                </b-row>
               
              </b-container>
            </div>
          </b-col>
        </b-row>
      </b-container>
    </section>
    <section class="sect-rankings">
      <b-container class="contain-sec">
        <b-row>
          <b-col cols="12" lg="4">
            <h1>ESAN, PRESENTE EN LOS RANKINGS MÁS PRESTIGIOSOS DEL MUNDO</h1>
          </b-col>
          <b-col cols="12" lg="6">
            <b-container>
              <b-row>
                <b-col md="3" class="text-center">
                  <img src="../assets/home/iconos/rankings/rk-1.png" alt="" >
                </b-col>
                <b-col md="6" class="text-center" >
                  <img src="../assets/home/iconos/rankings/rk-2.png" alt="" >
                </b-col>
                <b-col md="3" class="text-center">
                  <img src="../assets/home/iconos/rankings/rk-3.png" alt="" >
                </b-col>
              </b-row>
            </b-container>
             </b-col>
          <b-col cols="12" lg="2">
            <img src="../assets/home/iconos/rankings/sponsor/logo-1.png" alt="">
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
                    <div class="div-section-content">
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
                    class="d-flex align-items-center contact"
                  >
                    <b-container class="contact-container">
                        <b-row class="pb-3">
                          <b-col cols="2 ps-2"><img src="../assets/home/iconos/info/mail.png" alt=""></b-col>
                          <b-col cols="10"><h5>informes@esan.edu.pe</h5></b-col>
                        </b-row>
                        <b-row>
                          <b-col cols="2 ps-2"><img src="../assets/home/iconos/info/tel.png" alt=""></b-col>
                          <b-col cols="10"><h5>317-7200 | 317-7226</h5></b-col>
                        </b-row>
                      </b-container>
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
/* eslint-disable */
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
/* eslint-disable */
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
  height: 23.2vh;
  border: 1px solid white;
  font-family gt-pressura-bold

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
  padding 20px;
  text-align left;
  width: 100%;
  height: 100%;
  -webkit-backface-visibility: hidden;
  backface-visibility: hidden;
}

.flip-card-front {
  background-color:black;
  color: black;
  font-size 39.82px;
  line-height 47.78px;
  padding-bottom 10px;
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
    a{
      text-decoration none
      display flex
      align-self flex-end
      flex-direction column
      justify-items end
     h1{
      font-size 21px
      border-bottom none 
    }
  }
 

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
  margin-left: 15px
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
  font-family: gt-pressura-bold
}

h2 {
  font-size: 39.2px;
  text-transform: uppercase;
  width: 100%;
  font-weight: bold;
  color: primary-pee;
  font-family: gt-pressura-bold
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
  line-height 28px
  font-weight 100
}
.list-title li::marker {
  content:'- ';
}

.nav-link {
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
  width: 110px;
  margin-right: 0px;
  margin-left: auto;
  font-family gt-pressura-bold
}

.section-areas-0 {
  padding: 95px 0px;
  background-image url('../assets/home/banner/section-areas/bg.png');
  border-bottom 4px solid primary-pee
  h3{
    margin 15px 0 0
    font-size 39.82px
    font-family gt-pressura-bold
  }
}
.section{
  padding: 105px 0px;
  p{
    font-size 24px
    line-height 28.8px
    margin-bottom 0px
  }
  h3{
    margin 15px 0 0
    font-size 39.82px
    font-family gt-pressura-bold
  }
 
}
.s-ventajas{
  img{
    max-width 337px
    width 100%
  }
}
.s-certificado{
  background-color #E1E1E1
  .container-inter{
    padding-left 0px
    padding-right 0px
    &.c-row-inter{
      display flex
      justify-content space-between
      flex-direction column
      .col-option{
        margin-bottom 40px
        p{
          text-align left
        }
      }
    }

  }
  .box-option{
    margin 0 auto
    border-radius 100%
    border 9.4px solid backg-footer
    background-color white
    height 220px
    width 220px
    display flex
    justify-content center
    align-items center
    flex-direction row
    .box-container{
      width 176px
      padding  0px
      p{
        font-size 18px
        line-height 21.6px
        text-align left
        margin-bottom 0px
      }
      h2{
        font-size 78.38px
        margin-bottom 0px
      }
    }
  }
}

.container-date {
  border: 3px solid primary-pee;
  max-width: 1046px;
  width: 100%;
  padding: 15px 0px
  .div-section-content{
    width 300px
    margin-right 0px
    margin-left auto
  }
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
    width: 240px;
    height: 64px;
    margin-left 38px
    span{
      font-size 35.53px
      color #252A2D
      font-family GT-pressura-bold
    }
  }

  .section-1 {
    font-size: 130px;
    line-height: 182px;
    margin-top: -68px;
    font-family GT-pressura-bold
  }
  .init-date {
  top: 5px;
  position: relative;
  right: 7px;
  text-align: left;
  width: 119px;
  margin-right: 0px;
  margin-left: auto;

}
}

.section-1 {
  position: absolute;
  z-index: 2;
  width: 167px;
  font-size: 194px;
  margin-right: 282px;
  margin-top: -136px;
  font-weight: bold;
  color: white;
  font-family gt-pressura-bold
}

.section-2 {
  background-color: primary-pee;
  font-size: 22px;
  line-height: 35px;
  position: relative;
  z-index: 1;
  text-align: right;
  width: 304px;
  padding-right: 10px;
  font-weight: bold;
  height: 50px;

  span {
    color: white;
    top: -20px;
  }
}

.contact {
  border-left: 2px solid white;


  .contact-container {
    max-width: 380px;
    color: white;
    width: 100%;
    margin-left 0px
    padding-left 40px
    text-align left
    h5{
      font-size 24px
      font-family Raleway-Regular
    }
  }
}

.sect-rankings {
  background-color: #252A2D;
  padding: 100px 0px;
  h1{
    font-size 39.82px
    color white
    line-height 47px
  }
  .contain-sec{
    padding-left value
  } 
 
}
@media (min-width: 768px) and (max-width: 991px){
  .contact {
  border-left: 2px solid white;


  .contact-container {
    max-width: 380px;
    h5{
      font-size 20px
      font-family Raleway-Regular
    }
  }
}

}
@media only screen and (max-width: 1560px) {
  .flip-card-front{
    font-size 30px
    line-height 31px
  }

  .hello {
    height: auto;
    padding-bottom: 120px;
  }

  .section-2 {
    width: 254px;
    padding-right: 0px;
  }

  .section-1 {
    margin-right: 252px;
  }
}

@media only screen and (max-width: 767px) 
  .flip-card{
    height: 28.2vh
  }
  .line {
    max-width: 560px
    width: auto;
  }
  .section-1 {
    margin-right: 179px;
    margin-top: -70px;
    font-size: 106px;
  }
  .container-date {
    border: 3px solid primary-pee;
    max-width: 1046px;
    width: 100%;
    padding: 15px 0px
  .div-section-content{
    max-width 300px
    width 100%
    margin auto
  }
  .contact {
    border-left: none;
    .contact-container {
    max-width 230px
    margin auto
    padding 0
    h5{
      font-size 18px
    }
    img{
      width 30px
    }
  }
  }
}
  
h1 {
  font-size: 45px;
  
}

h2 {
  font-size: 25px;
}
.section{
  padding: 105px 0px;
  p{
    font-size 20px
    line-height 24px
  }
  h3{
    font-size 26px
  }
 
}
.s-ventajas
  img
    max-width 250px
    width 100%
.section-areas-0
  h3 
    font-size 24px     
.row
  --bs-gutter-x 0px    

</style>
