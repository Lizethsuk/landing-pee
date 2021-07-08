<template>
  <div>
    <HeadePage />
    <ImagePage bgColorDivider="#C3B36D" message="Solicita Información" />

    <b-container class="pasos-areas">
      <b-row>
        <b-col>
          <p class="subtitle-text">Solicita mas Información</p>
          <b-form @submit="onSubmit" @reset="onReset" v-if="show">
            <b-form-group
              class="form-content"
              id="input-group-1"
              label-for="input-1"
            >
              <b-form-select
                id="input-1"
                v-model="form.areasdeIntere"
                :options="areasdeInteres"
                required
              ></b-form-select>
            </b-form-group>
            <b-container> </b-container>
            <b-row>
              <b-col lg="6" md="12">
                <div>
                  <b-form-group
                    class="form-content"
                    id="input-group-2"
                    label-for="input-2"
                  >
                    <b-form-input
                      id="input-2"
                      v-model="form.name"
                      placeholder="Nombre"
                      required
                    ></b-form-input>
                  </b-form-group>
                  <b-form-group
                    class="form-content"
                    id="input-group-3"
                    label-for="input-3"
                  >
                    <b-form-input
                      type="number"
                      id="input-3"
                      v-model="form.emainumereDNIl"
                      placeholder="Número de DNI/ID"
                      required
                    ></b-form-input>
                  </b-form-group>
                  <b-form-group
                    class="form-content"
                    id="input-group-4"
                    label-for="input-4"
                  >
                    <b-form-input
                      type="number"
                      id="input-4"
                      v-model="form.telefono"
                      placeholder="Teléfono"
                      required
                    ></b-form-input>
                  </b-form-group>
                  <b-form-group
                    class="form-content"
                    id="input-group-5"
                    label-for="input-5"
                  >
                    <b-form-input
                      id="input-5"
                      v-model="form.empresa"
                      placeholder="Empresa"
                      required
                    ></b-form-input>
                  </b-form-group>
                  <b-form-group
                    class="form-content"
                    id="input-group-6"
                    label-for="input-6"
                  >
                    <b-form-input
                      id="input-6"
                      v-model="form.cargo"
                      placeholder="Cargo"
                      required
                    ></b-form-input>
                  </b-form-group>
                </div>
              </b-col>
              <b-col lg="6" md="12">
                <div>
                  <b-form-group
                    class="form-content"
                    id="input-group-7"
                    label-for="input-7"
                  >
                    <b-form-input
                      id="input-7"
                      v-model="form.apellido"
                      placeholder="Apellido"
                      required
                    ></b-form-input>
                  </b-form-group>
                  <b-form-group
                    class="form-content"
                    id="input-group-8"
                    label-for="input-8"
                  >
                    <b-form-input
                      id="input-8"
                      v-model="form.nombre"
                      placeholder="Nombre"
                      required
                    ></b-form-input>
                  </b-form-group>
                  <b-form-group
                    class="form-content"
                    id="input-group-9"
                    label-for="input-9"
                  >
                    <select
                      class="form-select"
                      v-model="form.gradoAcademico"
                      required
                    >
                      <option v-bind:value="null" selected>
                        -Grado Académico-
                      </option>
                      <option
                        v-for="gradoAcademico in gradoAcademicos"
                        :key="gradoAcademico.id"
                      >
                        {{ gradoAcademico.name }}
                      </option>
                    </select>
                    <!-- <b-form-select
                      :key="name.id"
                      v-for="name in gradoAcademicos"
                      id="input-9"
                      v-model="form.gradoAcademico"
                      :options="name"
                      required
                    >
                    
                    </b-form-select> -->
                  </b-form-group>
                  <b-form-group
                    class="form-content"
                    id="input-group-10"
                    label-for="input-10"
                  >
                    <!-- <b-form-select
                      id="input-10"
                      v-model="form.industria"
                      :options="industrias"
                      required
                    ></b-form-select> -->

                    <select v-model="form.industria" required>
                      <option v-bind:value="null" selected>
                        -Industria o giro-
                      </option>
                      <option
                        v-for="industria in industrias"
                        :key="industria.id"
                      >
                        {{ industria.name }}
                      </option>
                    </select>
                  </b-form-group>
                  <b-form-group
                    class="form-content"
                    id="input-group-11"
                    label-for="input-11"
                  >
                    <!-- <b-form-select
                      id="input-11"
                      v-model="form.area"
                      :options="areas"
                      required
                    ></b-form-select> -->
                    <select v-model="form.area" required>
                      <option v-bind:value="null" selected>
                        -Areas donde trabaja-
                      </option>
                      <option v-for="area in areas" :key="area.id">
                        {{ area.name }}
                      </option>
                    </select>
                  </b-form-group>
                </div>
              </b-col>
            </b-row>
            <br />
            <p class="subtitle-text">Consulta</p>
            <b-form-group id="input-group-12" label-for="input-12">
              <b-form-textarea
                id="input-12"
                v-model="form.consulta"
                rows="8"
                max-rows="12"
                required
              ></b-form-textarea>
            </b-form-group>
            <b-form-group
              class="form-content"
              id="input-group-12"
              v-slot="{ ariaDescribedby }"
            >
              <b-form-checkbox-group
                v-model="form.checked"
                id="checkboxes-4"
                :aria-describedby="ariaDescribedby"
                required
              >
                <b-form-checkbox class="conditions" value="me">
                </b-form-checkbox>
                <span class="text-condiciones">
                  Acepto las
                  <a @click="toggleModal" class="access">
                    condiciones de tratamiento para mis datos personales
                  </a>
                </span>

                <!-- <b-form-checkbox value="that">Check that out</b-form-checkbox> -->
              </b-form-checkbox-group>
            </b-form-group>
            <p class="subtitle-text">
              ¿Cómo te enteraste de que dictamos este programa?
            </p>
            <b-form-group
              class="form-content"
              id="input-group-14"
              label-for="input-14"
            >
              <b-form-select
                id="input-14"
                v-model="form.alternativa"
                :options="alternativas"
                required
              ></b-form-select>
            </b-form-group>
            <br />
            <b-form-group>
              <country-select
                :removePlaceholder="true"
                v-model="form.country"
                :country="form.country"
                topCountry="PE"
              />
            </b-form-group>
            <br />
            <div class="button-content">
              <b-button class="button-text" type="submit" variant="primary"
                >Enviar mis datos</b-button
              >
            </div>
            <!-- <b-button type="reset" variant="danger">Reset</b-button> -->
          </b-form>
        </b-col>
      </b-row>
    </b-container>
    <PasosPages2
      colorIcon="white"
      lineColor="#C1B170"
      bgColor="black"
      calendarioText="myJson.calendatioText"
      informeText="myJson.informesText"
      folletoText="myJson.folletoText"
      admisionText="myJson.admisionText"
    />
    <FooterPage />
    <b-modal
      ref="my-modal"
      hide-footer
      title="Política de Protección de Datos Personales"
    >
      <div class="d-block text-justify modal1">
        <h3 class="text-center">Política de Protección de Datos Personales</h3>
        <p>
          De conformidad con la Ley N° 29733, Ley de Protección de Datos
          Personales, el usuario da su consentimiento para el tratamiento de los
          datos personales que son facilitados en el presente formulario o por
          cualquier medio desde el momento de su ingreso o utilización del
          portal. Asimismo, el usuario consiente que la Universidad ESAN pueda
          ceder estos datos a terceros para los fines expuestos a continuación.
        </p>
        <p>
          Estos serán incorporados en el banco de datos de usuarios de la
          Universidad ESAN, para utilizarlos en seguimiento de un eventual
          proceso de matrícula, envío de publicidad mediante cualquier medio y
          soporte, envío de invitaciones a actividades convocadas por ESAN o sus
          socios comerciales, para fines estadísticos, gestiones institucionales
          y administrativas; y se mantendrán mientras sean útiles para que la
          Universidad pueda prestar y ofrecer sus servicios y darles trámite.
        </p>
        <p>
          El usuario podrá ejercer los derechos de acceso, rectificación,
          oposición y cancelación de los datos personales escribiendo a
          datospersonales@esan.edu.pe o a la siguiente dirección: <br />
          Oficina de Protección de Datos Personales, Universidad ESAN. Alonso de
          Molina 1652, Monterrico, Surco, Lima - Perú
        </p>
      </div>
      <b-container fluid class="modal2">
        <b-row class="mb-1 text-center">
          <b-col cols="5">
            <b-button class="btn-m" block @click="hideModal">Cerrar</b-button>
          </b-col>
          <b-col cols="7">
            <b-button class="btn-m" block @click="accept"
              >Acepto esta política</b-button
            >
          </b-col>
        </b-row>
      </b-container>
    </b-modal>
  </div>
