<template>
    <div>
        <div id="tabbar">
            <p id="tabbar__title">{{title}}</p>
        </div>
    </div>
</template>

<script>
export default {
    props: ['title']
}
</script>

<style>
    #tabbar{
        background-color: yellow;
        height: 80px;
        width: 100%;
    }
    #tabbar__title{
        text-align: center;
        line-height: 80px;
    }
</style>
