<template>
  <div class="content">
    <textarea v-model="content" placeholder="新しい投稿"></textarea>
    <button class="pure-button button" v-on:click="submit">投稿</button>
  </div>
</template>

<script>
import NavigationBar from "~/components/NavigationBar";
import axios from "axios";

const POSTS_URI = "/api/posts";

export default {
  fetch({ store }) {
    return store.commit("setNavigationBar", "新しい投稿");
  },
  components: {},
  data() {
    return {
      content: ""
    };
  },

  methods: {
    async submit(e) {
      if (this.content != "") {
        const resp = await axios.post(POSTS_URI, {
          content: this.content
        });

        this.$router.push("localTL");
      } else {
        alert("投稿を入力してください");
      }
    }
  }
};
</script>

<style lang="scss">
/* css */
.content {
  padding: 0 5vw;
}
textarea {
  display: block;
  border: #111111 solid 3px;
  margin: 0 auto;
  margin-top: 19px;
  width: 90vw;
  height: 57vh;
  background-color: #d8d8d8;
  border-radius: 18px;
  color: black;
  font-size: 1rem;
  padding: 15px 18px;
  line-height: 21px;
}
.button {
  margin-right: 18px;
  margin-left: auto;
  height: 48px;
  width: 100px;
  padding: 0px;
  border-radius: 5px;
  margin-top: 19px;
  display: block;
  font-size: 23px;
  background-color: #777777;
}
</style>
