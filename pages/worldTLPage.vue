<template>
  <div>
    <h1>新規登録</h1>
    
    <PostListView v-bind:query="query"/>
  </div>
</template>

<script>

import NavigationBar from '~/components/NavigationBar.vue'
import PostListView from '~/components/PostListView.vue'
import axios from 'axios'


export default {
  components: {
    NavigationBar,
    PostListView
  },
  data: () => {
    return {
      posts: [],
      query: 'tl=world'
    }
  },
  methods: {
    
  }
}



</script>

<style>
/* css */
</style>
