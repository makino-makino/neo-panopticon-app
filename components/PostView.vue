<template>
  <div>
    <!-- <p>{{user.name}}</p>
    <p>{{user.icon}}</p>
    <p>{{content}}</p>
    <p>{{createdAt}}</p>
    <p>{{evaluation}}</p>

    --- -->
    <div class="home-menu pure-menu pure-menu-horizontal pure-menu-fixed">
      <a class="pure-menu-heading" href="">Local TL</a>

      <ul class="pure-menu-list">
        <li class="pure-menu-item pure-menu-selected">
          <a href="#" class="menu-link pure-menu-link">Settings</a>
        </li>
        <!-- <li class="pure-menu-item">
        <a href="#" class="pure-menu-link">Tour</a>
      </li>
      <li class="pure-menu-item">
        <a href="#" class="pure-menu-link">Sign Up</a>
      </li> -->
      </ul>
    </div>

    <nav class="uk-navbar-container naver" uk-navbar>
      <div class="uk-navbar-left">
        <ul class="uk-navbar-nav">
          <li class="uk-active"><a href=""></a></li>
          <li class="uk-parent"><a href=""></a></li>
          <!-- <li><a href=""></a></li> -->
        </ul>
      </div>
    </nav>

    <div class="post">
      <div class="user">
        <div class="user-icon-block">
          <img
            src="https://pbs.twimg.com/profile_images/1181447006163628032/gC-rG3FT_400x400.jpg"
            class="user-icon"
          />
        </div>

        <div class="user-name-block">
          <p class="user-name">akakou</p>
        </div>
      </div>

      <div class="post-content-block">
        <p class="post-content">こんにちは。私は赤間滉星です。</p>
        <div class="content-buttons-block">
          <div class="pure-button content-button">
            <img src="/images/+ev.png" class="content-button-img" />
          </div>
          <div class="pure-button content-button">
            <img src="/images/-ev.png" class="content-button-img" />
          </div>
        </div>
      </div>
    </div>

    <div class="footer l-box is-center">
      <div class="pure-button content-button">
        <img src="/images/home.png" class="content-button-img" />
      </div>
      <div class="pure-button content-button">
        <img src="/images/earth.png" class="content-button-img" />
      </div>
      <div class="pure-button content-button">
        <img src="/images/bell.png" class="content-button-img" />
      </div>
    </div>
  </div>
</template>

<script>
import axios from "axios";

const USERS_API = "/api/users/";

export default {
  props: {
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
  }
};
</script>

<style>
* {
  -webkit-box-sizing: border-box;
  -moz-box-sizing: border-box;
  box-sizing: border-box;
}

/*
 * -- BASE STYLES --
 * Most of these are inherited from Base, but I want to change a few.
 */
body {
  line-height: 1.7em;
  color: #cccccc;
  font-size: 30px;
  background: #313131;
}

h1,
h2,
h3,
h4,
h5,
h6,
label {
  color: #34495e;
}

.pure-img-responsive {
  max-width: 100%;
  height: auto;
}

/*
 * -- LAYOUT STYLES --
 * These are some useful classes which I will need
 */
.l-box {
  padding: 1em;
}

.l-box-lrg {
  padding: 2em;
  border-bottom: 1px solid rgba(0, 0, 0, 0.1);
}

.is-center {
  text-align: center;
}

/*
 * -- PURE FORM STYLES --
 * Style the form inputs and labels
 */
.pure-form label {
  margin: 1em 0 0;
  font-weight: bold;
  font-size: 100%;
}

.pure-form input[type] {
  border: 2px solid #ddd;
  box-shadow: none;
  font-size: 100%;
  width: 100%;
  margin-bottom: 1em;
}

/*
 * -- PURE BUTTON STYLES --
 * I want my pure-button elements to look a little different
 */
.pure-button {
  background-color: #ca3e47;
  color: white;
  padding: 0.5em 2em;
  border-radius: 5px;
}

a.pure-button-primary {
  background: white;
  color: #ca3e47;
  border-radius: 5px;
  font-size: 120%;
}

/*
 * -- MENU STYLES --
 * I want to customize how my .pure-menu looks at the top of the page
 */

.home-menu {
  padding: 0.5em;
  text-align: center;
  box-shadow: 0 1px 1px rgba(0, 0, 0, 0.1);
}
.home-menu {
  background: #525252;
}
.pure-menu.pure-menu-fixed {
  /* Fixed menus normally have a border at the bottom. */
  border-bottom: none;
  /* I need a higher z-index here because of the scroll-over effect. */
  z-index: 4;
}

.home-menu .pure-menu-heading {
  color: white;
  font-weight: 400;
  font-size: 120%;
}

.home-menu .pure-menu-selected a {
  color: white;
}

.home-menu a {
  color: #ba5e67;
}
.home-menu li a:hover,
.home-menu li a:focus {
  background: none;
  border: none;
  color: #fa9ea7;
}

/*
 * -- SPLASH STYLES --
 * This is the blue top section that appears on the page.
 */

.splash-container {
  background: #1f8dd6;
  z-index: 1;
  overflow: hidden;
  /* The following styles are required for the "scroll-over" effect */
  width: 100%;
  height: 88%;
  top: 0;
  left: 0;
  position: fixed !important;
}

.splash {
  /* absolute center .splash within .splash-container */
  width: 80%;
  height: 50%;
  margin: auto;
  position: absolute;
  top: 100px;
  left: 0;
  bottom: 0;
  right: 0;
  text-align: center;
  text-transform: uppercase;
}

/* This is the main heading that appears on the blue section */
.splash-head {
  font-size: 20px;
  font-weight: bold;
  color: white;
  border: 3px solid white;
  padding: 1em 1.6em;
  font-weight: 100;
  border-radius: 5px;
  line-height: 1em;
}

/* This is the subheading that appears on the blue section */
.splash-subhead {
  color: white;
  letter-spacing: 0.05em;
  opacity: 0.8;
}

/*
 * -- CONTENT STYLES --
 * This represents the content area (everything below the blue section)
 */
.content-wrapper {
  /* These styles are required for the "scroll-over" effect */
  position: absolute;
  top: 87%;
  width: 100%;
  min-height: 12%;
  z-index: 2;
  background: white;
}

/* We want to give the content area some more padding */
.content {
  padding: 1em 1em 3em;
}

/* This is the class used for the main content headers (<h2>) */
.content-head {
  font-weight: 400;
  text-transform: uppercase;
  letter-spacing: 0.1em;
  margin: 2em 0 1em;
}

/* This is a modifier class used when the content-head is inside a ribbon */
.content-head-ribbon {
  color: white;
}

/* This is the class used for the content sub-headers (<h3>) */
.content-subhead {
  color: #1f8dd6;
}
.content-subhead i {
  margin-right: 7px;
}

/* This is the class used for the dark-background areas. */
.ribbon {
  background: #2d3e50;
  color: #aaa;
}

/* This is the class used for the footer */
.footer {
  background: #111;
  position: fixed;
  bottom: 0;
  width: 100%;
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

  /* text-align: right; */
  /* display: inline-block; */
  /* background: #ffcccc; */
}

.post-content {
  font-size: 30px;
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
