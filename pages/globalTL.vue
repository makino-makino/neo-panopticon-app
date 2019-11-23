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
  components: {
    NavigationBar,
    PostListView
  },
  head() {
    return {
      title: `Global TL`,
      meta: [
        {
          hid: "viewport",
          name: "viewport",
          content: ""
        }
      ]
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
