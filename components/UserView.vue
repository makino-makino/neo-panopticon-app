<template>
  <div>
    <UserBlock v-bind:userId="id" />

    <div class="follow-button-block">
      <FollowButton v-bind:userId="id" />
    </div>
  </div>
</template>

<script>
import axios from "axios";

import FollowButton from "~/components/FollowButton.vue";
import UserBlock from "~/components/UserBlock.vue";

export default {
  props: {
    id: Number,
    name: String,
    bio: String,
    icon: String,
    evaluation: Number
  },
  components: {
    FollowButton,
    UserBlock
  },
  async mounted() {},
  data() {
    return {
      user: {}
    };
  }
};
</script>

<style>
/* css */
</style>
