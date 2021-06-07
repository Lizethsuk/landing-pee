<template>
  <div>
    <div class="footer">
      <b-container class="bv-footer-row">
        <b-row>
          <b-col lg="4" md="6" cols="12">
            <div class="logo">logo</div>
          </b-col>
          <b-col lg="4" md="6" cols="12">
            <div class="column-three">
              <div class="social-media">
                <span class="icon">icon</span>
                <span class="icon">icon</span>
                <span class="icon">icon</span>
                <span class="icon">icon</span>
              </div>
              <p class="web"> www.esan.edu.pe  </p>
              <p class="text-uni">&copy; Universidad de ESAN 2020  </p>
            </div>
          </b-col>
          <b-col lg="4" md="6" cols="12">
            <div class="data">
              <p class="correo">informes@esan.edu.pe</p>
              <p class="direccion">Alonso de Molina 1652,Monterrico</p>
              <p class="distrito">Surco,Lima - Perú</p>
            </div>
          </b-col>
        </b-row>
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
.icon
  padding-right 30px
.bv-footer-row
  padding-right: 130px;
  padding-left: 130px;
  padding-bottom: 40px;
  padding-top: 40px;
.social-media {
  display: flex;
  flex-direction: row;
  justify-content: center;
  padding-bottom  20px
}

  
.correo
  font-size 19px
.web  
.text-uni
.direccion
.distrito
  font-size 12px
.web  
.text-uni
.correo
.direccion
.distrito
  margin-block-end 0px
.footer {
  left: 0;
  bottom: 0;
  width: 100%;
  background-color: backg-footer;
  color: white;
}

.data {
  text-align: right;
}

.column-three {
  text-align: center;
}
</style>