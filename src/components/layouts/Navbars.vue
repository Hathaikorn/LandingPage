<template>
  <section class="navbar-area">
    <div
      class="container-fluid"
      style="padding-left: 40px; padding-right: 40px"
    >
      <div class="row">
        <div class="col-lg-12">
          <nav class="navbar navbar-expand-lg">
            <div class="row">
              <button
                class="navbar-toggler"
                type="button"
                data-toggle="collapse"
                data-target="#navbarTwo"
                aria-controls="navbarTwo"
                aria-expanded="false"
                aria-label="Toggle navigation"
              >
                <span
                  class="toggler-icon"
                  style="background-color: white"
                ></span>
                <span
                  class="toggler-icon"
                  style="background-color: white"
                ></span>
                <span
                  class="toggler-icon"
                  style="background-color: white"
                ></span>
              </button>
              <a class="navbar-brand" href="#">
                <img
                  src="assets/images/favicon.png"
                  alt="Logo"
                  style="width: 55px; height: 55px"
                />
              </a>
              <h3 style="align-self: center; color: white; font-weight: 100">
                Phatra
              </h3>
            </div>

            <div class="collapse navbar-collapse sub-menu-bar" id="navbarTwo">
              <ul class="navbar-nav m-auto">
                <li class="nav-item active">
                  <a class="page-scroll" href="#home">home</a>
                </li>
                <li class="nav-item">
                  <a class="page-scroll" href="#services">Article</a>
                </li>
                <li class="nav-item">
                  <a class="page-scroll" href="#portfolio">Channel </a>
                </li>
                <!-- <li class="nav-item">
                  <a class="page-scroll" href="#pricing">Pricing</a>
                </li>
                <li class="nav-item">
                  <a class="page-scroll" href="#about">About</a>
                </li>
                <li class="nav-item">
                  <a class="page-scroll" href="#team">Team</a>
                </li>
                <li class="nav-item">
                  <a class="page-scroll" href="#contact">Contact</a>
                </li> -->
              </ul>
            </div>

            <h3
              style="
                align-self: center;
                color: white;
                font-weight: 100;
                font-size: 14px;
              "
            >
              <span class="bi bi-search" style="width: 30px"></span>
              TH
              <i class="bi-chevron-down"></i>
            </h3>
          </nav>
          <!-- navbar -->
        </div>
      </div>
      <!-- row -->
    </div>
    <!-- container -->
  </section>
</template>

<script>
export default {
  name: "Navbar",
};
</script>

<style></style>
