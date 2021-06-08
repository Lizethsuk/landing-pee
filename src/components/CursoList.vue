<template>
    <li class="nav-item li-area">
      <div class="box-area" :style="cssVars">
        <p class="title-curso" v-text="sectionName"></p>
        <p class="name-curso" v-text="cursoName"></p>
        <hr class="new4" :style="cssVars" />
        
              <img src="../assets/components/cursoList/shap/online.png" alt="">
        <p class="encargado" v-text="teacherName"></p>
        <span class="fecha" v-text="horarioName"></span>
      </div>
    </li>
</template>

<script>
export default {
  name: "CursoList",
  props: {
   sectionName: {
      type: String,
      require: true,
    },
    cursoName: {
      type: String,
      require: true,
    },
    teacherName: {
      type: String,
      require: true,
    },
    horarioName: {
      type: String,
      require: true,
    },
    bgColor: {
      type: String,
      default: "pink",
    },
    lineColor: {
      type: String,
      default: "pink",
    },
  },
  computed: {
    cssVars() {
      return {
        "--bg-color": this.bgColor,
        "--line-color": this.lineColor,
      };
    },
  }
};
</script>

<style lang="stylus" scoped>
@import '../styles/main.styl';

// .name-curso {
//   padding-bottom: 10px;
// }

// .title-curso {
//   padding-bottom: 10px;
// }

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
  max-width 420px;
  min-width 300px;
  width: 100%!important;
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
  border: 1px solid  var(--bg-color);
  padding: 10px;
  
}

li {
  background: #DBDBDB;
  margin 0 0 10px 0!important
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
@media (max-width: 767px) {
 
}
</style>