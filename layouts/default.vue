<template>
  <div>
    <NavigationBar :title="title" />
    <nuxt />
    <BottomNavigationView v-if="hiddenBottom" />
  </div>
</template>

<script>
import NavigationBar from "~/components/NavigationBar.vue";
import BottomNavigationView from "~/components/BottomNavigationView.vue";
import TabBar from "~/components/TabBar.vue";
import { mapState } from "vuex";
export default {
  components: {
    NavigationBar,
    BottomNavigationView
  },
  computed: mapState(["title",'hiddenBottom']),
  watch: {
    $route: function(e) {
      if (
        localStorage.access_token == "" &&
        localStorage.client == "" &&
        localStorage.uid == "" &&
        localStorage.userId == ""
      ) {
        const arr = ["login", "register"];
        if (arr.indexOf(e.name) < 0) {
          this.$router.push("login");
        }
        this.$store.commit("setBottomHidden", false);
      }else{
        this.$store.commit("setBottomHidden", true);
      }
    }
  }
};
</script>

<style lang="scss">
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
  background-color: rgb(48, 48, 48);
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
</style>
