<template>
  <div>
    <template v-if="hasFollowed">
      <button v-on:click="submitFollowing">フォローを解除</button>
    </template>
    <template v-else>
      <button v-on:click="submitFollowing">フォロー</button>
    </template>
  </div>
</template>

<script>
import axios from "axios";

const FOLLOWINGS_API = "/api/followings";

export default {
  props: {
    userId: Number
  },
  // asyncData({ params }) {
  //   return {
  //     userId: `${params.id}`
  //   };
  // },

  async mounted() {
    const HEADERS = {
      Accept: "application/json",
      "access-token": localStorage.access_token,
      client: localStorage.client,
      uid: localStorage.uid
    };

    var resp = await axios.get(
      `${FOLLOWINGS_API}/has_followed/?from_id=${localStorage.userId}&to_id=${this.userId}`,
      {
        headers: HEADERS
      }
    );

    this.hasFollowed = resp.data.has_followed;
  },
  data() {
    return {
      hasFollowed: false
    };
  },

  methods: {
    async submitFollowing() {
      const HEADERS = {
        Accept: "application/json",
        "access-token": localStorage.access_token,
        client: localStorage.client,
        uid: localStorage.uid
      };

      var resp = await axios.post(
        FOLLOWINGS_API,
        {
          from_id: localStorage.userId,
          to_id: this.userId
        },
        {
          headers: HEADERS
        }
      );

      this.hasFollowed = resp.data.from_id !== null;
    }
  }
};
</script>

<style>
/* css */
</style>
