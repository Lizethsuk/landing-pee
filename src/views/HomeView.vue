<template>
  <div class="hello">
    <div>
      <p>home</p>
      <ul class="navbar-nav">
        <li class="nav-item">
          <router-link class="nav-link" to="/salud_page">Salud</router-link>
        </li>
        <li class="nav-item">
          <router-link class="nav-link" to="/energy_page">Energia</router-link>
        </li>
        <li class="nav-item">
          <router-link class="nav-link" to="/ti_page">Tecnología de <br> la Información</router-link>
        </li>
        <li class="nav-item">
          <router-link class="nav-link" to="/marketing_page">Marketing</router-link>
        </li>
        <li class="nav-item">
          <router-link class="nav-link" to="/finanzas_page">Finanzas</router-link>
        </li>
        <li class="nav-item">
          <router-link class="nav-link" to="/b2b_page">Business to <br>Business </router-link>
        </li>
        <li class="nav-item">
          <router-link class="nav-link" to="/logistica_page">Operaciones y <br> Logística de <br> Proyectos</router-link>
        </li>
        <li class="nav-item">
          <router-link class="nav-link" to="/administracion_page">Administración <br> y Dirección de <br> la Información</router-link>
        </li>
      </ul>
    </div>
    <router-view />
  </div>
</template>

<script>
export default {
  name: "HomeView",
  props: {
    msg: String,
  },
};
</script>

<style scoped>
h3 {
  margin: 40px 0 0;
}
ul {
  list-style-type: none;
  padding: 0;
}
li {
  display: inline-block;
  margin: 0 10px;
}
a {
  color: #42b983;
}
</style>
