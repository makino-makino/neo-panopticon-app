<template>
  <div>
    <PostListView v-bind:query="query" />
  </div>
</template>

<script>
import NavigationBar from "~/components/NavigationBar.vue";
import PostListView from "~/components/PostListView.vue";
import axios from "axios";

export default {
  fetch({ store }) {
    return store.commit("setNavigationBar", "グローバル");
  },
  components: {
    NavigationBar,
    PostListView
  },
  head() {
    return {
      title: `Debug TL`
    };
  },
  data: () => {
    return {
      posts: [],
      query: ""
    };
  },
  methods: {}
};
</script>

<style>
/* css */
</style>
