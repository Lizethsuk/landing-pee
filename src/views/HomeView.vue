<template>
  <div class="hello">
    <div>
      <p>home</p>
      <ul class="navbar-nav">
        <li class="nav-item">
          <router-link class="nav-link" to="/salud_page">Energia</router-link>
        </li>
        <li class="nav-item">
          <router-link class="nav-link" to="/energy_page">Salud</router-link>
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