</template>

<script>
import axios from "axios";
import HeadePage from "../../components/HeadePage";
import FooterPage from "../../components/FooterPage";
import ImagePage from "../../components/ImagePage.vue";
import PasosPages2 from "../../components/PasosPages2.vue";
export default {
  name: "SolicitaInformacion",
  components: {
    HeadePage,
    FooterPage,
    ImagePage,
    PasosPages2,
  },
  data() {
    return {
      selected: null,
      countryName: false,
      options: [
        { value: null, text: "Please select an option" },
        { value: "a", text: "This is First option" },
        { value: "b", text: "Selected Option" },
        { value: { C: "3PO" }, text: "This is an option with object value" },
        { value: "d", text: "This one is disabled", disabled: true },
      ],
      form: {
        country: "",
        emainumereDNIl: "",
        checked: [],
        name: "",
        telefono: "",
        empresa: "",
        cargo: "",
        apellido: "",
        nombre: "",
        consulta: "",
        areasdeIntere: null,
        gradoAcademico: null,
        industria: null,
        area: null,
        alternativa: null,
      },
      alternativas: [
        { text: "-Elije una alternativa-", value: null },
        "Me lo comentó una amiga o amigo.",
        "Vi un aviso publicitario en un periódico o revista.",
        "Recibí un folleto impreso en mi casa u oficina.",
        "Vi un aviso publicitario en internet.",
        "Buscando información en Google u otros buscadores.",
        "Recibí información de mi empleador, jefe o de la empresa para la que trabajo.",
        "Me contactó un representante de ventas.",
        "Mediante Facebook, Twitter u otras redes sociales.",
        "Leyendo un artículo de Conexión ESAN.",
        "Visitando el sitio web de ESAN.",
        "Navegando por internet, en blogs u otros sitios web.",
      ],
      areasdeInteres: [
        { text: "¿Qué área te interesa?", value: null },
        "Administración y Dirección de personas",
        "Business to Business",
        "Energía",
        "Finanzas",
        "Marketing",
        "Minería",
        "Salud",
        "Operaciones y Logística",
        "Tecnologías de la Información",
      ],
      gradoAcademicos: [],
      industrias: [],
      areas: [],
      show: true,
    };
  },
  mounted() {
    axios
      .get(
        "https://www.esanbackoffice.com/api/world/academic-degrees/?limit=100%27"
      )
      .then(
        (response) => (
          (this.gradoAcademicos = response.data.results),
          console.log(response.data.results)
        )
      );
    axios
      .get("https://www.esanbackoffice.com/api/world/industries/?limit=100%27")
      .then(
        (response) => (
          (this.industrias = response.data.results),
          console.log(response.data.results)
        )
      );
    axios
      .get("https://www.esanbackoffice.com/api/world/functions/?limit=100%27")
      .then(
        (response) => (
          (this.areas = response.data.results),
          console.log(response.data.results)
        )
      );
  },
  methods: {
    onSubmit(event) {
      event.preventDefault();
      console.log(JSON.stringify(this.form));
    },
    onReset(event) {
      event.preventDefault();
      // Reset our form values
      this.form.numereDNI = "";
      this.form.name = "";
      this.form.telefono = "";
      this.form.empresa = "";
      this.form.cargo = "";
      this.form.apellido = "";
      this.form.nombre = "";
      this.form.consulta = "";
      this.form.alternativa = null;
      this.form.areasdeIntere = null;
      this.form.gradoAcademico = null;
      this.form.industria = null;
      this.form.area = null;
      this.form.country = "";
      this.form.checked = [];
      // Trick to reset/clear native browser form validation state
      this.show = false;
      this.$nextTick(() => {
        this.show = true;
      });
    },
    showModal() {
      this.$refs["my-modal"].show();
    },
    hideModal() {
      this.$refs["my-modal"].hide();
    },
    toggleModal() {
      // We pass the ID of the button that we want to return focus to
      // when the modal has hidden
      this.$refs["my-modal"].toggle("#toggle-btn");
    },
    accept() {
      const data = ["me"];
      this.$refs["my-modal"].toggle("#toggle-btn");
      this.form.checked = this.form.checked.concat(data);
    },
  },
};
</script>


