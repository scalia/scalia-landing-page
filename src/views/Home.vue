<template>
  <div class="home">
    <img src="../assets/veepee-scalia.jpg" alt="veepee-scalia" class="background">
    <Button
      class="connect button-style"
      shape="circle"
      target="_blank"
      to="https://scalia-vue-production.com">
      Connect
    </Button>
    <div class="title">
      <p class="text-black">Scalia is now part of</p>
      <p><img src="../assets/veepee.png" alt="veepee" class="img-veepee"></p>
    </div>
    <div class="buttons">
      <Button
        class="story button-style big-button"
        shape="circle"
        to="/story">
        Our story
      </Button>
      <Button
        class="blog button-style big-button"
        shape="circle"
        target="_blank"
        to="https://medium.com/scalia">
        Our blog
      </Button>
    </div>
  </div>
</template>

<script>
export default {
  name: 'Home',
};
</script>

<style lang="scss" scoped>
  .home {
    text-align: center;
  }

  .text-black {
    color: black;
  }

  .background {
    width:100%;
    opacity: 0.5;
  }

  .img-veepee {
    width:50%;
  }

  .title {
    font-size: 70px;
    font-weight: bold;
    position: absolute;
    top: 30%;
    left: 50%;
    transform: translate(-50%, -50%);
  }

  .connect {
    position: absolute;
    top: 32px;
    right: 32px;
    padding: 0px 30px;
    font-size: 17px;
  }

  .buttons {
    position: absolute;
    top: 70%;
    left: 50%;
    transform: translate(-50%, -50%);
  }

  .blog {
    margin-left: 60px;
  }

  .big-button {
    padding: 10px 40px;
    font-size: 24px;
  }

  .button-style {
    border-color: #ed0f92;
    color: #ed0f92;
    height: auto;
    border: 1px solid;
  }
</style>
