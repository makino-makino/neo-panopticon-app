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
import PostView from "~/components/PostView.vue";
import axios from "axios";

const POSTS_API = "/api/posts";

export default {
  props: {
    query: String
  },
  components: {
    PostView
  },
  async mounted() {
    const HEADERS = {
      Accept: "application/json",
      "access-token": localStorage.access_token,
      client: localStorage.client,
      uid: localStorage.uid
    };

    var resp = await axios.get(`${POSTS_API}?${this.query}`, {
      headers: HEADERS
    });

    this.posts = resp.data;
    console.log(this.posts);
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
