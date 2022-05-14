<template>
  <div class="row">
    <div class="col-sm-5 m-auto">
      <div class="text-center mb-3">
        <h1>Login Page</h1>
      </div>
      <form id="login-form">
        <div class="row">
          <div class="col-sm-12 form-group">
            <label for="email">Email Address </label>
            <input
              type="email"
              id="email"
              class="form-control form-control-lg"
            />
          </div>
          <div class="col-sm-12 form-group">
            <label for="password"> Enter Your Password</label>
            <input
              type="password"
              id="Password"
              class="form-control form-control-lg"
            />
          </div>
          <div class="col-sm-12 form-group">
            <button class="btn btn-primary btn-lg col-sm-4">login</button>
          </div>
           <div class="col-sm-12 form-group mt-5">
            <p>Don't Have An Account</p>
            <router-link to="/Register"> SignUp</router-link>
          </div>
        </div>
      </form>
    </div>
  </div>
</template>

<script>
export default {}
</script>

<style lang="scss" scoped>
</style>
