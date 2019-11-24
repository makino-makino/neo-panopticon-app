<template>
  <div>
    <div class="content">
      <div class="inputs">
        <div class="a_content">
          <div></div>
          <p>メールアドレス</p>
          <div class="imagebox">
            <img src="/images/mail.png" alt class="image" />
          </div>
          <input v-model="email" type="email" />
        </div>
        <div class="a_content">
          <div></div>
          <p>パスワード</p>
          <div class="imagebox">
            <img src="/images/key.svg" alt class="image" />
          </div>
          <input v-model="password" type="password" />
        </div>
      </div>
      <input v-on:click="login" value="ログイン" type="button" class="submitbutton" />
    </div>
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
      this.$router.push("localTL");
    }
  }
};
</script>

<style lang="scss" scoped>
/* css */
.a_content {
  display: grid;
  grid-template-columns: 60px 170px;
  grid-template-rows: 45px;
}
.content {
  background: url(/images/kagiana.svg);
  height: calc(100vh - 59.78px);
  background-position: bottom;
  background-size: 44vh;
  background-repeat: no-repeat;
}
p {
  color: #4e4d4d;
  font-size: 16px;
  margin: 0;
}
img {
  height: 30px;
  margin: auto;
}
.imagebox {
  width: 30px;
  height: 30px;
  display: flex;
  margin: auto;
}
input {
  width: 100%;
  height: 40px;
  background-color: #efefef;
  border: 3px solid #4e4d4d;
  border-radius: 6px;
  font-size: 20px;
  padding-left: 10px;
  color: black;
}
.inputs {
  margin: 0 auto;
  display: table;
  padding-top: 40vw;
}
.submitbutton {
  width: 100px;
  height: 40px;
  border: none;
  border-radius: 0;
  background-color: #777777;
  margin: 0 auto;
  display: block;
  margin-top: 26px;
  font-size: 16px;
  line-height: 100%;
}
</style>
