<template>
  <body>
    <!--[if IE]>
      <p class="browserupgrade">
        You are using an <strong>outdated</strong> browser. Please <a
        href="https://browsehappy.com/">upgrade your browser</a> to improve your
        experience and security.
      </p>
    <![endif]-->

    <!--====== PRELOADER PART START ======-->

    <div class="preloader">
      <div class="loader">
        <div class="ytp-spinner">
          <div class="ytp-spinner-container">
            <div class="ytp-spinner-rotator">
              <div class="ytp-spinner-left">
                <div class="ytp-spinner-circle"></div>
              </div>
              <div class="ytp-spinner-right">
                <div class="ytp-spinner-circle"></div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>

    <!--====== PRELOADER PART ENDS ======-->

    <!--====== NAVBAR TWO PART START ======-->

    <Navbars />
    <Slider />
    <Article />
    <Channel />
    <Footers />
    <!--====== PORTFOLIO PART START ======-->

    <!--====== PORTFOLIO PART ENDS ======-->

    <!--====== PRINICNG START ======-->

    <!--====== PRINICNG ENDS ======-->

    <!--====== ABOUT PART START ======-->

    <!--====== FOOTER PART START ======-->

    <!--====== FOOTER PART ENDS ======-->

    <!--====== BACK TOP TOP PART START ======-->

    <a href="#" class="back-to-top"><i class="lni lni-chevron-up"></i></a>

    <!--====== BACK TOP TOP PART ENDS ======-->

    <!--====== PART START ======-->

    <!--
    <section class="">
        <div class="container">
            <div class="row">
                <div class="col-lg-">
                    
                </div>
            </div>
        </div>
    </section>
-->

    <!--====== PART ENDS ======-->
  </body>
</template>

<script>
import Navbars from "./components/layouts/Navbars.vue";
import Slider from "./components/layouts/Slider.vue";
import Article from "./components/layouts/Article.vue";
import Channel from "./components/layouts/Channel.vue";
import Footers from "./components/layouts/Footers.vue";
export default {
  name: "App",
  components: { Navbars, Slider, Article, Channel, Footers },
};
</script>

<style>
#app {
  font-family: Avenir, Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50;
  margin-top: 60px;
}
</style>
