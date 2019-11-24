<template>
  <div>
    <div class="profileBackGround">
      <div v-if="amI">
        <img src="/images/people.png" alt class="profileicon" />
        <p class="name">{{ user.name }}</p>
        <p class="bio">{{ user.bio }}</p>
        <!-- <p>{{ user.id }}</p> -->
        <!-- <p>{{ user.icon }}</p> -->
        <!-- <p>{{ user.evaluation }}</p> -->
      </div>
      <div v-else>
        <FollowButton v-bind:userId="user.id" />
      </div>
    </div>
    <PostListView v-bind:query="'tl=global'" />
  </div>
</template>

<script>
import axios from "axios";
import FollowButton from "~/components/FollowButton.vue";
import PostListView from "~/components/PostListView.vue";

const USERS_API = "/api/users";

export default {
  components: {
    FollowButton,
    PostListView
  },
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
  }
};
</script>

<style lang="scss">
/* css */
.profileBackGround {
  // height: 400px;
  width: 100%;
  background-color: rgb(31, 28, 41);
  padding-top: 100px;
  padding-bottom: 100px;
  .profileicon {
    height: 90px;
    margin: 0 auto;
    display: block;
  }
  .name {
    text-align: center;
    width: 50vw;
    margin: 0 auto;
  }
  .bio {
    text-align: center;
    font-size: 0.9rem;
    line-height: 0.9rem;
    width: 50vw;
    margin: 0 auto;
  }
}
</style>
