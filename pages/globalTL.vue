<template>
  <div>
    <PostListView v-bind:query="query" />
  </div>
</template>

<script>
import NavigationBar from "~/components/NavigationBar";
import PostListView from "~/components/post/PostListView";
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
      title: `Global TL`
    };
  },
  data: () => {
    return {
      posts: [],
      query: "tl=global"
    };
  },
  methods: {}
};
</script>

<style>
/* css */
</style>
