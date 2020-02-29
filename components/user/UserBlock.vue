<template>
  <div class="user">
    <div class="user-icon-block">
      <nuxt-link :to="{ name: 'users-id', params: { id: user.id } }">
        <img :src="user.icon" class="user-icon" />
      </nuxt-link>
    </div>

    <div class="user-name-block">
      <p class="user-name">{{ user.name }}</p>
    </div>
  </div>
</template>

<script>
import axios from "axios";

const USERS_URI = "/api/users/";

export default {
  props: {
    userId: String
  },
  async mounted() {
    const resp = await axios.get(`${USERS_URI}${this.userId}`);
    if (resp.data.icon == "" || resp.data.icon == null) {
      resp.data.icon = "/images/people.png";
    }
    this.user = resp.data;
  },
  data() {
    return {
      user: {}
    };
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
  text-align: left;
  display: inline-block;
}

.user-name {
  color: #aaa;
  font-size: 25px;
  line-height: 30px;
  margin: 0;
}

.user-name-block {
  display: flex;
}

.user-icon-block {
  margin: 20px;
  /* background: royalblue; */
  float: left;
}

.user-icon {
  height: 40px;
  width: 40px;
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
