<template>
  <div>
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

<style>
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

/* This is the class used for the footer */
.footer {
  background: #111;
  position: fixed;
  bottom: 0;
  width: 100%;
}

.content-button {
  background: rgb(48, 48, 48);
}

.content-button-img {
  width: 30px;
  height: 30px;
  display: inline-block;
}
</style>
