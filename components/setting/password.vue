<template>
  <div class="allpage">
    <NavigationBar :backbutton="true" :title="'パスワード変更'" @closemenu="close" />
    <div class="contents">
      <div class="titletext">新しいパスワード</div>
      <input type="text" />
      <div class="titletext">新しいパスワード(確認用)</div>
      <input type="text" />
      <button class="save">保存</button>
    </div>
  </div>
</template>

<script>
import NavigationBar from "~/components/NavigationBar.vue";
export default {
  components: {
    NavigationBar
  },
  methods: {
    close() {
      this.$emit("closechild");
    }
  }
};
</script>

<style lang="scss" scoped>
.allpage {
  height: 100vh;
  width: 100vw;
  position: absolute;
  z-index: 99999;
  top: 0;
  bottom: 0;
  left: 0;
  right: 0;
  background-color: rgb(48, 48, 48);
  .contents {
    padding: 0 10vw;
    .titletext {
      font-size: 1.2rem;
      &:first-child {
        margin-top: 50px;
      }
      &:last-child {
        line-height: 1.7rem;
        margin-top: 15px;
      }
    }
    input {
      width: 100%;
      background-color: #dbdbdb;
      color: black;
      height: 35px;
      border-radius: 6px;
      font-size: 16px;
      padding-left: 10px;
    }
  }
  .save {
    height: 40px;
    width: 100px;
    background-color: #777777;
    font-size: 20px;
    line-height: 40px;
    margin-top: 40px;
    display: block;
    margin-left: auto;
  }
}
</style>
