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

<style lang="scss">
@use './style/main.scss' as *;
</style>
