<template>
  <div>
    <p>{{user.name}}</p>
    <p>{{user.icon}}</p>
    <p>{{content}}</p>
    <p>{{createdAt}}</p>
    <p>{{evaluation}}</p>

    ---
  </div>
</template>

<script>

import axios from 'axios'

const USERS_API = '/api/users/'

export default {
  props: {
    content: String,
    userId: String, 
    createdAt: String,
    evaluation: Number
  },
  async mounted () {
    const HEADERS = {
      'Accept': 'application/json',
      'access-token': localStorage.access_token,
      'client': localStorage.client,
      'uid': localStorage.uid
    }

    var resp = await axios.get(
      USERS_API + this.userId, 
      { headers: HEADERS }
    )

    this.user = resp.data


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
