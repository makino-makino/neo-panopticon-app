<template>
  <div class="allpage">
    <NavigationBar :backbutton="true" :title="'パスワード変更'" @closemenu="close" />
    <div class="contents">
      <div class="titletext">新しいパスワード</div>
      <input type="password" v-model="password" />
      <div class="titletext">新しいパスワード(確認用)</div>
      <input type="password" v-model="password_confirm" />
      <button class="save" v-on:click="updatePass">保存</button>
    </div>
  </div>
</template>

<script>
import NavigationBar from "~/components/NavigationBar.vue";
import axios from "axios";
const AUTH_API = "/api/auth/password";
export default {
  data() {
    return {
      password: "",
      password_confirm: ""
    };
  },
  components: {
    NavigationBar
  },
  methods: {
    close() {
      this.$emit("closechild");
    },
    async updatePass(e) {
      try {
        const HEADERS = {
          Accept: "application/json",
          "access-token": localStorage.access_token,
          client: localStorage.client,
          uid: localStorage.uid
        };
        var resp = await axios.put(
          AUTH_API,
          {
            password: this.password,
            password_confirm: this.password_confirm
          },
          {
            headers: HEADERS
          }
        );
        this.close();
      } catch (e) {
        console.log(e);
      }
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
