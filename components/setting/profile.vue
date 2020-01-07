<template>
  <div class="allpage">
    <NavigationBar :backbutton="true" :title="'プロフィール'" @closemenu="close" />
    <div class="contents">
      <div class="image_change">
        <button @click="makino">
          <img :src="user.icon" alt ref="images"/>
        </button>
        <input
          ref="inputme"
          type="file"
          accept="image/*"
          style="display:none;"
          @change="fileUpload($event)"
        />
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
import firebase from "~/plugins/firebase.js";
const UPDATE_API = "/api/auth";
// const storage = firebase.storage();
export default {
  data() {
    return {
      user: {
      }
    };
  },
  components: {
    NavigationBar
  },
  async mounted() {
    const USER_API = "/api/users/" + localStorage.userId;

    const HEADERS = {
      Accept: "application/json",
      "access-token": localStorage.access_token,
      client: localStorage.client,
      uid: localStorage.uid
    };
    
    var resp = await axios.get(`${USER_API}`, {
      headers: HEADERS
    });
    console.log(this.user)
    this.user = resp.data;
    if (this.user.icon == "" || this.user.icon == null){
      this.user.icon = '/images/people.png'
    }
  },
  methods: {
    async fileUpload(e) {
      console.log(e);
      const file = (e.target.files || e.dataTransfer.files)[0];
      if (file) {
        console.log(file);
        const firestorage = firebase.storage();
        try {
          const ref = "public/";
          const uploadTask = await firestorage
            .ref(localStorage.userId + ".png")
            .put(file)
            .then(snapshot => {
              // アップロード完了処理。URLを取得し、呼び出し元へ返す。
              snapshot.ref.getDownloadURL().then(url => {
                this.user.icon = url
                this.$refs.images.src = url
                console.log(this.user.icon)
              });
            });
        } catch (error) {
          return Promise.reject(error);
        }
      }
    },
    makino() {
      this.$refs.inputme.click();
    },
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
        var resp = await axios.put(
          UPDATE_API,
          {
            name: this.user.name,
            bio: this.user.bio,
            icon: this.user.icon
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
