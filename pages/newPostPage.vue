<template>
  <div>
    <textarea v-model="content"></textarea><br>
    <button v-on:click="submit">投稿</button>
  </div>
</template>

<script>

import NavigationBar from '~/components/NavigationBar.vue'
import axios from 'axios'

const POSTS_API = '/api/posts'


export default {
  components: {
  },
  data: () => {
    return {
      content: ''
    }
  },

  methods: {
    async submit (e) {
      try {
        const HEADERS = {
          'Accept': 'application/json',
          'access-token': localStorage.access_token,
          'client': localStorage.client,
          'uid': localStorage.uid
        }

        var resp = await axios.post(
          POSTS_API, 
          {
            content: this.content
          },
          {
            headers: HEADERS,
            
          }
        )

        // TODO: ちゃんと次の場所にジャンプさせる
        location.href = '/'

      } catch (e) {
        console.log(e)
      }
    }
  }
}



</script>

<style>
/* css */
</style>
