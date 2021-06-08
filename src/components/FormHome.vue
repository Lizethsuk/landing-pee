<template>
  <div class="form-class">
    <b-form @submit="onSubmit" @reset="onReset" v-if="show"  class="form-g" >
      <b-form-group class="all-btn">
        <h1>Regístrate aquí:</h1>
        <p>Los cursos del PEE te permitirán desarrollarte en el ámbito profesional.</p>
      </b-form-group>
      <b-form-group  class="all-btn" id="input-group-3"  label-for="input-3">
        <b-form-select
          id="input-3"
          v-model="form.food"
          :options="foods"
          required
        ></b-form-select>
      </b-form-group>
      <b-form-group  class="all-btn"
        id="input-group-1"
        label="Email address:"
        label-for="input-1"
        description="We'll never share your email with anyone else."
      >
        <b-form-input  class="all-btn"
          id="input-1"
          v-model="form.email"
          type="email"
          placeholder="Enter email"
          required
        ></b-form-input>
      </b-form-group>

      <b-form-group  class="all-btn" id="input-group-2" label="Your Name:" label-for="input-2">
        <b-form-input
          id="input-2"
          v-model="form.name"
          placeholder="Enter name"
          required
        ></b-form-input>
      </b-form-group>
       

      
      <b-form-group  class="all-btn" id="input-group-4" label="Your last name:" label-for="input-4">
        <b-form-input
          id="input-4"
          v-model="form.lastname"
          placeholder="Enter last name"
          required
        ></b-form-input>
      </b-form-group>
<b-form-group  class="all-btn" id="input-group-6" label="Your last name:" label-for="input-6">
        <b-form-input
          id="input-6"
          v-model="form.lastname"
          placeholder="Enter last name"
          required
        ></b-form-input>
      </b-form-group>
      <b-form-group  class="all-btn" id="input-group-7" label="Your last name:" label-for="input-7">
        <b-form-input
          id="input-7"
          v-model="form.lastname"
          placeholder="Enter last name"
          required
        ></b-form-input>
      </b-form-group>
      <b-form-group  class="all-btn" id="input-group-5" v-slot="{ ariaDescribedby }">
        <b-form-checkbox-group
          v-model="form.checked"
          id="checkboxes-5"
          :aria-describedby="ariaDescribedby"
        >
          <b-form-checkbox value="me">Acepto las condiciones de tratamiento para mis datos</b-form-checkbox>
        </b-form-checkbox-group>
      </b-form-group>

      <b-button class="btn" type="submit" >Enviar</b-button>
    </b-form>
  </div>
</template>

<script>
  export default {
    data() {
      return {
        form: {
          email: '',
          name: '',
          food: null,
          checked: []
        },
        foods: [{ text: '¿Qué área te interesa?', value: null }, 'Carrots', 'Beans', 'Tomatoes', 'Corn'],
        show: true
      }
    },
    methods: {
      onSubmit(event) {
        event.preventDefault()
        alert(JSON.stringify(this.form))
      },
      onReset(event) {
        event.preventDefault()
        // Reset our form values
        this.form.email = ''
        this.form.name = ''
        this.form.lastname = ''
        this.form.food = null
        this.form.checked = []
        // Trick to reset/clear native browser form validation state
        this.show = false
        this.$nextTick(() => {
          this.show = true
        })
      }
    }
  }
</script>
<style lang="stylus" scoped>

 @import "../styles/main.styl"

 h1 
  color primary-pee
.form-class
  background-color bg-form
  
  width 100%
  max-width 420px
label 
  display inline-block
  line-height 54px  

.custom-checkbox
  display flex
  padding-top 10px
  

.all-btn
 padding 0px 40px

.btn
  background-color #C0B170
  width 100%
  height 80px
  margin-top 10px
  border-radius 0px
  color bg-form
  font-weight bold 
  font-size 40px
.form-g
  padding-top 40px 
select 
  width 100%   


</style>