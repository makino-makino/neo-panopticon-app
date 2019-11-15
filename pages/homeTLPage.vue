<template>
  <div>    
    <PostListView v-bind:query="query"/>
  </div>
</template>

<script>

import PostListView from '~/components/PostListView.vue'
import axios from 'axios'


export default {
  components: {
    PostListView
  },
  data: () => {
    return {
      posts: [],
      query: 'tl=local'
    }
  },
  methods: {
    
  }
}



</script>

<style>
/* css */
</style>
