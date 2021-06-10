<template>
  <div>
    <HeadePage />
    <ImagePage bgColorDivider="#C3B36D" message="Financiamiento" />
    <div class="bv-example-row">
      <b-container class="pasos-areas">
        <b-row>
          <b-col   class="text-columns">
            <p class="title-text">
              Financiamineto solo para residentes del Perú
            </p>
            <p class="second-subtitle">
              Conoce nuestro descuento por matrícula anticipada
            </p>
            <p class="subtitle-text">Por curso</p>
            <p class="cursos">
              Cursos de 14 sesiones + sesión de evaluación final:
              <span class="subtitle-text-three">S/17806$xxx0</span>
            </p>
            <p class="subtitle-text">Por Certificado de Especialización</p>
            <span class="cursos">5 Cursos:</span>
          
            <p>
              <span class="subtitle-text-three"> S/ 17956 $xxo0000</span>
            </p>
            <p class="nota-text"> 
              <span class="subtitle-text-three"> Nota:</span> Todo
              financiamiento debe estar respaldado de una Declaración Jurada
              aceptada por el alumno.
            </p>
            <p class="subtitle-text">
              Descuento por Matrícula Anticipada al Contado
            </p>
            <p class="descount-text">Descuento: S/ 90 para Curso</p>
            <span class="descount-text"> Descuento: S/ 500 para Certificacos</span>
            <p class="descount-text">Descuento válido hasta el 12 de mayo de 2021.</p>

            <p class="subtitle-text">Inversión con Financiamiento</p>
            <p class="subtitle-text">Por curso</p>

            <div>
              <table class="table">
                <thead>
                  <tr>
                    <th class="title-table  title-t-1" scope="col">Alternativa</th>
                    <th class="title-table  title-t-1" scope="col">En 2 partes</th>
                    <th class="title-table  title-t-1" scope="col">En 3 partes</th>
                    <th class="title-table  title-t-1" scope="col">En 4 partes</th>
                  </tr>
                </thead>
                <tbody class="title-t-2">
                  <tr>
                    <th class="title-table" scope="row">
                      Cuota <br />
                      inicial
                    </th>
                    <td>S/ 894</td>
                    <td>S/ 600</td>
                    <td>S/ 451</td>
                  </tr>
                  <tr>
                    <th class="title-table" scope="row">Cuotas</th>
                    <td>
                      S/ 895 <br />
                      (1 cuota)
                    </td>
                    <td>
                      S/ 599 <br />
                      (2 cuota)
                    </td>
                    <td>
                      S/ 452 <br />
                      (3 cuota)
                    </td>
                  </tr>
                  <tr>
                    <th class="title-table" scope="row">
                      Interes <br />
                      Incluidos
                    </th>
                    <td>s/9</td>
                    <td>S/ 18</td>
                    <td>S/ 27</td>
                  </tr>
                </tbody>
              </table>
            </div>
          </b-col>
          <b-col  >
            <br />
            <br />
            <p class="subtitle-text">Por Certificado de Especialización</p>
            <p class="subtitle-text">
              Opción 1: Financiamiento a 12 cuotas sin intereses
            </p>

            <div>
              <table class="table">
                <thead>
                  <tr>
                    <th class="title-table  title-t-1" scope="col">
                      Paquetes de 5 <br />
                      cursos
                    </th>
                    <th class="title-table  title-t-1" scope="col">Contado</th>
                    <th class="title-table subtitle-table title-t-1" scope="col">
                      Financiamiento
                    </th>
                  </tr>
                </thead>
                <tbody  class="title-t-2">
                  <tr>
                    <th class="title-table" scope="row"></th>
                    <td>S/ 7195</td>
                    <td>
                      <div class="section-content">
                        <div>Cuota inicial</div>
                        <div>11 Cuotas</div>
                      </div>
                    </td>
                  </tr>
                  <tr>
                    <th class="title-table" scope="row"></th>
                    <td></td>
                    <div class="section-content">
                      <div>S/595</div>
                      <div>S/600</div>
                    </div>
                  </tr>
                </tbody>
              </table>
            </div>
            <p class="subtitle-text">
              Opción 2: Financiamiento a 21 cuotas con intereses
            </p>
            <div>
              <table class="table">
                <thead>
                  <tr>
                    <th class="title-table title-t-1" scope="col">
                      Paquetes de 5 <br />
                      cursos
                    </th>
                    <th class="title-table title-t-1" scope="col">Contado</th>
                    <th class="title-table subtitle-table title-t-1" scope="col">
                      Financiamiento
                    </th>
                  </tr>
                </thead>
                <tbody  class="title-t-2">
                  <tr>
                    <th class="title-table" scope="row"></th>
                    <td>S/ 7195</td>
                    <td>
                      <div class="section-content">
                        <div>Cuota inicial</div>
                        <div>20 Cuotas</div>
                      </div>
                    </td>
                  </tr>
                  <tr>
                    <th class="title-table" scope="row"></th>
                    <td></td>
                    <div class="section-content">
                      <div>S/428</div>
                      <div>S/375</div>
                    </div>
                  </tr>
                </tbody>
              </table>
            </div>
          </b-col>
        </b-row>
      </b-container>
    </div>

    <PasosPages
      colorIcon="green"
      lineColor="#C3B36D"
      bgColor="black"
      calendarioText="myJson.calendatioText"
      informeText="myJson.informesText"
      folletoText="myJson.folletoText"
      admisionText="myJson.admisionText"
    />
    <FooterPage />
  </div>
