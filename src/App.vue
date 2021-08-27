<template>
  <transition name="slide-fade" mode="out-in">
    <router-view />
  </transition>
</template>

<script>
export default {
  name: "App",
  data() {
    return {
      userData: {
        name: "ESAN Graduate School of Business | ESAN",
        keywords:
          "pee, programa para ejecutivos, cursos esan, pee esan, programas de esan, cursos cortos esan, pee de esan",
        description:
          "El PEE (Programa de Especialización para Ejecutivos) te formará de manera rápida y exigente de acuerdo a tus necesidades. ¡Conoce más, aquí!",
      },
    };
  },
  metaInfo() {
    return {
      title: this.userData.name ,
      meta: [
        { name: "description", content: this.userData.description },
        { property: "og:title", content: this.userData.name },
        { property: "og:description", content: this.userData.description },
        { property: "og:type", content: "website" },
        { name: "keywords", content: this.userData.keywords },
     
      ],
    };
  },
};
</script>

<style lang="stylus"></style>