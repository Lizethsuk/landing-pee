<template>
  <div>
    <HeadePage />
    <ImagePage message="Marketing" background-image="Landscape-Color.jpg" />
     <DatePage bgColor="#09484F" month="mayo" day="04"  />
    <CursosPage title="title" lineColor="#7D6247" bgColor="#7D6247">
      <CursoList
        v-for="curso in cursos"
        :sectionName="curso.section"
        :cursoName="curso.curso"
        :teacherName="curso.teacher"
        :horarioName="curso.horario"
        :key="curso.id"
        bgColor="#09484F"
        lineColor="#35B3CC"
      />
    </CursosPage>
    <PasosPages colorIcon="green" bgColor="#09484F" 
     calendarioText="calendario"
     informeText="infor"
     folletoText="folle"
     admisionText="admis"
     lineColor="#F3CE8F"
    />
    <FooterPage />
  </div>
</template>

<script>
import HeadePage from "../components/HeadePage";
import FooterPage from "../components/FooterPage";
import ImagePage from "../components/ImagePage.vue";
import DatePage from "../components/DatePage.vue";
import CursosPage from "../components/CursosPage";
import CursoList from "../components/CursoList";
import PasosPages from "../components/PasosPages.vue";

export default {
  name:"MarketingPage",
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
      cursos: [
        {
          section: "Foo 1 ",
          curso: "curso - 1",
          teacher: "teacher - 1",
          horario: "horario - 1",
        },
        {
          section: "Foo 2 ",
          curso: "curso - 2",
          teacher: "teacher - 2",
          horario: "horario - 2",
        },
        {
          section: "Foo 3",
          curso: "curso - 3",
          teacher: "teacher - 3",
          horario: "horario - 3",
        },
      ],
    };
  },
}
</script>

<style lang="stylus" scoped>

 @import "../styles/main.styl"

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
  background: #D7EBF2;
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