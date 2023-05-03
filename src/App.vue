<script>
import HeaderComp from './components/HeaderComp.vue'
import MainComp from './components/MainComp.vue';
import FooterComp from './components/FooterComp.vue';

export default {
    name: "App",
    components: {
        HeaderComp,
        MainComp,
        FooterComp
    }
}
</script>

<template>
    <HeaderComp />
    <MainComp />
    <FooterComp />
</template>

<style>
* {
    box-sizing: border-box;
    margin: 0;
    padding: 0;
    font-family: sans-serif;
}
</style>
