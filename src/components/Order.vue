<template>
  <div class="App">
    <div class="container-fluid order-section">
        <div class="container">
            <div class="row">
                <div class="col-md-6 col-sm-6 col-xs-12 main">
                    <form action="get">
                        <input placeholder="Name" type="text">
                        <input placeholder="Contact Number" type="text">
                        <input placeholder="NIC" type="text">
                        <input placeholder="Address" type="text">
                        <textarea name="File Upload" id="" cols="30" rows="10"></textarea>
                    </form>
                    <button>Confirm</button>
                </div>
                <div class="col-md-6 col-sm-6 col-xs-12">
                     <img data-aos="fade-left" data-aos-duration="2000" class="img-fluid" src="/images/3957707.png" alt="" />
                </div>
            </div>
        </div>
    </div>
  </div>
</template>

<script>
export default {
  name: "Order"
};
</script>

<style>
</style>