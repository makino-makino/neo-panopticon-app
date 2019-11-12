<template>
<!-- html -->
    <div>
        <navigationBar title="settings" />
        <h2>tests</h2>
        <p>e-mail: <input type="text" v-model="email"></p>
        <p>pass: <input type="text" v-model="password"></p>
        <button v-on:click="submitEmail">送信する</button>
    </div>
</template>

<script>
// javascript
import NavigationBar from '~/components/NavigationBar.vue'

export default {
components: {
    NavigationBar
},
data() {
    return {
        email: "",
        password: ""
    }
},
methods: {
    submitEmail: function (event){
        alert(this.email)
        alert(this.password)
    }
}
}
</script>

<style>
/* css */
</style>
