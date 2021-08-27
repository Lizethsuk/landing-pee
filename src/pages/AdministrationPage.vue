<template>
  <div>
    <div>
      <HeadePage />
      <ImagePage :message="myJson.title" :messageSecond="myJson.title2" />
      <DatePage
        :bgColorButton="myJson.bgColorButtonDate"
        :bgColorDivider="myJson.bgColorDividerDate"
        :dateTextSecond="myJson.dateTextSecond"
        :buttonText="myJson.buttonText"
        :dateText="myJson.dateText"
        :bgColor="myJson.bgColorDate"
        :month="myJson.month"
        :day="myJson.date"
      />
      <CursosPage :title="myJson.titleCurso">
        <CursoList
          v-for="curso in myJson.cursos"
          :sectionName="curso.section"
          :cursoName="curso.curso"
          :teacherName="curso.teacher"
          :horarioName="curso.horario"
          :linkCurso="curso.linkCurso"
          :key="curso.id"
          :lineColor="myJson.lineColorCursos"
          :bgColor="myJson.bgColorCursos"
        />
      </CursosPage>
      <hr />
      <CursosPage :title="myJson.titleSecondCurso">
        <CursoList
          v-for="curso in myJson.cursosSecond"
          :sectionName="curso.section"
          :cursoName="curso.curso"
          :linkCurso="curso.linkCurso"
          :teacherName="curso.teacher"
          :horarioName="curso.horario"
          :key="curso.id"
          :lineColor="myJson.lineColorCursos"
          :bgColor="myJson.bgColorCursos"
        />
      </CursosPage>
      <PasosPages
        :colorIcon="myJson.colorIcon"
        :lineColor="myJson.lineColorPasos"
        :bgColor="myJson.bgColorPasos"
        :calendarioText="myJson.calendatioText"
        :informeText="myJson.informesText"
        :folletoText="myJson.folletoText"
        :admisionText="myJson.admisionText"
      />
      <FooterPage />
    </div>
  </div>
</template>

<script>
import json from "../data/AdministrationPage.json";
import HeadePage from "../components/HeadePage";
import FooterPage from "../components/FooterPage";
import ImagePage from "../components/ImagePage.vue";
import DatePage from "../components/DatePage.vue";
import CursosPage from "../components/CursosPage";
import CursoList from "../components/CursoList";
import PasosPages from "../components/PasosPages.vue";

export default {
  name: "AdministrationPage",
  components: {
    HeadePage,
    FooterPage,
    ImagePage,
    DatePage,
    CursosPage,
    CursoList,
    PasosPages,
  },
  data() {
    return {
      myJson: json,
      userData: {
        name: "ADMINISTRACIÓN Y DIRECCIÓN DE PERSONAS | PEE de ESAN",
        keywords:"pee, programa para ejecutivos, cursos esan, pee esan, programas de esan, cursos cortos esan, pee de esan",
        description:
          "Conoce más acerca de los cursos del área de Administración  y Dirección de personas del Programa de Especialización para Ejecutivos, PEE de ESAN y actualiza tus conocimientos. ",
      },
      aws_url: process.env.AWS_URL,
    };
  },
  beforeCreate() {
    window.scrollTo(0, 0);
  },
 metaInfo() {
    return {
      title: `${this.userData.name}`,
      meta: [
        { name: "description", content: this.userData.description },
        { property: "og:title", content: this.userData.name },
        { property: "og:description", content: this.userData.description },
        { property: "og:type", content: "article" },
        { name: "keywords", content: this.userData.keywords },
        { property: 'og:site_name', content: 'ADMINISTRACIÓN Y DIRECCIÓN DE PERSONAS | PEE de ESAN'},
      ],
    };
  },
};
</script>

<style lang="stylus" scoped>
@import '../styles/main.styl';

hr {
  background-color: secondary-administracion;
  height: 5px;
  opacity: 1 !important;
}

.jumbotron {
  background-image: url('../assets/areas/administracion/banner/kv_007-1.jpg');
}

.fecha {
  font-size: 20px;
}

.encargado {
  margin-block-end: 4px;
}

hr.new4 {
  border: 1px solid var(--line-color);
  opacity: 1;
}

.cursos-page {
  left: 0;
  bottom: 0;
  width: 100%;
  background-color: white;
}

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
  width: 31%;
  font-size: 24px;
  min-height: 70px;
}

a {
  color: white;
  width: 100%;
  height: 100%;
}

.navbar-nav {
  flex-direction: row;
}

.nav-link {
  padding-left: 20px;
  padding-bottom: 20px;
  display: flex;
  align-items: flex-end;
}

.box-area {
  font-weight: bold;
  line-height: 23px;
  width: 100%;
  height: 180px;
  border: 1px solid var(--bg-color);
  padding: 10px;
}

li {
  background: #F6E4C2;
}

li:nth-child(odd) {
  background: white;
}

// .home-banner {
// height: 88vh;
// }
.section-areas {
  padding: 50px 0px;
  padding-top: 20px;
}

section {
  border-bottom: 4px solid primary-pee;
}
</style>