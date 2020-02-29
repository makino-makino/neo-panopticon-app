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
import UserView from "~/components/user/UserView";
import axios from "axios";

const USERS_URI = "/users/";

export default {
  components: {
    UserView
  },
  props: {
    query: String
  },
  async mounted() {
    const resp = await axios.get(`${USERS_URI}?${this.query}`);

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
