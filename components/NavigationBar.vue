<template>
    <div>
        <div id="navigationbar">
            <p id="navigationbar__title">{{title}}</p>
        </div>
    </div>
</template>

<script>
export default {
    props: ['title']
}
</script>

<style>
    #navigationbar{
        background-color: yellow;
        height: 80px;
        width: 100%;
    }
    #navigationbar__title{
        text-align: center;
        line-height: 80px;
    }
</style>
