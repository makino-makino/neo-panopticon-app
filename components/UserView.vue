<template>
  <div>
    <p>{{id}}</p>
    <p>{{name}}</p>
    <p>{{bio}}</p>
    <p>{{icon}}</p>
    <p>{{evaluation}}</p>
  </div>
</template>

<script>

import axios from 'axios'

const USER_API = '/api/users/'

export default {
  props: {
    id: Number,
    name: String,
    bio: String,
    icon: String,
    evaluation: Number
  },
  async mounted () {

  },
  data() {
    return {
      user: {}
    }
  }

}



</script>

<style>
/* css */
</style>
