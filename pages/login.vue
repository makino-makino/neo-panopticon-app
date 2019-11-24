<template>
  <div>
    <form>
      メールアドレス<br />
      <input v-model="email" type="email" /><br />
      パスワード<br />
      <input v-model="password" type="password" /><br />
      <input v-on:click="login" value="送信" type="button" />
    </form>
  </div>
</template>

<script>
import axios from "axios";

const LOGIN_API = "/api/auth/sign_in";

export default {
  fetch({ store }) {
    return store.commit("setNavigationBar", "ログイン");
  },
  components: {},
  data() {
    return {
      email: "",
      password: ""
    };
  },

  methods: {
    async login(e) {
      var resp = await axios.post(LOGIN_API, {
        email: this.email,
        password: this.password
      });

      localStorage.access_token = resp.headers["access-token"];
      localStorage.client = resp.headers.client;
      localStorage.uid = resp.headers.uid;

      localStorage.userId = resp.data.data.id;

      // TODO: ちゃんと次の場所にジャンプさせる
      location.href = "/localTL";
    }
  }
};
</script>

<style>
/* css */
</style>
