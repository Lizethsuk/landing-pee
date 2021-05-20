import Vue from 'vue'
import Router from 'vue-router'
import SaludPage from "../pages/SaludPage"
import EnergyPage from "../pages/EnergyPage"
import HomeView from "../views/HomeView"
Vue.use(Router)
export default new Router({
  routes : [
    {
      path: "/",
      name: "HomeView",
      component: HomeView
    },
    {
      path: "/salud_page",
      name: "salud_page",
      component: SaludPage
    },
    {
      path: "/energy_page",
      name: "energy_page",
      component: EnergyPage
    }


  ]

})


