<template>
  <div class="App">
    <div class="container-fluid singup-section">
      <div class="container">
        <div class="row">
          <div class="col-md-6 col-sm-6 col-xs-12">
            <h2>Sign Up</h2>
            <p>Please fill in this form to create an account!</p>

            <form action="">
              <div class="flex-form">
                <input placeholder="First Name" class="" type="text" />
                <input placeholder="Last Name" type="text" />
              </div>
              <input placeholder="Email" type="text" />
              <input placeholder="Password" type="password" />
              <input placeholder="Confirm Password" type="password" />
              <div class="flex-checkbox">
                <input
                  class="checkbox"
                  type="radio"
                  id="terms"
                  name="terms"
                  value="terms"
                />
                <label for="terms">
                  I accept the Terms of Use & Privacy Policy
                </label>
              </div>
            </form>
            <button>Sign Up</button>
          </div>
          <div class="col-md-6 col-sm-6 col-xs-12">
            <div class="section-c">
              <img
                data-aos="fade-right"
                data-aos-duration="3000"
                class="img-fluid"
                src="/images/cloud1.png"
                alt=""
              />
              <img
                data-aos="fade-left"
                data-aos-duration="3000"
                class="img-fluid"
                src="/images/cloud2.png"
                alt=""
              />
              <img
                class="img-fluid"
                data-aos="fade-up-right"
                data-aos-duration="2000"
                src="/images/sun.png"
                alt=""
              />
            </div>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  name: "Singup",
};
</script>

<style>
</style>