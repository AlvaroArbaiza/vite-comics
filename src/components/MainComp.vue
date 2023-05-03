<script>
import { store } from '../store.js';

export default {
    name: "MainComp",
    data() {
        return {
            store
        };
    }
}
</script>

<template>
    <main>
        <section id="contents"></section>
        <section id="cards"></section>
    </main>
</template>

<style lang="scss" scoped>
* {
    box-sizing: border-box;
    padding: 0;
    margin: 0;
}

main {

    width: 100%;
    min-height: 200px;
    background-color: #1c1c1c;


}
</style>