<style lang="stylus" scoped>
@import '../../styles/main.styl';

.custom-checkbox {
  display: inline-flex !important;
}

.modal1 {
  h3 {
    font-size: 21px;
  }

  p {
    font-size: 14px;
  }

  btn-m {
    font-size: 1px;
  }
}

.modal2 {
  .btn {
    font-size: 16px;
    height: 50px;
  }
}

input[type=radio], input[type=checkbox] {
  margin: 4px 3px 3px !important;
  margin-top: 1px \9 !important;
  line-height: normal !important;
}

.text-condiciones {
  padding-left: 10px;
}

select {
  width: 100%;
  padding: 0.375rem 0.75rem;
  height: 38px;
  background-color: #dbdbdb;
  color: #6B6B6B;
  font-family: Raleway-Regular;
}

::placeholder {
  color: #6B6B6B;
  opacity: 1; /* Firefox */
  font-family: Raleway-Regular;
}

.button-content {
  text-align: center;
}

.button-text {
  font-family: gt-pressura-bold;
  width: 25em;
  font-size: 18px;
  border-radius: 0px;
  background-color: #C1B170;
  border-color: #C1B170;
  color: #252A2D;
  height: 52px;
  margin-top: 25px;
}

.conditions {
  font-family: Raleway-Regular;
}

