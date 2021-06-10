<template>
  <div>
    <HeadePage />
    <ImagePage bgColorDivider="#C3B36D" message="Admisión" />
    <div class="bv-example-row">
      <b-container class="pasos-areas ">
        <b-row>
          <b-col  class="text-columns">
            <p class="title-text">Requisitos de Admisión</p>
            
            <p class="subtitle-text">Generales:</p>
            <p>
              Ser ejecutivo con experiencia y/o tener grado de bachiller
              universitario.
            </p>
            <p class="subtitle-text">Específicos:</p>
            <p>
              Algunos cursos requieren que el participante tenga conocimientos
              previos. En estos casos, se especificará claramente cuáles son y
              la obligatorie- dad de observarlos para el mejor aprovechamiento
              del curso.
            </p>
            <p class="subtitle-text">Perfil del Participante</p>
            <ul>
              <li>
                Ser un profesional que desea iniciar su carrera gerencial de
                acuerdo a sus necesidades inmediatas o proyectándose en un
                escenario especializado o generalista. Dependiendo de sus
                intereses, contará con cursos básicos.
              </li>
              <br />
              <li>
                Ser un profesional y ejecutivo que estando inmerso en la carrera
                gerencial, requiere afianzar o complementar sus conocimientos.
                Dependiendo de sus intereses contará con cursos intermedios.
              </li>
              <br />
              <li>
                Ser un profesional y ejecutivo senior que requiere ampliar su
                visión y conocimientos. Para ello, contará con cursos avanzados
                y cursos nuevos que le permitirán acceder a la frontera del
                conocimiento y por ende estar actualizado.
              </li>
            </ul>
          </b-col>
          <b-col   >
            <br> <br> 
            <p class="subtitle-text">Diplomas</p>
            <p>Se otorga según sea el caso:</p>
            <p>Si se inscribe a un curso:</p>
            <ul>
              <li>Diploma por haber aprobado un curso del PEE.</li>
            </ul>
            <p>Si se inscribe a un Certificado de Especialización:</p>
            <ul>
              <li>
                Diploma por haber aprobado cada uno de los cinco cursos del PEE.
              </li>
              <li>
                Diploma por haber aprobado el Certificado de Especialización.
              </li>
            </ul>
            <p class="text-explication">
              *La Universidad ESAN da un paso más en su camino a consolidarse
              como una institución educativa ecoamigable. En el marco de su
              campaña Camino al Cero Papel, a partir del 2020 se emitirán
              diplomas y certificados digitales con valor legal. Esta medida
              permitirá que todos los estudiantes reciban los documentos de
              manera inmediata y accedan a ellos desde cualquier disposi- tivo y
              desde cualquier parte del mundo.
            </p>
            <p class="text-explication">
              Esta modalidad será aplicada en todos los cursos, talleres,
              seminarios y con- ferencias que brinde la Universidad ESAN. Los
              documentos serán enviados al correo electrónico del participante,
              una vez concluidos los cursos. Asimismo, las firmas consignadas en
              los documentos serán emitidas en formato digital, al amparo de lo
              dispuesto en el artículo 141-A del Código Civil
            </p>
            <p class="text-explication">
              Si se requiere la versión impresa, se deberá presentar una
              solicitud a las ofici- nas de Admisión y realizar los pagos
              correspondientes.
            </p>
            <p class="subtitle-text">Documentos de Inscripción</p>
            <ul>
              <li>Solicitud de inscripción completa.</li>
              <li>
                Copia de grado bachiller o constancia de egresado universitario,
                si no contase con el requisito remitir el CV para evaluación.
              </li>
              <li>Puedes descargar la ficha de inscripción aquí:  <span class="subtitle-text-second">link</span>  </li>
            </ul>
            <p class="subtitle-text">Formas de Inscripción ex-Alumnos PEE</p>
            <p>
              Si es ex alumno del PEE o está matriculado en uno de los
              Certificados de Especialización deberá for- malizar su matrícula
              en:link
            </p>
            <p>Teléfono: 317-7226</p>
            <span>E-mail: informesaesan.edu.pe </span>
            <p>Cuenta Corriente: 193-1764415-0-72, Banco de Crédito.</p>
            <p>
              <span class="subtitle-text-three"> Nota:</span>  Si el depósito es realizado en el banco, el participante
              deberá presentar la boleta de depósi- to para poder sustentar el
              pago realizado al mo- mento de la inscripción.
            </p>
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
  name: "AdmisionPage",
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
.text-columns
  padding-right 25px
.subtitle-text-three
  font-size 15px
  font-family Raleway-Bold
  color bg-black
.subtitle-text-second
  font-size 15px
  font-family Raleway-BoldItalic
  color bg-black
.text-explication
  font-size 13px
  font-family Raleway-Italic
.title-text
  color bg-black
  font-size 30px
  font-family gt-pressura-bold
.subtitle-text
  color bg-black
  font-size 20px
  font-family Raleway-Bold
.bv-example-row {
  left: 0;
  bottom: 0;
  width: 100%;
  text-align: justify;
}

.pasos-areas 
  padding-right : 130px 
  padding-left : 130px 
  padding-bottom :80px
  padding-top 80px
  font-family Raleway-Regular
.jumbotron {
  background-image: url('../../assets/home/banner/kv.jpg');
  color: #C3B36D !important;
  background-position-y: -100px;

}

+for_breakpoint(mobile)
  .pasos-areas 
    padding-right : 30px !important
    padding-left : 30px !important
    padding-bottom :80px
    padding-top 80px

@media only screen and (max-width: 767px)  
  .pasos-areas 
    padding-right : 30px !important
    padding-left : 30px !important
    padding-bottom :80px
    padding-top 80px
  .text-columns
    padding-right 0px
</style>