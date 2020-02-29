<template>
  <div class="allpage">
    <NavigationBar :backbutton="true" :title="'メールアドレス変更'" @closemenu="close" />
    <div class="contents">
      <div class="titletext">メールアドレス</div>
      <input v-model="email" type="text" />
      <button class="save" v-on:click="update">保存</button>
    </div>
  </div>
</template>

<script>
import axios from "axios";

const UPDATE_URI = "/api/auth";

import NavigationBar from "~/components/NavigationBar.vue";
export default {
  data() {
    return {
      email: ""
    };
  },
  components: {
    NavigationBar
  },
  methods: {
    close() {
      this.$emit("closechild");
    },
    async update(e) {
      try {
        const resp = await axios.put(UPDATE_URI, {
          email: this.email
        });

        // TODO: ちゃんと次の場所にジャンプさせる
        // TODO: storeに入れる
        localStorage.uid = resp.headers.uid;

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
      margin-top: 50px;
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
