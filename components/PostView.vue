<template>
  <div>
    <div class="post">
      <div class="user">
        <div class="user-icon-block">
          <nuxt-link :to="{ name: 'users-id', params: { id: user.id } }">
            <img src="/images/people.png" class="user-icon" />
          </nuxt-link>
        </div>

        <div class="user-name-block">
          <p class="user-name">{{ user.name }}</p>
        </div>
      </div>

      <div class="post-content-block">
        <p class="post-content">{{ content }}</p>
        <div class="content-buttons-block">
          <div
            v-on:click="submitEvaluation(true)"
            class="pure-button content-button"
          >
            <img src="/images/+ev.png" class="content-button-img" />
          </div>
          <div
            v-on:click="submitEvaluation(false)"
            class="pure-button content-button"
          >
            <img src="/images/-ev.png" class="content-button-img" />
          </div>
          <div class="pure-button content-button  pure-button-disabled">
            <p class="content-button-img">{{ evaluation }}</p>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
import axios from "axios";

const POSTS_API = "/api/posts/";
const USERS_API = "/api/users/";
const EVALUATION_API = "/api/evaluations/";

export default {
  props: {
    postId: Number,
    content: String,
    userId: Number,
    createdAt: String,
    evaluation: Number
  },
  async mounted() {
    const HEADERS = {
      Accept: "application/json",
      "access-token": localStorage.access_token,
      client: localStorage.client,
      uid: localStorage.uid
    };

    var resp = await axios.get(USERS_API + this.userId, { headers: HEADERS });

    this.user = resp.data;
  },
  data() {
    return {
      user: {}
    };
  },
  methods: {
    async submitEvaluation(isPositive) {
      const HEADERS = {
        Accept: "application/json",
        "access-token": localStorage.access_token,
        client: localStorage.client,
        uid: localStorage.uid
      };

      var resp = await axios.post(
        EVALUATION_API,
        {
          post_id: this.postId,
          is_positive: isPositive
        },
        {
          headers: HEADERS
        }
      );

      var resp = await axios.get(POSTS_API + this.postId, { headers: HEADERS });

      this.evaluation = resp.data.evaluation;
    }
  }
};
</script>

<style>
* {
  -webkit-box-sizing: border-box;
  -moz-box-sizing: border-box;
  box-sizing: border-box;
}
.post {
  background: #414141;
  margin: 10px;
}

.user {
  margin: 20px;

  height: 180px;
  width: 20%;

  text-align: left;
  display: inline-block;

  /* background: #ffffff; */
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
  /* background: royalblue; */
}

.user-icon {
  height: 70px;
  width: 70px;
}

.post-content-block {
  float: right;

  height: 180px;
  width: 70%;

  padding-right: 10%;
}

.post-content {
  font-size: 30px;
  margin-top: 30px;
  margin-bottom: 30px;
}

.content-buttons-block {
  text-align: right;
  margin: 20px;
}

.content-button {
  background: rgb(48, 48, 48);
}

.content-button-img {
  width: 30px;
  height: 30px;
  display: inline-block;
}

.footer-button {
  display: inline-block;

  background-color: rg ba(255, 58, 23, 0.521);
  width: 35px;
  height: 35px;
}

.menu-link {
  color: #aaa;
}

/*
 * -- TABLET (AND UP) MEDIA QUERIES --
 * On tablets and other medium-sized devices, we want to customize some
 * of the mobile styles.
 */
@media (min-width: 48em) {
  /* We increase the body font size */
  body {
    font-size: 30px;
  }

  /* We can align the menu header to the left, but float the
    menu items to the right. */
  .home-menu {
    text-align: left;
  }
  .home-menu ul {
    float: right;
  }

  /* We increase the height of the splash-container */
  /*    .splash-container {
        height: 500px;
    }*/

  /* We decrease the width of the .splash, since we have more width
    to work with */
  .splash {
    width: 50%;
    height: 50%;
  }

  .splash-head {
    font-size: 250%;
  }

  /* We remove the border-separator assigned to .l-box-lrg */
  .l-box-lrg {
    border: none;
  }
}

/*
 * -- DESKTOP (AND UP) MEDIA QUERIES --
 * On desktops and other large devices, we want to over-ride some
 * of the mobile and tablet styles.
 */
@media (min-width: 78em) {
  /* We increase the header font size even more */
  .splash-head {
    font-size: 300%;
  }
}
</style>
