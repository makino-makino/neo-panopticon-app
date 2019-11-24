<template>
  <div class="allpage">
    <NavigationBar :backbutton="true" :title="'プロフィール'" @closemenu="close" />
    <div class="contents">
      <div class="image_change">
        <button>
          <img src="/images/people.png" alt />
        </button>
      </div>
      <div class="name">
        <div class="boxname">名前</div>
        <input type="text" v-model="user.name" />
      </div>
      <div class="detail">
        <div class="boxname">自己紹介文</div>
        <textarea v-model="user.bio"></textarea>
      </div>
      <button class="save" v-on:click="update">保存</button>
    </div>
  </div>
</template>

<script>
import NavigationBar from "~/components/NavigationBar.vue";
import axios from "axios";
const UPDATE_API = "/api/auth";
const USER_API = "/api/users/" + localStorage.userId;
export default {
  data() {
    return {
      user: {}
    };
  },
  components: {
    NavigationBar
  },
  async mounted() {
    const HEADERS = {
      Accept: "application/json",
      "access-token": localStorage.access_token,
      client: localStorage.client,
      uid: localStorage.uid
    };
    var resp = await axios.get(`${USER_API}`, {
      headers: HEADERS
    });
    this.user = resp.data;
  },
  methods: {
    close() {
      this.$emit("closechild");
    },
    async update(e) {
      const HEADERS = {
        Accept: "application/json",
        "access-token": localStorage.access_token,
        client: localStorage.client,
        uid: localStorage.uid
      };
      try {
        console.log(this.user.name);
        var resp = await axios.put(
          UPDATE_API,
          {
            name: this.user.name,
            bio: this.user.bio
          },
          {
            headers: HEADERS
          }
        );

        // TODO: ちゃんと次の場所にジャンプさせる
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
    .image_change {
      margin: 40px 0;
      button {
        margin: 0 auto;
        display: block;
        img {
          height: 120px;
        }
      }
    }
    .boxname {
      font-size: 20px;
      line-height: 20px;
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
    textarea {
      width: 100%;
      height: 30vh;
      border: #111111 solid 1px;
    }
    .save {
      height: 40px;
      width: 100px;
      background-color: #777777;
      font-size: 20px;
      line-height: 40px;
      margin-top: 20px;
      display: block;
      margin-left: auto;
    }
  }
  .detail {
    margin-top: 40px;
  }
}
</style>
