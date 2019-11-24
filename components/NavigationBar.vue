<template>
  <div>
    <div class="home-menu">
      <button v-if="backbutton==true" @click="close">
        <img src="/images/backbutton.svg" alt />
      </button>
      <a class="pure-menu-heading" href>{{ title }}</a>
    </div>
  </div>
</template>

<script>
export default {
  props: ["title", "backbutton"],
  methods: {
    update() {
      location.reload();
    }
  },
  methods: {
    close() {
      this.$emit("closemenu");
    }
  }
};
</script>

<style lang="scss">
.home-menu {
  /* padding: 0.5em; */
  text-align: center;
  box-shadow: 0 1px 1px rgba(0, 0, 0, 0.1);
}
.home-menu {
  background: #525252;
  height: 59.78px;
  button {
    position: absolute;
    top: 0;
    left: 27px;
    height: 59.78px;
    img {
      height: 20px;
      position: absolute;
      top: 50%;
      transform: translate(0, -50%);
    }
  }
}
.pure-menu.pure-menu-fixed {
  /* Fixed menus normally have a border at the bottom. */
  border-bottom: none;
  /* I need a higher z-index here because of the scroll-over effect. */
  z-index: 4;
}

.menu-link {
  color: #aaa;
  font-size: 80%;
}

.header-dummy {
  height: 110px;
}
.pure-menu-heading {
  padding: 0.2em 1em;
  font-size: 22px;
  color: white;
  position: absolute;
  top: 0;
  left: 50%;
  transform: translate(-50%, 0%);
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

  /* We remove the border-separator assigned to .l-box-lrg */
  .l-box-lrg {
    border: none;
  }
}
</style>
