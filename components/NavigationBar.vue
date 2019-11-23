<template>
  <div>
    <div class="home-menu pure-menu pure-menu-horizontal pure-menu-fixed">
      <a class="pure-menu-heading" href="">title</a>

      <ul class="pure-menu-list">
        <li class="pure-menu-item pure-menu-selected">
          <a href="#" class="menu-link pure-menu-link">Settings</a>
        </li>
      </ul>
    </div>

    <div class="header-dummy"></div>
  </div>
</template>

<script>
export default {
  props: ["title"]
};
</script>

<style>
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
  font-size: 80%;
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

.menu-link {
  color: #aaa;
  font-size: 80%;
}

.header-dummy {
  height: 110px;
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
