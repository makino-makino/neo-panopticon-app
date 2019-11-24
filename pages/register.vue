<template>
  <div>
    <form>
      名前<br />
      <input v-model="name" type="text" /><br />
      メールアドレス<br />
      <input v-model="email" type="email" /><br />
      電話番号<br />
      <input v-model="phone" type="tel" /><br />
      パスワード<br />
      <input v-model="password" type="password" /><br />
      パスワード（確認用）<br />
      <input v-model="password_confirm" type="password" /><br />
      <input v-on:click="signUp" value="送信" type="button" />
    </form>
  </div>
</template>

<script>
import axios from "axios";

const SIGN_UP_API = "/api/auth";

export default {
  components: {},
  data() {
    return {
      name: "",
      email: "",
      phone: "",
      password: "",
      password_confirm: ""
    };
  },
  methods: {
    async signUp(e) {
      try {
        var resp = await axios.post(SIGN_UP_API, {
          name: this.name,
          email: this.email,
          phone: this.phone,
          password: this.password,
          password_confirm: this.password_confirm
        });

        localStorage.access_token = resp.headers["access-token"];
        localStorage.client = resp.headers.client;
        localStorage.uid = resp.headers.uid;
        localStorage.userId = resp.data.data.id;

        // TODO: ちゃんと次の場所にジャンプさせる
        this.$router.push('localTL')
      } catch (e) {
        console.log(e);
      }
    }
  }
};
</script>

<style>
/* css */
</style>
