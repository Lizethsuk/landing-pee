<template>
  <div>
    <div class="footer">
      <br />
      <b-container class="bv-footer-row">
        <div class="line">
          <hr class="solid">
          <div class="link-section">
            <br>
            <b-row>
              <b-col>
                <div class="esan">
                  <p>ESAN</p>
                  <ul>
                    <li>
                      <a href="http://" class="link-footer">Acerca de ESAN</a>
                    </li>
                    <li>
                      <a href="http://" class="link-footer">Misión y Visión</a>
                    </li>
                    <li>
                      <a href="http://" class="link-footer">Organización</a>
                    </li>
                    <li>
                      <a href="http://" class="link-footer">Autoridades</a>
                    </li>
                    <li>
                      <a href="http://" class="link-footer"
                        >Reconocimiento internacional</a
                      >
                    </li>
                  </ul>
                </div>
              </b-col>
              <b-col>
                <div class="programas">
                  <p>Programas Académicos</p>
                  <ul>
                    <li><a href="http://" class="link-footer">MBA</a></li>
                    <li><a href="http://" class="link-footer">Maestrías</a></li>
                    <li>
                      <a href="http://" class="link-footer"
                        >Educación Ejecutiva</a
                      >
                    </li>
                    <li>
                      <a href="http://" class="link-footer"
                        >Programas Institucionales</a
                      >
                    </li>
                    <li>
                      <a href="http://" class="link-footer">ESAN en el Perú</a>
                    </li>
                    <li>
                      <a href="http://" class="link-footer"
                        >Semana Internacional</a
                      >
                    </li>
                    <li>
                      <a href="http://" class="link-footer"
                        >Todos los Programas</a
                      >
                    </li>
                    <li>
                      <a href="http://" class="link-footer">In Company</a>
                    </li>
                    <li><a href="http://" class="link-footer">Online</a></li>
                  </ul>
                </div>
              </b-col>
              <b-col>
                <div class="esan-secciones">
                  <p>ESAN</p>
                  <li><a href="http://" class="link-footer">Facultad</a></li>
                  <li>
                    <a href="http://" class="link-footer">Investigación</a>
                  </li>
                  <li>
                    <a href="http://" class="link-footer">Publicaciones</a>
                  </li>
                  <li>
                    <a href="http://" class="link-footer">Instituciones</a>
                  </li>
                  <li><a href="http://" class="link-footer">Exalumnos</a></li>
                </div>
              </b-col>
              <b-col>
                <div class="recursos">
                  <p>Recursos</p>
                  <li>
                    <a href="http://" class="link-footer">Portal Académico</a>
                  </li>
                  <li><a href="http://" class="link-footer">Biblioteca</a></li>
                  <li><a href="http://" class="link-footer">Correo Web</a></li>
                  <li><a href="http://" class="link-footer">Contáctanos</a></li>
                  <li>
                    <a href="http://" class="link-footer">English version </a>
                  </li>
                </div>
              </b-col>
            </b-row>
            <br /><br />
            <b-row>
              <b-col>
                <div class="logo">logo</div>
              </b-col>
              <b-col>
                <div class="social-media">
                  <p>Siguenos en:</p>
                  <span>t</span>
                  <span>t</span>
                  <span>t</span>
                  <p>www.esan.edu.pe</p>
                  <span> Universidad de ESAN2020 </span>
                </div>
              </b-col>
              <b-col>
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

.link-footer {
  color: white;
  text-decoration: none;
}

.data {
  text-align: right;
  padding-right: 25px;

  p {
    margin-block-end: 0.5px;
  }

  .number {
    font-size: 18px;
  }
}

.social-media {
  text-align: center;

  p {
    margin-block-end: 0.5px;
  }
}

.bv-footer-row {
  padding: 40px 90px 30px 90px;
  // border-top: 1px solid white;
  // padding-top: 25px;
}

.esan-secciones {
  padding-left: 50px;
}

.programas {
  padding-left: 50px;
}

.esan {
  padding-left: 20px;
}

.logo {
  padding-left: 30px;
}
hr.solid 
  border-top: 3px solid white;
  width: 75rem;
  margin-left: -45px;
  opacity: 1 !important



</style>