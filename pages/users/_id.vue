<template>
  <div>
    <div v-if="amI">
      <p>{{ user.id }}</p>
      <p>{{ user.name }}</p>
      <p>{{ user.bio }}</p>
      <p>{{ user.icon }}</p>
      <p>{{ user.evaluation }}</p>

      <!-- <button v-on:click="submitFollowing"></button> -->
    </div>
  </div>
</template>

<script>
import axios from "axios";

const USERS_API = "/api/users";

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

  methods: {}
};
</script>

<style>
/* css */
</style>
