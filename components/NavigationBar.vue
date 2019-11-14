<template>
  <div>
    <div id="navigationbar">
      <div class="left"><a :href="titleItem.leftHref">{{titleItem.leftTitle}}</a></div>
      <div class="title"><p id="navigationbar__title">{{titleItem.title}}</p></div>
      <div class="right"><a :href="titleItem.rightHref">{{titleItem.rightTitle}}</a></div>
    </div>
  </div>
</template>

<script>
export default {
  props: ['titleItem']
};
</script>

<style lang="scss" scoped>
#navigationbar {
  background-color: $toolcolor;
  height: 80px;
  width: 100%;
}
#navigationbar__title {
  text-align: center;
  line-height: 80px;
}
</style>
