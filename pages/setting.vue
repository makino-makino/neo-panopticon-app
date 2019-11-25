<template>
  <!-- html -->
  <div>
    <div class="setting_menus">
      <nuxt-link :to="{ name: 'users-id', params: { id: userId } }">
        <button class="aSetting">プロフィールページへ</button>
      </nuxt-link>
      <button class="aSetting" v-on:click="currentSelecting = 'profile'">
        プロフィールの変更
        <div class="arrow"></div>
      </button>
      <button class="aSetting" v-on:click="currentSelecting = 'email'">
        メールアドレスの変更
        <div class="arrow">></div>
      </button>
      <button class="aSetting" v-on:click="currentSelecting = 'password'">
        パスワードの変更
        <div class="arrow">></div>
      </button>
      <button class="aSetting" v-on:click="currentSelecting = 'logout'">
        ログアウト
        <div class="arrow">></div>
      </button>
      <transition name="pages">
        <profile v-if="currentSelecting == 'profile'" @closechild="close" />
        <mail v-if="currentSelecting == 'email'" @closechild="close" />
        <password v-if="currentSelecting == 'password'" @closechild="close" />
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
      currentSelecting: "",
      userId: null
    };
  },
  mounted() {
    this.userId = localStorage.userId;
  },
  methods: {
    submitEmail: function(event) {
      alert(this.email);
      alert(this.password);
    },
    close() {
      this.currentSelecting = "";
    }
  },
  watch: {
    currentSelecting: function(newValue) {
      if (newValue == "logout") {
        localStorage.access_token = "";
        localStorage.client = "";
        localStorage.uid = "";
        localStorage.userId = "";
        this.$router.push("login");
      }
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
.pages-enter-active,
.pages-leave-active {
  transition: all 0.4s;
}
.pages-enter, .pages-leave-to /* .fade-leave-active below version 2.1.8 */ {
  // opacity: 0;
  transform: translateX(100vw);
}
</style>
