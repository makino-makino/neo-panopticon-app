<template>
  <!-- html -->
  <div>
    <h2>tests</h2>
    <p>
      e-mail:
      <input type="text" v-model="email" />
    </p>
    <p>
      pass:
      <input type="text" v-model="password" />
    </p>
    <button v-on:click="submitEmail">送信する</button>
  </div>
</template>

<script>
// javascript
export default {
  fetch({ store }) {
    return store.commit("setNavigationBar", {title:"Setting",leftTitle:"left",leftHref:"/registerPage",rightTitle:"right",rightHref:"/registerPage"});
  },
  data() {
    return {
      email: "",
      password: ""
    };
  },
  methods: {
    submitEmail: function(event) {
      alert(this.email);
      alert(this.password);
    }
  }
};
</script>

<style>
/* css */
</style>
