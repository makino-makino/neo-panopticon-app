<template>
  <div>
    <h2>新しい投稿を作成する</h2>
    <textarea v-model="content"></textarea>
    <button class="pure-button button" v-on:click="submit">投稿</button>
  </div>
</template>

<script>
import NavigationBar from "~/components/NavigationBar.vue";
import axios from "axios";

const POSTS_API = "/api/posts";

export default {
  components: {},
  data() {
    return {
      content: ""
    };
  },

  methods: {
    async submit(e) {
      if (this.content != "") {
        const HEADERS = {
          Accept: "application/json",
          "access-token": localStorage.access_token,
          client: localStorage.client,
          uid: localStorage.uid
        };

        var resp = await axios.post(
          POSTS_API,
          {
            content: this.content
          },
          {
            headers: HEADERS
          }
        );

        location.href = "/localTL";
      }else{
        alert("投稿を入力してください")
      }
    }
  }
};
</script>

<style lang="scss">
/* css */
h2 {
  font-size: 10rem;
  font-size: 1.5rem;
  letter-spacing: -2px;
  width: 300px;
  margin: 0 auto;
  color: white;
  margin-top: 35px;
}
textarea {
  display: block;
  border: white solid 1px;
  margin: 0 auto;
  margin-top: 19px;
  width: 300px;
  height: 200px;
}
.button {
  margin: 0 auto;
  display: block;
}
</style>
