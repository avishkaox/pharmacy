<template>
  <div class="App">
    <div class="container-fluid singup-section login-section">
      <div class="container">
        <div class="row">
          <div class="col-md-12 col-sm-12 col-xs-12">
            <h2>Log In to Your Account</h2>

            <form action="">
              <input placeholder="Email" type="text" />
              <input placeholder="Password" type="password" />

              <div class="flex-checkbox">
                <input
                  class="checkbox2"
                  type="radio"
                  id="terms"
                  name="terms"
                  value="terms"
                />
                <label for="terms"> Keep me logged in </label>
              </div>
              <button>Log in</button>
            </form>
            <h6>
              Need an account ? <router-link to="/singup">Sign up</router-link>
            </h6>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  name: "Login",
};
</script>

<style>
</style>