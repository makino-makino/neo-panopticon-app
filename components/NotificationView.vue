<template>
  <div>
    <p>{{type}}</p>
    <p>{{createdAt}}</p>
    <p>{{datum}}</p>

    ---
  </div>
</template>

<script>

import axios from 'axios'

//const USERS_API = '/api/users/'

export default {
  props: {
    //content: String,
    //userId: String, 
    createdAt: String,
    type: String,
    datum: String
  },
  async mounted () {
    const HEADERS = {
      'Accept': 'application/json',
      'access-token': localStorage.access_token,
      'client': localStorage.client,
      'uid': localStorage.uid
    }

    /*var resp = await axios.get(
      USERS_API + this.userId, 
      { headers: HEADERS }
    )

    this.user = resp.data*/


  },
  data() {
    return {
      user: {}
    }
  }

}



console.log("hogeh")
</script>

<style>
/* css */
</style>
