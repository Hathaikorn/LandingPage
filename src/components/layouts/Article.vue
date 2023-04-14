<template>
  <section id="services">
    <div
      class="container-fluid"
      style="padding-left: 40px; padding-right: 40px"
    >
      <div class="row" style="justify-content: space-between">
        <div class="col-md-8">
          <div class="row" style="justify-content: space-between">
            <div class="col">
              <div class="section-title">
                <p
                  class="title"
                  style="font-size: 25px; padding-top: 20px; color: #5d586c"
                >
                  Article
                </p>
              </div>
            </div>
            <div class="col">
              <div class="section-title">
                <p
                  class="title"
                  style="font-size: 15px; padding-top: 20px; float: right"
                >
                  ดูทั้งหมด <span class="bi bi-arrow-right-circle"></span>
                </p>
              </div>
            </div>
          </div>

          <div class="row pb-20">
            <div class="card mb-3" style="max-width: 540px; border: 0px">
              <div class="row">
                <div class="col-md-6">
                  <img
                    style="height: 100%"
                    src="https://media.kkpfg.com/image/2021/Sep/KKP-ACT-FIXED_544x388.jpg"
                    class="img"
                    alt="alt"
                  />
                </div>
                <div class="col-md-6 mt-10" style="padding: 0px">
                  <div class="card-body" style="padding: 0px">
                    <h5 class="card-title" style="color: #868493">
                      Margin of Safety กลยุทธ์การ ลงทุนอย่างปลอดภัย หลักการ
                      ลงทุนของเบนจามิน เกรแฮม
                    </h5>
                    <p class="card-text" style="color: #a6a5aa">
                      ตอบคำถามที่ว่า คุณมีความจำเป็น 168 เป็น เธงเน เ หน้า กางาน
                      ชน หรือการเดินทางความสะดวกสบาย เพราะการบ่อ รถนอกจากค่า
                      น่ามันค่าหกษา ค่าประกันภัย เสาโชจ่ายในระยะยาว
                    </p>
                    <p class="card-text">
                      <small class="text-body-secondary"
                        ><span class="bi bi-align-bottom"></span>
                        การลงทุน</small
                      >
                    </p>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
        <div class="col-md-4">
          <div class="row" style="justify-content: space-between">
            <div class="col">
              <div class="section-title">
                <p
                  class="title"
                  style="font-size: 25px; padding-top: 20px; color: #5d586c"
                >
                  News
                </p>
              </div>
            </div>
            <div class="col">
              <div class="section-title">
                <p
                  class="title"
                  style="font-size: 15px; padding-top: 20px; float: right"
                >
                  ดูทั้งหมด <span class="bi bi-arrow-right-circle"></span>
                </p>
              </div>
            </div>
          </div>
          <div>
            <img
              style="height: 100%"
              src="https://media.kkpfg.com/image/2022/Nov/KKP-SSF-RMF_544x388.jpg"
              class="img"
              alt="alt"
            />

            <div style="text-align: -webkit-center">
              <span
                v-for="(item, index) in [1, 2, 3, 4]"
                :key="index"
                :class="`${index == 0 ? 'bi bi-circle-fill' : 'bi bi-circle'}`"
                style="font-size: 8px; margin-left: 4px; margin-right: 4px"
              ></span>
            </div>
          </div>
        </div>
      </div>

      <div class="row">
        <div class="col-md-8" style="text-align: -webkit-center">
          <div class="row">
            <div class="col-md-6">
              <img
                style="height: 70%"
                src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRDSylevLQJ8JQbYTxoMqDEfvTkyC_u1qlVQaGHGFQqok16RbvhkoiTTMYPi8JDnB7kjwo&usqp=CAU"
                class="img"
                alt="alt"
              />

              <p
                class="title"
                style="font-size: 22px; color: #5d5773; padding-top: 16px"
              >
                จับจังหวะการลงทุนเป็นก็สร้างเงิน ล้านได้ง่ายๆใกล้แค่เอื้อม
              </p>

              <p class="card-text" style="padding-top: 6px">
                <small class="text-body-secondary"
                  ><span class="bi bi-align-bottom"></span> การลงทุน</small
                >
              </p>
            </div>
            <div class="col-md-6">
              <img
                style="height: 70%"
                src="https://media.kkpfg.com/image/2023/Jan/KKP-Small-and-Mid-Cap-Equity_544x388.jpg"
                class="img"
                alt="alt"
              />

              <p
                class="title"
                style="font-size: 22px; color: #5d5773; padding-top: 16px"
              >
                จับจังหวะการลงทุนเป็นก็สร้างเงิน ล้านได้ง่ายๆใกล้แค่เอื้อม
              </p>

              <p class="card-text" style="padding-top: 6px">
                <small class="text-body-secondary"
                  ><span class="bi bi-align-bottom"></span> การลงทุน</small
                >
              </p>
            </div>
          </div>
        </div>
        <div class="col-md-4">
          <img
            style="height: 100%; padding-right: 16px; padding-left: 16px"
            src="https://media.kkpfg.com/image/2019/Jul/GNP-Advice-Center-1.jpg"
            class="img"
            alt="alt"
          />
        </div>
      </div>
    </div>
    <!-- container -->
  </section>
</template>