</template>

<script>
import HeadePage from "../../components/HeadePage";
import FooterPage from "../../components/FooterPage";
import ImagePage from "../../components/ImagePage.vue";
import PasosPages from "../../components/PasosPages.vue";
export default {
  name: "FinanciamientoPage",
  components: {
    HeadePage,
    FooterPage,
    ImagePage,
    PasosPages,
  },
};
</script>


<style lang="stylus" scoped>
@import '../../styles/main.styl';
.cursos
  font-family Raleway-Regular
.nota-text
  font-family Raleway-Regular
.descount-text
  font-family Raleway-Regular
.title-t-2
  font-family Raleway-Regular
.title-t-1
  font-family Raleway-Bold
.second-subtitle {
  background-color: #C4B076;
  font-family: gt-pressura-bold;
}

.subtitle-table {
  text-align: center;
}

.section-content {
  display: flex;
  flex-direction: row;
  justify-content: space-around;
}

.title-table {
  font-size: 14px;
}

.text-columns {
  padding-right: 25px;
}

.subtitle-text-three {
  font-size: 15px;
  font-family Raleway-Bold
  color: bg-black;
}

.subtitle-text-second {
  font-size: 15px;
  font-style: oblique;
  font-weight: bold;
  color: bg-black;
}

.text-explication {
  font-size: 13px;
  font-style: oblique;
}

.title-text {
  color: bg-black;
  font-size: 30px;
  font-family: gt-pressura-bold;
  text-align: left;
}

.subtitle-text {
  color: bg-black;
  font-size: 20px;
  font-family: Raleway-Bold;
}

.bv-example-row {
  left: 0;
  bottom: 0;
  width: 100%;
  text-align: justify;
}

.pasos-areas {
  padding-right: 130px;
  padding-left: 130px;
  padding-bottom: 80px;
  padding-top: 80px;
}

.jumbotron {
  background-image: url('../../assets/home/banner/kv.jpg');
  color: #C3B36D !important;
  background-position-y: -100px;

}

@media only screen and (max-width: 767px)  
  .pasos-areas 
    padding-right : 30px !important
    padding-left : 30px !important
    padding-bottom :80px
    padding-top 80px
  .text-columns
    padding-right 0px
</style>