.access {
  font-family: Raleway-Bold;
}

label {
  display: inline;
}

input {
  font-family: Raleway-Regular;
  // color blue !important
}

input, select, textarea, .conditions {
  margin-left: 10px;
}

.form-content {
  padding-top: 30px;
  font-family: Raleway-Regular;
}

.second-subtitle {
  background-color: #C4B076;
}

.pasos-areas {
  padding-right: 130px;
  padding-left: 130px;
  padding-bottom: 80px;
  padding-top: 80px;
  max-width: 1084px;
  width: 100%;
}

.subtitle-table {
  text-align: center;
}

.section-content {
  display: flex;
  flex-direction: row;
  justify-content: space-around;
}

.title-table {
  font-size: 14px;
}

.text-columns {
  padding-right: 25px;
}

.subtitle-text-three {
  font-size: 15px;
  font-weight: bold;
  color: bg-black;
}

.subtitle-text-second {
  font-size: 15px;
  font-style: oblique;
  font-weight: bold;
  color: bg-black;
}

.text-explication {
  font-size: 13px;
  font-style: oblique;
}

.title-text {
  color: bg-black;
  font-size: 30px;
  font-weight: bold;
  text-align: left;
}

.subtitle-text {
  color: bg-black;
  font-size: 32px;
  font-family: gt-pressura-bold;
}

.bv-example-row {
  left: 0;
  bottom: 0;
  width: 100%;
  text-align: justify;
}

.pasos-areas {
  padding-right: 130px;
  padding-left: 130px;
  padding-bottom: 80px;
  padding-top: 80px;
}

.jumbotron {
  background-image: url('../../assets/home/banner/kv-001-1.jpg');
  color: #C3B36D !important;
  background-position-y: -100px;
}

textarea, input {
  background-color: #DBDBDB;
  border-radius: 0px;
}

textarea, input, select, checkbox {
  border: 1.5px solid #252a2d;
}

.custom-checkbox {
  display: flex;
  margin-top: 10px;
}

.custom-control-label {
  margin-top: -5px;
}

+for_breakpoint(md) {
  .pasos-areas {
    padding-right: 30px !important;
    padding-left: 30px !important;
    padding-bottom: 80px;
    padding-top: 80px;
  }

  .button-text {
    width: 10em;
  }

  .jumbotron {
    background-image: url('../../assets/home/banner/kv-001-1.jpg');
    background-position-y: 0px;
    background-position-x: center;
    background-size: cover;
    width: 100%;
  }

  input, select, textarea, .conditions {
    margin-left: 0px;
  }
}

+for_breakpoint(mobile) {
  .pasos-areas {
    padding-right: 30px !important;
    padding-left: 30px !important;
    padding-bottom: 80px;
    padding-top: 80px;
  }

  .jumbotron {
    background-image: url('../../assets/home/banner/kv-001-1.jpg');
    background-position-y: 0px;
    background-position-x: center;
    background-size: cover;
    width: 100%;
  }

  .text-columns {
    padding-right: 0px;
  }

  .button-text {
    width: 15em !important;
  }
}
</style>