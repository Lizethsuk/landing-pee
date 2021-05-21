import Vue from 'vue'
import Router from 'vue-router'
import SaludPage from "../pages/SaludPage"
import EnergyPage from "../pages/EnergyPage"
import TiPage from "../pages/TiPage"
import AdministrationPage from "../pages/AdministrationPage"
import B2bPage from "../pages/B2bPage"
import FinancePage from "../pages/FinancePage"
import MarketingPage from "../pages/MarketingPage"
import LogisticPage from "../pages/LogisticPage"
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
    },
    {
      path: "/ti_page",
      name: "ti_page",
      component: TiPage
    },
    {
      path: "/b2b_page",
      name: "b2b_page",
      component: B2bPage
    },
    {
      path: "/administracion_page",
      name: "administracion_page",
      component: AdministrationPage
    },
    {
      path: "/finanzas_page",
      name: "finanzas_page",
      component: FinancePage
    },
    {
      path: "/marketing_page",
      name: "marketing_page",
      component: MarketingPage
    },
    {
      path: "/logistica_page",
      name: "logistica_page",
      component: LogisticPage
    }
  ]

})


