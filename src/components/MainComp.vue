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
        <!-- contents -->
        <section id="contents">
            <div class="container">

                <h1> &#45;&#45;&#62; Contents goes here &#60;&#45;&#45; </h1>
            </div>
        </section>

        <!-- cards -->
        <section id="cards">
            <div class="container">

                <!-- card -->
                <div class="dcCard" v-for="(element, index) in store.dcCards" :key="index">

                    <!-- img -->
                    <div class="img">
                        <img :src="`/img/${element.url}`" :alt="element.name">
                    </div>
                    <h3>{{ element.name }}</h3>
                </div>
            </div>
        </section>
    </main>
</template>

<style lang="scss" scoped></style>