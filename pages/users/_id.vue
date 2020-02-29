<template>
  <div>
    <div class="profileBackGround">
      <canvas id="canvas" height="600" width="600"></canvas>
      <div>
        <img :src="user.icon" alt class="profileicon" />
        <p class="name">{{ user.name }}</p>
        <p class="bio">{{ user.bio }}</p>
        <!-- <p>{{ user.id }}</p> -->
        <!-- <p>{{ user.icon }}</p> -->
        <!-- <p>{{ user.evaluation }}</p> -->
      </div>
      <div v-if="!amI">
        <FollowButton v-bind:userId="userId" class="followbutton" />
      </div>
    </div>
    <div v-if="loaded">
      <PostListView v-bind:query="query" />
    </div>
  </div>
</template>

<script>
import axios from "axios";
import FollowButton from "~/components/FollowButton.vue";
import PostListView from "~/components/post/PostListView.vue";

const USERS_URI = "/api/users";

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
  computed: {
    amI: function() {
      return String(localStorage.userId) == String(this.user.id);
    }
  },
  data() {
    return {
      loaded: false,
      user: {
        id: "",
        name: "",
        bio: "",
        icon: "",
        evaluation: ""
      },
      query: ""
    };
  },
  async mounted() {
    const HEADERS = {
      Accept: "application/json",
      "access-token": localStorage.access_token,
      client: localStorage.client,
      uid: localStorage.uid
    };

    var resp = await axios.get(`${USERS_URI}/${this.userId}`, {
      headers: HEADERS
    });
    let aaa = "";
    if (resp.data.icon == "" || resp.data.icon == null) {
      resp.data.icon = "/images/people.png";
    }

    this.user = resp.data;

    this.loaded = true;
    this.query = `tl=user&user_id=${this.userId}`;
  }
};
</script>

<style lang="scss">
/* css */
#canvas {
  width: 100%;
  position: absolute;
  top: 0;
  bottom: 0;
  height: 100%;
  z-index: -1;
}
.profileBackGround {
  // height: 400px;
  position: relative;
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
  .followbutton {
    margin-top: 10px;
    font-size: 20px;
    text-align: center;
  }
}
</style>
