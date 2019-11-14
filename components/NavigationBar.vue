<template>
  <div>
    <div id="navigationbar">
      <div class="left">
        <a :href="titleItem.leftHref">
          <v-btn text class="left">{{titleItem.leftTitle}}</v-btn>
        </a>
      </div>
      <div class="title">
        <p id="navigationbar__title">{{titleItem.title}}</p>
      </div>
      <div class="right">
        <a :href="titleItem.rightHref">
          <v-btn text>{{titleItem.rightTitle}}</v-btn>
        </a>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  props: ["titleItem"]
};
</script>

<style lang="scss" scoped>
#navigationbar {
  background-color: $toolcolor;
  height: 65px;
  width: 100%;
  display: flex;
  .title {
    position: absolute;
    left: 50%;
    transform: translate(-50%, 0);
    #navigationbar__title {
      text-align: center;
      color: $navigationTextColor;
      line-height: 65px;
      font-size: 30px;
      font-weight: 600;
      margin: 0;
    }
  }
  div {
    a {
      line-height: 65px;
      font-size: 20px;
      button {
        color: $navigationButtonColor;
        mix-blend-mode: normal;
      }
    }
    a:active {
      text-decoration: none;
    }
    &.left {
      margin-left: 20px;
    }
    &.right {
      margin-right: 20px;
      position: absolute;
      right: 0;
    }
  }
}
</style>
