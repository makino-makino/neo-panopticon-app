<template>
  <div>
    <div class="user-view">
      <UserBlock v-bind:userId="id" />

      <div class="follow-button-block">
        <FollowButton v-bind:userId="id" class="post-content" />
      </div>
    </div>
  </div>
</template>

<script>
import axios from "axios";

import FollowButton from "~/components/FollowButton.vue";
import UserBlock from "~/components/user/UserBlock.vue";

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
.user-view {
  background: #414141;
  margin: 10px;
}

/* .user {
  margin: 20px;

  height: 180px;
  width: 20%;

  text-align: left;
  display: inline-block;

}

.user-name {
  color: #aaa;
  font-size: 25px;
}

.user-name-block {
  float: left;
}

.user-icon-block {
  margin: 20px;

  float: left;
}

.user-icon {
  height: 70px;
  width: 70px;
}

*/
.follow-button-block {
  float: right;

  height: 180px;
  width: 70%;

  padding-right: 10%;
}

.post-content {
  text-align: right;

  font-size: 30px;
  margin-top: 30px;
  margin-bottom: 30px;
}
</style>
