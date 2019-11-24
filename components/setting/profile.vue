<template>
  <div class="allpage">
    <NavigationBar :backbutton="true" :title="'プロフィール'" @closemenu="close"/>
    <div class="content">
      <button @click="close">ああああ</button>
      これが最強のプロフィールコンポーネント
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
  .content{

  }
}
</style>
