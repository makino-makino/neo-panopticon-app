<template>
  <div>
    <div class="notification" v-if="notification.type=='followed'">
      <div class="user_content">
        <div class="user_iconImage">
          <img class="iconimage" :src="this.notification.user.icon" alt />
          <img class="followimage" src="/images/following.png" alt />
        </div>
      </div>
      <div class="notification_content">
        <p>{{notification.user.name}}さんにフォローされました。</p>
      </div>
    </div>
    <div class="notification" v-if="notification.type=='replied'">
      <div class="user_content">
        <div class="user_iconImage">
          <img class="iconimage" :src="this.notification.post.icon" alt />
        </div>
      </div>
      <div class="notification_content">
        <p>{{notification.post.name}}さんからのリプライ<br>{{notification.post.content}}</p>
      </div>
    </div>
  </div>
</template>

<script>
import axios from "axios";

//const USERS_API = '/api/users/'

export default {
  props: ["notification"],
  async mounted() {
    if (this.notification.type == "replied"){
      if (this.notification.post.icon == null  || this.notification.post.icon == "") {
        this.notification.post.icon = "/images/people.png";
      }
    }else{
      if (this.notification.user.icon == null  || this.notification.user.icon == "") {
        this.notification.user.icon = "/images/people.png";
      }
    }
    const HEADERS = {
      Accept: "application/json",
      "access-token": localStorage.access_token,
      client: localStorage.client,
      uid: localStorage.uid
    };
  },
  data() {
    return {
      user: {}
    };
  }
};

console.log("hogeh");
</script>

<style scoped lang="scss">
/* css */
.notification {
  height: 140px;

  width: 100%;
  display: grid;
  grid-template-columns: 30% 70%;
  .notification_content {
    background-color: #cccccc;
    color: #4e4d4d;
    font-size: 18px;
    padding: 9px 22px;
    line-height: 23px;
    position: relative;
    p {
      margin: auto 0;
      /* display: block; */
      transform: translate(0, -50%);
      width: 80%;
      top: 50%;
      position: absolute;
    }
  }
  .user_content {
    .user_iconImage {
      width: 44%;
      margin: 0 auto;
      img {
        width: 100%;
        height: 100%;
        margin-top: 20px;
      }
    }
  }
}
</style>
