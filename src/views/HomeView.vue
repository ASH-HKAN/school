<template>

  <div class="home-container">

  <div>
        <b-button v-b-toggle.sidebar-border>More Information</b-button>
    <b-sidebar id="sidebar-border" sidebar-class="">
      <div class="px-3 py-2">
        <p>
          Cras mattis consectetur purus sit amet fermentum. Cras justo odio, dapibus ac facilisis
          in, egestas eget quam. Morbi leo risus, porta ac consectetur ac, vestibulum at eros.
        </p>
        <b-img src="https://picsum.photos/500/500/?image=54" fluid thumbnail></b-img>
      </div>
    </b-sidebar>
  </div>

    <h1>Add New Teacher/Student</h1>
    <!-- <p> Count of Users  : {{ usersCount }} </p> -->
    <b-button type="Open/Close insert Form" variant="warning" @click="toggleForm">Open/Close insert Form</b-button>
<b-form @submit.prevent="SubmitHandler"  v-if="toggleData">

  <b-spinner type="grow" label="Spinning"></b-spinner>
  <b-spinner variant="danger" type="grow" label="Spinning"></b-spinner>

      <b-form-group id="input-group-2" label="Name:" label-for="input-2">
        <b-form-input
          id="input-2"
          v-model="formData.name"
          placeholder="Enter name"
          required
        ></b-form-input>
      </b-form-group>

      <b-form-group id="input-group-5" label="Family:" label-for="input-2">
        <b-form-input
          id="family"
          v-model="formData.family"
          placeholder="Enter Familyname"
          required
        ></b-form-input>
      </b-form-group>

      <b-form-group id="input-group-8" label="City:" label-for="input-2">
        <b-form-input
          id="city"
          v-model="formData.city"
          placeholder="Enter City"
          required
        ></b-form-input>
      </b-form-group>

       <b-form-group id="input-group-9" label="Country:" label-for="input-2">
        <b-form-input
          id="country"
          v-model="formData.country"
          placeholder="Enter Country"
          required
        ></b-form-input>
      </b-form-group>

      <b-form-group id="input-group-7" label="Age:" label-for="input-2">
        <b-form-input
          id="age"
          v-model="formData.age"
          placeholder="Enter Age"
          required
        ></b-form-input>
      </b-form-group>

      <b-form-group id="input-group-3" label="Category:" label-for="input-3">
        <b-form-select
          id="input-3"
          v-model="formData.cat"
          :options="['teachers' , 'students']"
          required
        ></b-form-select>
      </b-form-group>

      <b-button type="submit" variant="primary">Submit</b-button>
      <b-button type="reset" variant="danger">Reset</b-button>
    </b-form>
      </div>

</template>

<script>
import { mapActions } from 'vuex'
export default {

  data () {
    return {
      toggleData: false,
      formData: {

        name: '',
        family: '',
        age: 0,
        city: '',
        country: '',
        cat: null
      }
    }
  },
  methods: {

    toggleForm () {
      this.toggleData = !this.toggleData
    },
    ...mapActions(['addUser']),

    SubmitHandler () {
      console.log(2)
      const { cat, age, name, family, city, country } = this.formData
      const payload = {
        cat,
        user: {
          name,
          family,
          age,
          city,
          country
        }
      }
      this.addUser(payload)
    }
  }
}
</script>

<style scoped>
.btn {
  margin: 100px 100px;
}

</style>
