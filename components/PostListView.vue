<template>
  <div>
      <div v-for='post in posts'> 
        <PostView v-bind:content="post.content"
            v-bind:user_id="post.user_id"
            v-bind:created_at="post.created_at"
            v-bind:evaluation="post.evaluation" />
      </div> 

  </div>
</template>

<script>

import PostView from '~/components/PostView.vue'
import axios from 'axios'


const POSTS_API = '/api/posts'

export default {
  props: {
    query: String
  },
  components: {
    PostView
  },
  async mounted () {
    const HEADERS = {
      'Accept': 'application/json',
      'access-token': localStorage.access_token,
      'client': localStorage.client,
      'uid': localStorage.uid
    }

    var resp = await axios.get(
      `${POSTS_API}?${this.query}`, 
      { headers: HEADERS }
    )

    this.posts = resp.data
  },
  data() {
    return {
      posts: []
    }
  },
  methods: {
    
  }
}



</script>

<style>
/* css */
</style>
