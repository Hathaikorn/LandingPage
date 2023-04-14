<template>
  <div>
    <div style="height: 70px; background-color: #20201a" />

    <section id="home" class="slider_area">
      <div id="carouselThree" class="carousel slide">
        <!-- <div class="carousel-indicators">
          <button
            type="button"
            data-bs-target="#carouselExampleIndicators"
            data-bs-slide-to="0"
            class="active"
            aria-current="true"
            aria-label="Slide 1"
          ></button>
          <button
            type="button"
            data-bs-target="#carouselExampleIndicators"
            data-bs-slide-to="1"
            aria-label="Slide 2"
          ></button>
          <button
            type="button"
            data-bs-target="#carouselExampleIndicators"
            data-bs-slide-to="2"
            aria-label="Slide 3"
          ></button>
        </div> -->
        <div class="carousel-inner">
          <div class="carousel-item active">
            <img
              src="https://media.kkpfg.com/image/2018/Sep/Phatra-GNP_Web-1620x540.jpg"
              class="d-block w-100"
              alt=""
            />
          </div>
          <div class="carousel-item">
            <img
              src="https://media.kkpfg.com/image/2018/Sep/Phatra-GNP_Web-1620x540.jpg"
              class="d-block w-100"
              alt=""
            />
          </div>
        </div>
        <a
          class="carousel-control-prev"
          href="#carouselThree"
          role="button"
          data-slide="prev"
          style="border-radius: 55px"
        >
          <span class="bi bi-chevron-left"></span>
        </a>
        <a
          class="carousel-control-next"
          href="#carouselThree"
          role="button"
          data-slide="next"
          style="border-radius: 55px"
        >
          <span class="bi bi-chevron-right"></span>
        </a>
      </div>

      <div class="row" style="position: relative; top: -20px">
        <span
          @click="selectIndex(active > 0 && active - 1)"
          class="bi bi-chevron-left"
          style="
            align-self: center;
            width: 80px;
            text-align-last: right;
            font-size: 32px;
            color: #bebdc2;
          "
        ></span>
        <div
          class="col-sm"
          v-for="(item, index) in [
            'About Us',
            'Awards',
            'Our Businesses',
            'News&Activties',
          ]"
          @click="selectIndex(index)"
          :key="index"
        >
          <div
            class="card-body"
            :style="{
              'background-color': active === index ? '#706aaa' : '#e6e5e8',
            }"
          >
            <p
              :style="{ color: active === index ? 'white' : '#565369' }"
              class="card-text"
            >
              {{ item }}
            </p>
          </div>
          <div style="height: 6px; background-color: #8482b5" />
        </div>
        <span
          @click="selectIndex(active <= 3 && active + 1)"
          class="bi bi-chevron-right"
          style="
            align-self: center;
            width: 80px;
            font-size: 32px;
            color: #bebdc2;
          "
        ></span>
      </div>
    </section>
  </div>
</template>
<script>
export default {
  name: "App",
  data: () => ({
    active: 0,
  }),
  methods: {
    selectIndex(id) {
      this.active = id;
    },
  },
};
</script>
