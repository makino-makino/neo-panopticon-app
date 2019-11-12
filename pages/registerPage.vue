<template>
  <div>
    <h1>新規登録</h1>
    
    <form>
      名前
      <input v-model="name" type="text"><br>
      メールアドレス
      <input v-model="email" type="email"><br>
      電話番号
      <input v-model="phone" type="tel"><br>
      パスワード
      <input v-model="password" type="password"><br>
      パスワード（確認用）
      <input v-model="password_confirm" type="password"><br>
      <input v-on:click="signUp" value="submit" type="button">
    </form>
  </div>
</template>

<script>

import NavigationBar from '~/components/NavigationBar.vue'
import axios from 'axios'

const SIGN_UP_API = '/api/auth'


export default {
  components: {
    NavigationBar
  },
  data: () => {
    return {
      name: '',
      email: '',
      phone: '',
      password: '',
      password_confirm: ''
    }
  },
  methods: {
    async signUp (e) {
      try {
        var resp = await axios.post(SIGN_UP_API, {
          name: this.name,
          email: this.email,
          phone: this.phone,
          password: this.password,
          password_confirm: this.password_confirm
        })

        localStorage.access_token = resp.headers['access-token'];
        localStorage.client = resp.headers.client;
        localStorage.uid = resp.headers.uid;
        
        // TODO: ちゃんと次の場所にジャンプさせる
        location.href = '/'

      } catch (e) {
        // TODO: 
      }
    }
  }
}



</script>

<style>
/* css */
</style>
