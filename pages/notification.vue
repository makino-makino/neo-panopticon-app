<template></template>

<script>
export default {
  fetch({ store }) {
    return store.commit("setNavigationBar", "通知");
  }
};
</script>

<style>
</style>
