<template>
  <div class="form-class">
    
    <b-form @submit="sendInformationRequest" v-if="show" class="form-g">
      <b-form-group class="all-btn">
        <h1>
          Regístrate <br />
          aquí:
        </h1>
        <p>
          Los cursos del PEE te permitirán desarrollarte en el ámbito
          profesional.
        </p>
      </b-form-group>
    <b-form-group class="all-btn" id="input-group-3" label-for="input-3">
        <b-form-select
          id="input-3"
          v-model="payload.food"
          :options="foods"
          required
        ></b-form-select>
      </b-form-group> 
      <b-form-group class="all-btn" id="input-group-2" label-for="input-2">
        <b-form-input
          id="input-2"
          v-model="payload.nombres"
          placeholder="Nombres"
          required
        ></b-form-input>
      </b-form-group>
     <b-form-group class="all-btn" id="input-group-4" label-for="input-4">
        <b-form-input
          id="input-4"
          v-model="payload.lastname"
          placeholder="Apellidos"
          required
        ></b-form-input>
      </b-form-group>
      <b-form-group class="all-btn" id="input-group-1" label-for="input-1">
        <b-form-input
          id="input-1"
          v-model="payload.dni"
          placeholder="DNI"
          required
        ></b-form-input>
      </b-form-group>
      <b-form-group class="all-btn" id="input-group-5" label-for="input-1">
        <b-form-input
          id="input-1"
          v-model="payload.email"
          type="email"
          placeholder="Correo electrónico"
          required
        ></b-form-input>
      </b-form-group>
      <b-form-group class="all-btn" id="input-group-6" label-for="input-6">
        <b-form-input
          id="input-6"
          v-model="payload.telefono"
          placeholder="Teléfono"
          required
        ></b-form-input>
      </b-form-group>
      <b-form-group class="all-btn" id="input-group-7" label-for="input-7">
        <b-form-input
          id="input-7"
          v-model="payload.cargo"
          placeholder="Cargo"
          required
        ></b-form-input>
      </b-form-group>
      <b-form-group class="all-btn">
        <country-select class="custom-select"
          placeholder="Seleccione su país"
          v-model="payload.country"
          :country="payload.country"
        />
      </b-form-group>

      <b-form-group
        class="all-btn"
        id="input-group-5"
        v-slot="{ ariaDescribedby }"
      >
        <b-form-checkbox-group
          v-model="payload.checked"
          id="checkboxes-5"
          :aria-describedby="ariaDescribedby"
        >
          <b-form-checkbox value="me"></b-form-checkbox>Acepto las
          <a @click="toggleModal">condiciones de tratamiento para mis datos</a>
        </b-form-checkbox-group>
      </b-form-group> 

      <b-button class="btn" type="submit">Enviar</b-button>
    </b-form>
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
export default {
  data() {
    return {
      countryName: false,
      payload: {
        country: "",
        email: "",
        nombres: "",
        lastname: "",
        dni: "",
        telefono: "",
        cargo: "",
        food: null,
        checked: [],
      },
      foods: [
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
      show: true,
      sending: false,
      retry_sending_times: 3,
      attempted_sendings_count: 0,
      seconds_before_next_attempt: 2,
    };
  },


  methods: {
    sendInformationRequest() {
      this.sending = true;
      var information_request = {
        timestamp: new Date().toJSON(), 
        payload: this.payload,
      };
      console.log(information_request);
      var limit = this.retry_sending_times;
      var attempts_count = this.attempted_sendings_count;
      var miliseconds_delay = this.seconds_before_next_attempt * 1000;
      axios.post(
         'https://www.esanbackoffice.com/websites/products/information-request/',information_request
 
      )
        .then( (response) => {
          console.log(response);
          if (response.data) {
            alert( "Éxito." );
            this.sending = false;
         }
          else {
            if (attempts_count < limit) {
              setTimeout(
                () => {
                  this.attempted_sendings_count = attempts_count + 1
                  console.log(this.attempted_sendings_count + ' retry attempts.1')
                  this.sendInformationRequest();
                  },
                  miliseconds_delay
                );
            } else {
              alert( "Hubo un error. Inténtalo de nuevo en unos minutos, por favor.1" ); // en lugar de una alerta, puede ser más claro para el usuario levantar un modal
              this.sending = false;
              this.attempted_sendings_count = 0;
            }
          }
        })
        .catch( (error) =>{
          alert(error);
          if (attempts_count < limit) {
            setTimeout(
              () => {
                this.attempted_sendings_count = attempts_count + 1
                console.log(this.attempted_sendings_count + ' retry attempts.2')
                this.sendInformationRequest();
                },
                miliseconds_delay
              );
          } else {
            alert( "Hubo un error. Inténtalo de nuevo en unos minutos, por favor.2" ); // en lugar de una alerta, puede ser más claro para el usuario levantar un modal
            this.sending = false;
            this.attempted_sendings_count = 0;
          }
        });
    },
    // onReset(event) {
    //   event.preventDefault();
    //   // Reset our form values
    //   this.payload.email = "";
    //   this.payload.name = "";
    //   this.payload.lastname = "";
    //   this.payload.dni = "";
    //   this.payload.cargo = "";
    //   this.payload.telefono = "";
    //   this.payload.food = null;
    //   this.payload.checked = [];
    //   this.payload.country = "";
    //   // Trick to reset/clear native browser form validation state
    //   this.show = false;
    //   this.$nextTick(() => {
    //     this.show = true;
    //   });
    // },
    showModal() {
      this.$refs["my-modal"].show();
    },
    hideModal() {
      this.$refs["my-modal"].hide();
    },
    toggleModal() {
      this.$refs["my-modal"].toggle("#toggle-btn");
    },
    accept() {
      const data = ["me"];
      this.$refs["my-modal"].toggle("#toggle-btn");
      this.payload.checked = this.payload.checked.concat(data);
    },
  },
};
</script>
<style lang="stylus" scoped>
@import '../styles/main.styl';
p {
  margin-bottom 1px
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

h1 {
  color: primary-pee;
  font-size: 39.82px;
  line-height: 37px;
  font-family: gt-pressura-bold;
}

.form-class {
  background-color: bg-form;
  width: 100%;
  max-width: 386px;
}

.custom-checkbox {
  display: inline-flex;
  margin-top: 10px;
}

.custom-control-inline {
  margin-right: 0px;
}

.all-btn {
  padding: 0px 40px;
}

.btn {
  background-color: #C0B170;
  width: 100%;
  height: 80px;
  margin-top: 10px;
  border-radius: 0px;
  color: bg-form;
  font-weight: bold;
  font-size: 30px;
}

.form-g {
  padding-top: 40px;
}

input, select {
  margin-bottom: 0px;
  background-color: bg-form;
  border-radius: 0px;
  font-family: raleway-regular;
  font-size: 14px;
}

input {
  border: none;
  border-bottom: 1.8px solid white;
  color: #676868;
}

select {
  border: 1.8px solid white;
  width: 100%;
  // padding 12px 5px
  color: white;
}
</style>