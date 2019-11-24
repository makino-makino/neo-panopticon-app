<template>
  <div>
    <div v-for="user in users">
      <UserView
        v-bind:id="user.id"
        v-bind:name="user.name"
        v-bind:bio="user.bio"
        v-bind:icon="user.icon"
        v-bind:evaluation="user.evaluation"
      />
    </div>
  </div>
</template>

<script>
import UserView from "~/components/UserView.vue";
import axios from "axios";

const USERS_API = "/api/users/";

export default {
  components: {
    UserView
  },
  props: {
    query: String
  },
  async mounted() {
    const HEADERS = {
      Accept: "application/json",
      "access-token": localStorage.access_token,
      client: localStorage.client,
      uid: localStorage.uid
    };

    var resp = await axios.get(`${USERS_API}?${this.query}`, {
      headers: HEADERS
    });

    this.users = resp.data;
  },
  data() {
    return {
      users: []
    };
  },
  methods: {}
};
</script>

<style>
/* css */
</style>
