<template>
  <div>
      <UserListView v-bind:query="query"/>
  </div>
</template>

<script>

import UserListView from '~/components/UserListView.vue'
import axios from 'axios'


const USER_API = '/api/users/'

export default {
  components: {
    UserListView
  },
  data() {
      return {
        query: 'follower=1'
      }
  },
  methods: {
    
  }
}



</script>

<style>
/* css */
</style>
