<template>
  <div>    
    <PostListView v-if="loaded" v-bind:query="`tl=local&followers=${user_id}`"/>
  </div>
</template>

<script>

import PostListView from '~/components/PostListView.vue'
import axios from 'axios'

export default {
  components: {
    PostListView
  },
  mounted() {
    this.user_id = localStorage.user_id
    this.loaded = true
  },

  data() {
    return {
      posts: [],
      user_id: '',
      loaded: false
    }
  },
  methods: {
    
  }
}



</script>

<style>
/* css */
</style>
