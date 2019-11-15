<template>
  <div>
      <UserListView v-bind:query="query"/>
  </div>
</template>

<script>

import UserListView from '~/components/UserListView.vue'
import axios from 'axios'


export default {
  components: {
    UserListView
  },
  validate ({ params }) {
    return /^\d+$/.test(params.id)
  },
  asyncData ({ params }) {
    return {
      query: `followee=${params.id}`
    }
  },
  data() {
    return {
    }
  },
  methods: {
    
  }
}



</script>

<style>
/* css */
</style>
