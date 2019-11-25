<template>
  <div>
    <div v-for="notification in notifications">
      <NotificationView :notification=notification />
    </div>
  </div>
</template>

<script>
import axios from "axios";
import NotificationView from "~/components/NotificationView.vue"

const POSTS_API = "/api/notifications";
export default {
  fetch({ store }) {
    return store.commit("setNavigationBar", "通知");
  },
  components:{
    NotificationView
  },
  data() {
    return {
      notifications: []
    };
  },
  async mounted() {
    const HEADERS = {
      Accept: "application/json",
      "access-token": localStorage.access_token,
      client: localStorage.client,
      uid: localStorage.uid
    };

    var resp = await axios.get(`${POSTS_API}`, {
      headers: HEADERS
    });

    this.notifications = resp.data;
  },
};
</script>

<style>
</style>
