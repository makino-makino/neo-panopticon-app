<template>
  <div>
    <div v-if="amI">
      <p>{{ user.id }}</p>
      <p>{{ user.name }}</p>
      <p>{{ user.bio }}</p>
      <p>{{ user.icon }}</p>
      <p>{{ user.evaluation }}</p>

      <button v-on:click="submitFollowing">フォロー</button>
    </div>
  </div>
</template>

<script>
import axios from "axios";

const USERS_API = "/api/users";
const FOLLOWINGS_API = "/api/followings";

export default {
  validate({ params }) {
    return /^\d+$/.test(params.id);
  },
  asyncData({ params }) {
    return {
      userId: `${params.id}`
    };
  },
  data() {
    return {
      amI: true,
      user: {
        id: "",
        name: "",
        bio: "",
        icon: "",
        evaluation: ""
      }
    };
  },
  async mounted() {
    const HEADERS = {
      Accept: "application/json",
      "access-token": localStorage.access_token,
      client: localStorage.client,
      uid: localStorage.uid
    };

    var resp = await axios.get(`${USERS_API}/${this.userId}`, {
      headers: HEADERS
    });

    this.user = resp.data;
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

      this.following = resp.data;
    }
  }
};
</script>

<style>
/* css */
</style>
