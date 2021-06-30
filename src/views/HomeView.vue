<template>
  <div >

    <section  style="border-bottom: none !important">
      <b-container fluid class="bv-example-row hello ">
        <b-row>
          <b-col >
            <HeadePage />
          </b-col>
        </b-row>
 
        <b-row>
         <b-col cols="12 ps-0 pe-0">
           <b-container  class="ps-0 pe-0 container-home ">
             <b-row>
                <b-col
            cols="12"
            lg="6"
            class="d-flex  justify-content-end flex-column ps-5 pe-5"
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
                  PROGRAMA DE ESPECIALIZACIÓN 
                  PARA EJECUTIVOS
                </h2>
              </div>
              <hr class="line" />
              <h4>Conoce nuestras 9 áreas</h4>
              <ul class="list-title">
                <li>Administración y Dirección de Personas</li>
                <li>Finanzas</li>
                <li>Marketing</li>
                <li>Operaciones y Logística</li>
                <li>Tecnologías de Información</li>
                <li>Salud</li>
                <li>Energía</li>
                <li>B2B</li>
                <li>Minería</li>
              </ul>
              <div>
                <b-container class="ps-0 pe-0">
                  <b-row>
                    <b-col sm="2" cols="4">
                      <div class="h-100 init">
                        <span>inicio</span>
                      </div>
                    </b-col>
                    <b-col sm="10" cols="8">
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
            class=" col-form"
            
          >
            <FormHome />
          </b-col>
             </b-row>
           </b-container>
         </b-col>
        </b-row>
      </b-container>
    </section>
    <section  class="section-areas-0">
      <b-container class="bv-example-row section-areas">
        <b-row>
          <b-col>
            <h3 class="text-center ">
              CONOCE NUESTRAS <br />ÁREAS DE ESPECIALIZACIÓN
            </h3>
          </b-col>
        </b-row>
        <b-row class="d-flex justify-content-center" >
          <b-col cols="12" lg="4" sm="6" class="pl-0 pr-0"  >
            <div class="flip-card"  >
              <div class="flip-card-inner">
                <div class="flip-card-front bg-salud"  >
                  <router-link class="nav-link" :to="{
                    name: 'salud_page',
                    
                  }" 
                    ><h2>Salud</h2>
                    
                </router-link>
                </div>
                <div class="flip-card-back bg-back-salud">
                  <router-link  :to="{
                    name: 'salud_page',
                    
                  }" >
                  <div class="d-flex flex-column justify-content-between h-100">
                    <div>
                      <h2>Salud</h2>  
                    <p>Especialízate en: Operaciones y logística, 
                      tecnologías de Proyectos, gestión de
                      procesos y gerencia de proyectos.</p> 
                      </div>  
                      <div class="text-end" ><strong>+</strong></div> 
                  </div>               
                  </router-link>                 
                </div>
              </div>
            </div>
          </b-col>
          <b-col cols="12" lg="4" sm="6" class="pl-0 pr-0">
            <div class="flip-card" >
              <div class="flip-card-inner">
                <div class="flip-card-front bg-energia">
                  <router-link class="nav-link"  :to="{
                    name: 'energy_page'
                    
                  }" 
                    ><h2>Energía</h2>
                    
                </router-link>
                </div>
                <div class="flip-card-back bg-back-energia">
                  <router-link   :to="{
                    name: 'energy_page'
                   
                  }"
                    > 
                    <div class="d-flex flex-column justify-content-between h-100">
                      <div>
                        <h2>Energía</h2>  
                    <p>Especialízate en: Operaciones y logística, 
                      tecnologías de Proyectos, gestión de
                      procesos y gerencia de proyectos.</p>  
                      </div>
                      <div class="text-end" ><strong>+</strong></div> 
                      </div>  
                  
                </router-link>
               
                </div>
              </div>
            </div>
     
          </b-col>
          <b-col cols="12" lg="4" sm="6" class="pl-0 pr-0">
            <div class="flip-card">
              <div class="flip-card-inner">
                <div class="flip-card-front bg-ti">
                   <router-link class="nav-link" :to="{
                    name: 'ti_page'
                  }"
                    ><h2>Tecnologías de <br />
                    la Información </h2></router-link
                  >
                </div>
                <div class="flip-card-back bg-back-ti">
                  <router-link  :to="{
                    name: 'ti_page'
                  }"
                    >
                    <div class="d-flex flex-column justify-content-between h-100">
                      <div>
                        <h2>Tecnología de <br />
                    la Información</h2>
                    <p>Especialízate en: Operaciones y logística, 
                      tecnologías de Proyectos, gestión de
                      procesos y gerencia de proyectos.</p> 
                      </div>
                      <div class="text-end" ><strong>+</strong></div> 
                    </div>
                     
                    </router-link
                  >
                
                </div>
              </div>
            </div>
          </b-col>
          <b-col cols="12" lg="4" sm="6" class="pl-0 pr-0">
            <div class="flip-card" >
              <div class="flip-card-inner">
                <div class="flip-card-front bg-marketing">
                      <router-link class="nav-link" :to="{
                    name: 'marketing_page'
                  }"
                    ><h2>Marketing</h2></router-link
                  >
                    
                  
                </div>
                <div class="flip-card-back bg-back-marketing">
                  <router-link  :to="{
                    name: 'marketing_page'
                  }" 
                    >
                   <!-- <router-link  to='/marketing_page'
                    > -->
                    <div class="d-flex flex-column justify-content-between h-100">
                      <div>
                        <h2>Marketing</h2>
                    <p>Especialízate en: Operaciones y logística, 
                      tecnologías de Proyectos, gestión de
                      procesos y gerencia de proyectos.</p>  
                      </div>
                      <div class="text-end" ><strong>+</strong></div> 
                    </div>
                    
                    </router-link
                  >
                </div>
              </div>
            </div>
          </b-col>
          <b-col cols="12" lg="4" sm="6" class="pl-0 pr-0">
            <div class="flip-card" >
              <div class="flip-card-inner">
                <div class="flip-card-front bg-finanzas">
                  <router-link class="nav-link" :to="{
                    name: 'finanzas_page'
                  }"
                    ><h2>Finanzas</h2>
                    
                    </router-link
                  >
                </div>
                <div class="flip-card-back bg-back-finanzas">
                  <router-link  :to="{
                    name: 'finanzas_page'
                  }"
                    >
                    <div class="d-flex flex-column justify-content-between h-100">
                      <div>
                        <h2>Finanzas</h2>
                    <p>Especialízate en: Operaciones y logística, 
                      tecnologías de Proyectos, gestión de
                      procesos y gerencia de proyectos.</p> 
                      </div>
                      <div class="text-end" ><strong>+</strong></div> 
                    </div>
                     
                    </router-link
                  >
                </div>
              </div>
            </div>
          </b-col>
          <b-col cols="12" lg="4" sm="6" class="pl-0 pr-0">
            <div class="flip-card" >
              <div class="flip-card-inner">
                <div class="flip-card-front bg-b2b">
                       <router-link class="nav-link" :to="{
                    name: 'b2b_page'
                  }"
                    ><h2>Business to <br />
                    Business</h2>
                  </router-link>
                </div>
                <div class="flip-card-back bg-back-b2b">
                  <router-link  :to="{
                    name: 'b2b_page'
                  }"
                    >
                    <div class="d-flex flex-column justify-content-between h-100">
                      <div>
                        <h2>Business to <br />
                    Business</h2>
                    <p>Especialízate en: Operaciones y logística, 
                      tecnologías de Proyectos, gestión de
                      procesos y gerencia de proyectos.</p>  
                      </div>
                      <div class="text-end" ><strong>+</strong></div> 
                    </div>
                    
                    </router-link
                  >
                </div>
              </div>
            </div>
          </b-col>
          <b-col cols="12" lg="4" sm="6" class="pl-0 pr-0">
            <div class="flip-card" >
              <div class="flip-card-inner">
                <div class="flip-card-front ">
                   <router-link class="nav-link" :to="{
                    name: 'logistica_page'
                  }"
                    ><h2>Operaciones y <br />
                    Logística de Proyectos</h2></router-link
                  >
                </div>
                <div class="flip-card-back bg-back-logistica">
                 <router-link :to="{
                    name: 'logistica_page'
                  }"
                    >
                    <div class="d-flex flex-column justify-content-between h-100">
                      <div>
                      <h2>Operaciones y <br />
                    Logística de Proyectos</h2>
                    <p>Especialízate en: Operaciones y logística, 
                      tecnologías de Proyectos, gestión de
                      procesos y gerencia de proyectos.</p> 
                      </div> 
                      <div class="text-end" ><strong>+</strong></div> 
                      </div>  
                    
                    </router-link
                  >
                </div>
              </div>
            </div>
          </b-col>
          <b-col cols="12" lg="4"  sm="6" class="pl-0 pr-0">
            <div class="flip-card" >
              <div class="flip-card-inner">
                <div class="flip-card-front bg-administracion">
                  <router-link class="nav-link" :to="{
                    name: 'administracion_page'
                  }"
                    ><h2>Administración y <br />
                    Dirección de <br />
                    Personas</h2></router-link
                  >
                </div>
                <div class="flip-card-back bg-back-admi">
                <router-link  :to="{
                    name: 'administracion_page'
                  }"
                    >
                    <div class="d-flex flex-column justify-content-between h-100">
                      <div>
                      <h2>Administración y <br />
                    Dirección de 
                    Personas</h2>
                    <p>Especialízate en: Operaciones y logística, 
                      tecnologías de Proyectos, gestión de
                      procesos y gerencia de proyectos.</p>  
                    </div>
                   <div class="text-end" ><strong>+</strong></div> 
                    </div>
                    
                    </router-link
                  >
                </div>
              </div>
            </div>
          </b-col>
          <b-col cols="12" lg="4" sm="6" class="pl-0 pr-0">
            <div class="flip-card" >
              <div class="flip-card-inner">
                <div class="flip-card-front bg-mineria">
                     <router-link class="nav-link" :to="{
                    name: 'mineria_page'
                  }"
                    ><h2>Minería</h2></router-link
                  >
                </div>
                <div class="flip-card-back bg-back-mineria">
                  <router-link  :to="{
                    name: 'mineria_page'
                  }"
                    >
                    <div class="d-flex flex-column justify-content-between h-100">
                      <div>
                      <h2>Minería</h2>
                    <p>Especialízate en: Operaciones y logística, 
                      tecnologías de Proyectos, gestión de
                      procesos y gerencia de proyectos.</p> 
                    </div>
                    <div class="text-end" ><strong>+</strong></div> 
                      </div>  
                    </router-link
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
              Y QUE SE ADAPTA A TUS NECESIDADES
            </h3>
            <p>
              Permite que el participante pueda perfeccionarse en un área o dentro de ella. <br> Requiere la aprobación de cinco cursos elegidos por el participante. <br>
              El tiempo para completarlo es de dos años como máximo, contados a partir del primer curso que tome.
            </p>
          </b-col>
        </b-row>
        <b-row class="pt-5">
          <b-col lg="3" md="6" class="text-center" >
              <img class="v-01" alt="" >
              <!-- <div class="v-01"></div> -->
          </b-col>
          <b-col lg="3" md="6" class="text-center" >
              <img  class="v-02" alt="" >
          </b-col>
          <b-col lg="3" md="6" class="text-center" >
              <img class="v-03" alt="" >
          </b-col>
          <b-col lg="3" md="6" class="text-center" >
              <img class="v-04" alt="" >
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
              Y QUE SE ADAPTA A TUS NECESIDADES
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
                                        <p>Curso de otra Especialidad elegida</p>
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
                  <img  class="rk-1" alt="" >
                </b-col>
                <b-col md="6"  class="text-center" >
                  <img class="rk-2"  alt="" >
                </b-col>
                <b-col md="3" class="text-center">
                  <img class="rk-3"  alt="" >
                </b-col>
              </b-row>
            </b-container>
             </b-col>
          <b-col cols="12" lg="2"  class="d-flex align-items-center justify-content-center">
            <div>
              <p class="text-center ">Pertenecientes a la red:</p>
            <b-img center  class="logo-1" alt=""></b-img>
            </div>
           
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
@import '../styles/home.styl';
</style>