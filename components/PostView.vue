<template>
  <div>
    <p>{{user.name}}</p>
    <p>{{user.icon}}</p>
    <p>{{content}}</p>
    <p>{{created_at}}</p>
    <p>{{evaluation}}</p>

    ---
  </div>
</template>

<script>

import axios from 'axios'

const USER_API = '/api/users/'

export default {
  props: {
    content: String,
    user_id: Number, 
    created_at: String,
    evaluation: Number
  },
  async mounted () {
    console.log(this)

    const HEADERS = {
      'Accept': 'application/json',
      'access-token': localStorage.access_token,
      'client': localStorage.client,
      'uid': localStorage.uid
    }

    // try {
      this.user_id = 1
      var resp = await axios.get(
        USER_API + this.user_id, 
        { headers: HEADERS }
      )

      this.user = resp.data


    // } catch (e) {
      // TODO: 
    // }    
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
