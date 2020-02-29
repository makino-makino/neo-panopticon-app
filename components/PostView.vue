<template>
  <div>
    <div class="post">
      <!-- <input type="hidden" v-bind:value="userId" /> -->

      <UserBlock v-bind:userId="userId" />
      <div class="post-content-block">
        <p class="post-content">{{ content }}</p>
        <p class="timepostcontet">{{ time }}</p>
      </div>
      <div class="content-buttons-block">
        <div v-on:click="submitEvaluation(true)" class="pure-button content-button">
          <img src="/images/+ev.png" class="content-button-img" />
        </div>
        <div v-on:click="submitEvaluation(false)" class="pure-button content-button">
          <img src="/images/-ev.png" class="content-button-img" />
        </div>
        <div class="pure-button content-button pure-button-disabled">
          <p class="content-button-img">{{ evaluation }}</p>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
import axios from "axios";
import UserBlock from "~/components/UserBlock";

const POSTS_URI = "/posts/";
const USERS_URI = "/users/";
const EVALUATION_URI = "/evaluations/";

export default {
  props: {
    postId: Number,
    content: String,
    userId: String,
    updatedAt: String,
    evaluation: Number
  },
  components: {
    UserBlock
  },
  data() {
    return {
      time: ""
    };
  },
  mounted() {
    this.time = new Date(this.updatedAt).toLocaleString();

    this.evaluation = Math.round(this.evaluation * 10) / 10;
  },
  methods: {
    async submitEvaluation(isPositive) {
      var resp = await axios.post(`${EVALUATION_URI}`, {
        post_id: this.postId,
        is_positive: isPositive
      });

      var resp = await axios.get(`${POSTS_URI}${this.postId}`);
      this.evaluation = Math.round(resp.data.evaluation * 10) / 10;
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
  padding-bottom: 10px;
}

.post-content-block {
  padding: 0 16px;
}

.post-content {
  font-size: 17px;
  margin: 0;
  line-height: 25px;
}

.timepostcontet {
  font-size: 17px;
  margin: 0;
  line-height: 25px;
  text-align: right;
}

.content-buttons-block {
  margin-right: 10px;
  margin-left: auto;
  display: block;
  text-align: right;
}

.content-button {
  background: rgb(48, 48, 48);
  padding: 0.2em 0.5em;
  display: inline-flex;
  opacity: 1;
}

.content-button-img {
  width: 20px;
  height: 20px;
  display: inline-block;
  margin: 0;
  font-size: 20px;
  line-height: 100%;
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
