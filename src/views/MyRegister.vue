<template>
  <div class="row">
    <div class="col-sm-5 m-auto">
      <div class="text-center mb-3">
        <h1>Sign Up Page</h1>
      </div>
      <form id="SignUp-form" @submit="signupRequest">
        <div class="row">
          <div class="col-sm-12 form-group">
            <label for="email">Email Address </label>
            <input
              type="email"
              id="email"
              v-model="email"
              class="form-control form-control-lg"
            />
          </div>
          <div class="col-sm-12 form-group">
            <label for="password"> Enter Your Password</label>
            <input
              type="password"
              id="Password"
              v-model="password"
              class="form-control form-control-lg"
            />
          </div>
          <div class="col-sm-12 form-group">
            <button v-if="!xhrRequest" class="btn btn-primary btn-lg col-sm-4">
              SignUp
            </button>
            <button v-if="xhrRequest" class="btn btn-primary btn-lg col-sm-4">
              <span class="spinner-border spinner-border-sm btn-spn"></span>
              wait...
            </button>
          </div>
          <div class="col-sm-12 form-group mt-5">
            <p>Already Have An Account</p>
            <router-link to="/login"> Login</router-link>
          </div>
        </div>
      </form>
    </div>
  </div>
</template>

<script>
import initializeApp from 'firebase/app'

export default {
  data () {
    return {
      email: '',
      password: '',
      xhrRequest: false
    }
  },
  methods: {
    signupRequest () {
      initializeApp()
        .auth()
        .creatUserWithEmailAndPassword(this.email, this.password)
        .then(
          () => {
            alert('Registered successfuly')
          },
          (err) => {
            alert(`Error -${err.message}`)
          }
        )
    }
  }
}
console.log(123)
</script>

<style scoped>
.btn-spn {
  position: relative;
  top: -3px;
}
</style>
