<template>
  <div>
    <div class="header-dummy"></div>
    <div class="footer l-box is-center">
      <nuxt-link to="/localTL" class="pure-button content-button">
        <img src="/images/home.png" class="content-button-img" />
      </nuxt-link>
      <nuxt-link to="/globalTL" class="pure-button content-button">
        <img src="/images/earth.png" class="content-button-img" />
      </nuxt-link>

      <nuxt-link to="/notification" class="pure-button content-button">
        <img src="/images/bell.png" class="content-button-img" />
      </nuxt-link>
      <nuxt-link to="/newPost" class="pure-button content-button">
        <img src="/images/pen.png" class="content-button-img" />
      </nuxt-link>

      <nuxt-link to="/setting" class="pure-button content-button">
        <img src="/images/setting.png" class="content-button-img" />
      </nuxt-link>
    </div>
  </div>
</template>

<style scoped>
/*
 * -- LAYOUT STYLES --
 * These are some useful classes which I will need
 */
.l-box {
  padding: 0.4em 0px;
}

.l-box-lrg {
  padding: 2em;
  border-bottom: 1px solid rgba(0, 0, 0, 0.1);
}

.is-center {
  text-align: center;
}

/* This is the class used for the footer */
.footer {
  background: #111;
  position: fixed;
  bottom: 0;
  width: 100%;
}

.content-button {
  background: rgb(48, 48, 48);
  padding: 0.2em 0.5em;
}

.content-button-img {
  width: 30px;
  height: 30px;
  display: block;
}

.header-dummy {
  height: 110px;
}
</style>
