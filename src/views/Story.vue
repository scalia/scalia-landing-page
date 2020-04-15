<template>
  <div class="story">
    <h1>The purpose</h1>

    <p class="medium-size-text">Scalia is a product content compliance platform.</p>
    <p class="medium-size-text">It enables retailers to compile, standardize and monitor
    the completion of the info required to build their product pages.</p>
    <img src="../assets/step1.png" alt="veepee" class="img-step1">

    <h1>The benefits</h1>
    <p class="medium-size-text">
      Scalia streamlines the process and automate tasks generating productivity gains.
      In addition, Scalia detection enables richer product pages benefiting the end users.
    </p>

    <Row type="flex" align="middle" class="margin-top">
      <i-col span="14" class="p-step2">
        <h1>The Tech</h1>
        <p class="medium-size-text">
          Scalia is a web based platform offering a user friendly and highly customizable interface
          to fit any customer needs.
          The core of Scalia tech is based on semantic detection and memorizing user matching in
          order to make smarter suggestions. Over time, this feedback loop creates a virtuous data
          network effect.
        </p>
      </i-col>
      <i-col span="10">
        <img src="../assets/step2.png" alt="veepee" class="img-step1">
      </i-col>
    </Row>

    <h1>The timeline</h1>
    <img src="../assets/step3.png" alt="veepee" class="img-step3">

  </div>
</template>


<script>
export default {
  name: 'Story',
};
</script>

<style lang="scss" scoped>
  .story {
    margin: 20px;
  }

  .margin-top {
    margin-top: 50px;
  }

  h1 {
    color: #ed0f92;
    font-size: 34px;
    margin-bottom: 10px;
  }

  .medium-size-text {
    font-size: 24px;
  }

  .img-step1 {
    width: 70%;
    margin: 30px 0 30px 10%;
  }

  .img-step3 {
    width: 60%;
    margin: 30px 0 30px 10%;
  }

  .p-step2 {
    height: 50%;
  }
</style>
