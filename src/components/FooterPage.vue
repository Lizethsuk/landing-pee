<template>
  <div>
    <div class="footer">
      <br />
      <b-container class="bv-footer-row">
        <div class="line">
          <div class="link-section">
           
            <b-row>
              <b-col lg="4"  md="6" cols="12">
                <div class="logo">logo</div>
              </b-col>
              <b-col lg="4"   md="6" cols="12">
                <div class="social-media">
                  <p>Siguenos en:</p>
                  <span>t</span>
                  <span>t</span>
                  <span>t</span>
                  <p>www.esan.edu.pe</p>
                  <span> Universidad de ESAN2020 </span>
                </div>
              </b-col>
              <b-col lg="4" md="6" cols="12">
                <div class="data">
                  <p class="number">(511) 317-720</p>
                  <p>Alonso de Molina 1652,Monterrico</p>
                  <p>Surco,Lima - Perú</p>
                </div>
              </b-col>
            </b-row>
          </div>
        </div>
      </b-container>
    </div>
  </div>
</template>

<script>
export default {
  name: "FooterPage",
};
</script>

<style lang="stylus" scoped>
@import '../styles/main.styl';

.footer {
  left: 0;
  bottom: 0;
  width: 100%;
  background-color: backg-footer;
  color: white;
}

// .link-footer {
//   color: white;
//   text-decoration: none;
// }

// .data {
//   text-align: right;
//   padding-right: 25px;

//   p {
//     margin-block-end: 0.5px;
//   }

//   .number {
//     font-size: 18px;
//   }
// }

// .social-media {
//   text-align: center;

//   p {
//     margin-block-end: 0.5px;
//   }
// }

// .bv-footer-row {
//   padding: 40px 90px 30px 90px;
//   // border-top: 1px solid white;
//   // padding-top: 25px;
// }

// .esan-secciones {
//   padding-left: 50px;
// }

// .programas {
//   padding-left: 50px;
// }

// .esan {
//   padding-left: 20px;
// }

// .logo {
//   padding-left: 30px;
// }
// hr.solid 
//   border-top: 3px solid white;
//   width: 75rem;
//   margin-left: -45px;
//   opacity: 1 !important



</style>