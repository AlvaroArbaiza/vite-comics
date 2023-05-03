<script>
import HeaderComp from './components/HeaderComp.vue'
import MainComp from './components/MainComp.vue';

export default {
    name: "App",
    components: {
        HeaderComp,
        MainComp
    }
}
</script>

<template>
    <HeaderComp />
    <MainComp />
</template>

<style>
* {
    box-sizing: border-box;
    margin: 0;
    padding: 0;
    font-family: sans-serif;
}
</style>
