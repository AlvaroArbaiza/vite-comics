<script>
import { store } from '../store.js';

export default {
    name: "HeaderComp",
    data() {
        return {
            store
        };
    }
}
</script>

<template>
    <header>
        <div class="container">

            <!-- logo -->
            <div id="logo">
                <img src="/img/dc-logo.png" alt="logo dc comics">

            </div>

            <!-- nav -->
            <nav>
                <ul>
                    <li v-for="(element, index) in store.dcComics[0].links" :key="index">
                        <a href="#">
                            <span>{{ element.name }}</span>
                            <hr>
                        </a>
                    </li>
                </ul>
            </nav>
        </div>
    </header>
</template>

<style lang="scss" scoped></style>