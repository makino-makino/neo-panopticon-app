<template>
  <!-- html -->
  <div>
    <div class="setting_menus">
      <button class="aSetting" v-on:click="currentSelecting='profile'">
        プロフィール
        <div class="arrow">></div>
      </button>
      <button class="aSetting" v-on:click="currentSelecting='email'">
        メールアドレス
        <div class="arrow">></div>
      </button>
      <button class="aSetting" v-on:click="currentSelecting='password'">
        パスワード
        <div class="arrow">></div>
      </button>
      <button class="aSetting" v-on:click="currentSelecting='logout'">
        ログアウト
        <div class="arrow">></div>
      </button>
      <transition name="pages">
        <profile v-if="currentSelecting=='profile'" @closechild="close" />
        <mail v-if="currentSelecting=='email'" @closechild="close" />
        <password v-if="currentSelecting=='password'" @closechild="close" />
      </transition>
    </div>
  </div>
</template>

<script>
// javascript
import profile from "~/components/setting/profile.vue";
import mail from "~/components/setting/mail.vue";
import password from "~/components/setting/password.vue";
export default {
  components: {
    profile,
    mail,
    password
  },
  fetch({ store }) {
    return store.commit("setNavigationBar", "設定");
  },
  data() {
    return {
      email: "",
      password: "",
      currentSelecting: ""
    };
  },
  methods: {
    submitEmail: function(event) {
      alert(this.email);
      alert(this.password);
    },
    close(){
      this.currentSelecting = ""
    }
  }
};
</script>

<style lang="scss">
/* css */
.setting_menus {
  margin: 0 3%;
  margin-top: 20px;
  .aSetting {
    padding: 0 20px;
    border-radius: 10px;
    background-color: #cccccc;
    text-decoration: none;
    font-size: 16px;
    width: 100%;
    line-height: 100%;
    color: black;
    line-height: 57px;
    display: block;
    margin: 10px 0;
    text-align: left;
    .arrow {
      display: inline;
      float: right;
    }
  }
}
.pages-enter-active, .pages-leave-active {
  transition: all  .4s;
}
.pages-enter, .pages-leave-to /* .fade-leave-active below version 2.1.8 */ {
  // opacity: 0;
  transform:translateX(100vw);
}
</style>
