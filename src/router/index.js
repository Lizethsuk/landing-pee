import Vue from 'vue'
// import Router from 'vue-router'
import SaludPage from "../pages/SaludPage"
import EnergyPage from "../pages/EnergyPage"
import TiPage from "../pages/TiPage"
import AdministrationPage from "../pages/AdministrationPage"
import B2bPage from "../pages/B2bPage"
import FinancePage from "../pages/FinancePage"
import MarketingPage from "../pages/MarketingPage"
import LogisticPage from "../pages/LogisticPage"
import MiningPage from "../pages/MiningPage"
import AdmisionPage from "../pages/menuPages/AdmisionPage"
import FinanciamientoPage from "../pages/menuPages/FinanciamientoPage"
import SolicitaInformacion from "../pages/menuPages/SolicitaInformacion"

import HomeView from "../views/HomeView"
import VueRouter from 'vue-router'
Vue.use(VueRouter)
const routes = [
    {
      path: "/solicita_informacion",
      name: "solicita_informacion",
      component: SolicitaInformacion
    },
    {
      path: "/financiamiento_page",
      name: "financiamiento_page",
      component: FinanciamientoPage
    },
    {
      path: "/admision_page",
      name: "admision_page",
      component: AdmisionPage
    },
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
    },
    {
      path: "/mineria_page",
      name: "mineria_page",
      component: MiningPage
    }
]
// export default new Router({
//   routes : [
//     {
//       path: "/solicita_informacion",
//       name: "solicita_informacion",
//       component: SolicitaInformacion
//     },
//     {
//       path: "/financiamiento_page",
//       name: "financiamiento_page",
//       component: FinanciamientoPage
//     },
//     {
//       path: "/admision_page",
//       name: "admision_page",
//       component: AdmisionPage
//     },
//     {
//       path: "/",
//       name: "HomeView",
//       component: HomeView
//     },
//     {
//       path: "/salud_page",
//       name: "salud_page",
//       component: SaludPage
//     },
//     {
//       path: "/energy_page",
//       name: "energy_page",
//       component: EnergyPage
//     },
//     {
//       path: "/ti_page",
//       name: "ti_page",
//       component: TiPage
//     },
//     {
//       path: "/b2b_page",
//       name: "b2b_page",
//       component: B2bPage
//     },
//     {
//       path: "/administracion_page",
//       name: "administracion_page",
//       component: AdministrationPage
//     },
//     {
//       path: "/finanzas_page",
//       name: "finanzas_page",
//       component: FinancePage
//     },
//     {
//       path: "/marketing_page",
//       name: "marketing_page",
//       component: MarketingPage
//     },
//     {
//       path: "/logistica_page",
//       name: "logistica_page",
//       component: LogisticPage
//     },
//     {
//       path: "/mineria_page",
//       name: "mineriaa_page",
//       component: MiningPage
//     }
//   ]

// })

const router = new VueRouter ({
  mode:"history",
  base: process.env.BASE_URL,
  routes,
  scrollBehavior(to,from,savedPosition){
    console.log(savedPosition)
    if (savedPosition) {
      return savedPosition
    } else if (to.hash){
       return{
         selector:to.hash
       }
    }
    else{
      return{
        x:0 , y:0
      }
    }
  }
  
})

export default router