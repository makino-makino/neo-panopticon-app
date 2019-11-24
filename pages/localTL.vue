<template>
  <div>
    <PostListView v-if="loaded" v-bind:query="query" />
  </div>
</template>

<script>
import PostListView from "~/components/PostListView.vue";
import axios from "axios";

export default {
  fetch({ store }) {
    return store.commit("setNavigationBar", "ローカル");
  },
  components: {
    PostListView
  },
  mounted() {
    var userId = localStorage.userId;
    this.query = `tl=local&followers=${userId}`;
    this.loaded = true;
  },
  head() {
    return {
      title: `Local TL`
    };
  },
  data() {
    return {
      posts: [],
      query: "",
      loaded: false
    };
  },
  methods: {}
};
</script>

<style>
/* css */
</style>
