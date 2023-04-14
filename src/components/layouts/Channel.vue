<template>
  <section id="portfolio" class="portfolio-four pb-10 pt-60">
    <div class="container">
      <div class="row">
        <div class="col-md-12 pt-50">
          <div class="row pb-10">
            <h3 class="title" style="padding-left: 25px">KKP Channel</h3>
            <p class="text" style="align-self: center; padding-left: 30px">
              อัปเดตทุกความรู้ด้านการเงินและการลงทุนก่อนใคร
              พร้อมอินเทรนด์ไปกับหลากหลายเรื่องราวไลฟ์สไตล์
            </p>
          </div>
        </div>
      </div>

      <div class="row pb-80">
        <div class="col-md-8">
          <div class="row">
            <h5
              class="title"
              style="padding: 20px; font-weight: 700; color: #565165"
            >
              KKP FOCUS
            </h5>
            <div style="padding: 20px">|</div>
            <h5 class="title" style="padding: 20px; color: #848388">
              OPTIMISE
            </h5>
            <div style="padding: 20px">|</div>
            <h5 class="title" style="padding: 20px; color: #848388">
              KKP Advisor
            </h5>
          </div>
          <img
            style="height: 80%"
            src="https://i.ytimg.com/vi/-lo71gf7Sqk/maxresdefault.jpg"
            class="img"
            alt="alt"
          />
        </div>
        <div class="col-md-4 pt-80" style="align-self: center">
          <div style="width: 100%; height: 3px; background-color: #848388" />
          <div
            class="row"
            style="padding-top: 60px; padding-bottom: 60px; padding-left: 20px"
          >
            <h3 class="title" style="font-weight: 700; color: #565165">
              KKP FOCUS
            </h3>

            <p class="title" style="padding-top: 29px; color: #bcbcbe">
              ฝนนักสู้ พบเรื่องราวจริง เจ็บจริง ประสบความสําเร็จจริง ที่จะเป็น
              แรงกระตุ้นให้ SME นักสู้รุ่นต่อไป ได้ก้าวไปถึงฝัน
            </p>
          </div>
          <div style="width: 100%; height: 3px; background-color: #848388" />
        </div>
      </div>
      <div class="container text-center">
        <div class="row" style="justify-content: space-between">
          <div class="col-md-4">
            <img
              style="height: 70%"
              src="https://media.kkpfg.com/image/2023/Mar/KKP-GNP_Thumbnail%20544x388.jpg"
              class="img"
              alt="alt"
            />

            <p
              class="title"
              style="font-size: 22px; color: #5d5773; padding-top: 16px"
            >
              KKP Focus ช่วงที่ 2 กูรู... โต๊ะ กลม
            </p>
          </div>
          <div class="col-md-4">
            <img
              style="height: 70%"
              src="https://media.kkpfg.com/image/2020/Nov/KKP_SG-AA-SSF_544x388.jpg"
              class="img"
              alt="alt"
            />
            <p
              class="title"
              style="font-size: 22px; color: #5d5773; padding-top: 16px"
            >
              KKP Focus ช่วงที่ 1 ย่อประเด็นโลก โยกประเด็นร้อน
            </p>
          </div>
          <div class="col-md-4">
            <img
              style="height: 70%"
              src="https://media.kkpfg.com/image/2022/Jan/KKP_INCOME-H_Thumbnail_544x388.jpg"
              class="img"
              alt="alt"
            />

            <p
              class="title"
              style="font-size: 22px; color: #5d5773; padding-top: 16px"
            >
              KKP Focus ช่วงที่ 2 กูรู ... โต๊ะกลม
            </p>
          </div>
        </div>
      </div>
    </div>

    <div class="mt-5" style="text-align: -webkit-center">
      <span
        v-for="(item, index) in [1, 2, 3, 4]"
        :key="index"
        :class="`${index == 0 ? 'bi bi-circle-fill' : 'bi bi-circle'}`"
        style="font-size: 8px; margin-left: 4px; margin-right: 4px"
      ></span>
    </div>
  </section>
</template>

<script></script>

<style></style>
