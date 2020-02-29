<template>
  <div>
    <div v-for="notification in notifications">
      <NotificationView :notification="notification" />
    </div>
  </div>
</template>

<script>
import axios from "axios";
import NotificationView from "~/components/NotificationView.vue";

const POSTS_URI = "/notifications";
export default {
  fetch({ store }) {
    return store.commit("setNavigationBar", "通知");
  },
  components: {
    NotificationView
  },
  data() {
    return {
      notifications: []
    };
  },
  async mounted() {
    var resp = await axios.get(POSTS_URI);
    this.notifications = resp.data;
  }
};
</script>

<style></style>
