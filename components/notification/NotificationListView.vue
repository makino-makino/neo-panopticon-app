<template>
  <div>
    <div v-for="not in nots">
      <NotificationView
        v-bind:type="not.type"
        v-bind:created_at="not.createdAt"
        v-bind:post="not.post"
        v-bind:datum="not.datum"
      />
    </div>
  </div>
</template>

<script>
import NotificationView from "~/components/notification/NotificationView";
import axios from "axios";

const NOTIFICATION_URI = "/notifications/";

export default {
  props: {
    query: String
  },
  components: {
    NotificationView
  },
  async mounted() {
    const resp = await axios.get(`${NOTIFICATION_URI}?${this.query}`);

    this.nots = resp.data;
    for (let i = 0; i < this.nots.length; i++) {
      if (this.nots[i].type == "retweeted" || this.nots[i].type == "replied") {
        this.nots[i].datum = this.nots[i].post.content;
      } else if (this.nots[i].type == "followed") {
        this.nots[i].datum = this.nots[i].user.name;
      }
    }
  },
  data() {
    return {
      nots: []
    };
  },
  methods: {}
};
</script>

<style>
/* css */
</style>
