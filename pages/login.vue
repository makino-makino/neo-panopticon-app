<template>
  <div>
    <div class="content">
      <nuxt-link to="register" class="userzumi">登録をする方はこちら</nuxt-link>
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
      <input
        v-on:click="submit"
        value="ログイン"
        type="button"
        class="submitbutton"
      />
    </div>
  </div>
</template>

<script>
import { mapActions } from "vuex";
import passwordVue from "../components/setting/password";

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
    async submit(e) {
      try {
        await this.$store.dispatch("auth/login", {
          email: this.email,
          password: this.password
        });

        this.$router.push("localTL");
      } catch (error) {
        alert("ログインに失敗しました");
        alert(error);
      }
    }
  }
};
</script>

<style lang="scss" scoped>
/* css */
.userzumi {
  position: absolute;
  font-size: 13px;
  right: 0;
  width: 178px;
  background-color: white;
  text-align: center;
  color: black;
  height: 50px;
  line-height: 100%;
  border: 4px solid #959191;
  border-radius: 22px;
  padding: 15px 0;
}
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
  padding: 0;
}
</style>
