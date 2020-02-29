<template>
  <div>
    <div v-for="post in posts">
      <PostView
        v-bind:postId="post.id"
        v-bind:content="post.content"
        v-bind:userId="post.user_id"
        v-bind:updatedAt="post.updated_at"
        v-bind:evaluation="post.evaluation"
      />
    </div>
  </div>
</template>

<script>
import PostView from "~/components/post/PostListView.vue";
import axios from "axios";

const POSTS_URI = "/posts";

export default {
  props: {
    query: String
  },
  components: {
    PostView
  },
  async mounted() {
    var resp = await axios.get(`${POSTS_URI}?${this.query}`);
    this.posts = resp.data;
  },
  data() {
    return {
      posts: []
    };
  },
  methods: {}
};
</script>

<style>
/* css */
</style>
