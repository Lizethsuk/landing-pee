<template>
  <b-jumbotron
    bg-variant="info"
    class="image"
    :style="inlineStyle"
    text-variant="white"
  >
    <div class="image-opacity">
      <div class="title-content">
        <p class="title" v-text=" message"></p>
        <hr class="line" />
      </div>
    </div>
  </b-jumbotron>
</template>

<script>

export default {
  name: "ImagePage",
  props: {
    message: {
      type: String,
      require: true,
    },
    backgroundImage: String
  },
 
    computed: {
    bgImage() {
      return require("@/assets/" + this.backgroundImage);
    },
    inlineStyle() {
      return {
        backgroundImage: `url(${this.bgImage})`
      };
    }
  }
};
</script>

<style lang="stylus" scoped>
@import '../styles/main.styl';

.image {
  height: 400px;
  opacity: 0.8;
  position: relative;
  background-repeat no-repeat
  background-size cover
}

.image:before {
  content: ' ';
  display: block;
  position: absolute;
  z-index: 1;
  opacity: 0.4;
}

.title {
  text-transform: uppercase;
  font-size: 45px;
  margin-block-end: 0px;
  width: 26rem;
  font-weight: bold;
  line-height 45px
}

.line {
  border-top: 3px solid white;
  width: 35rem;
  margin-left: -100px;
  opacity: 1 !important;
  margin-block-start: 0px;
}

.title-content {
  bottom: 15px;
  left: 100px;
  position: absolute;
  z-index: 2;
}

.image-opacity {
  background-color: rgba(248, 247, 216, 0.7);
}
</style>