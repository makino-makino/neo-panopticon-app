<template>
  <div>
    <p>{{id}}</p>
    <p>{{name}}</p>
    <p>{{bio}}</p>
    <p>{{icon}}</p>
    <p>{{evaluation}}</p>
    <button v-on:click="follow(id)">follow</button>
  </div>
</template>

<script>

import axios from 'axios'

const USER_API = '/api/users/'
const FOLLOWINGS_API = '/api/followings'


export default {
  props: {
    id: Number,
    name: String,
    bio: String,
    icon: String,
    evaluation: Number
  },
  async mounted() {

  },
  data() {
    return {
      user: {}
    }
  },
  methods: {
    async follow(user_id) {
      const HEADERS = {
        'Accept': 'application/json',
        'access-token': localStorage.access_token,
        'client': localStorage.client,
        'uid': localStorage.uid
      }

      var resp = await axios.post(
        FOLLOWINGS_API, 
        {
          to_id: user_id
        },
        {
          headers: HEADERS,
          
        }
      )

      // TODO: ちゃんと次の場所にジャンプさせる
      location.href = '/'

    }

  }

}



</script>

<style>
/* css */
</style>
