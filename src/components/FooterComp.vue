<script>
import { store } from '../store.js';

export default {
    name: "FooterComp",
    data() {
        return {
            store
        };
    }
}
</script>

<template>
    <footer>

        <!-- links -->
        <section id="links">

            <div class="container">

                <!-- left -->
                <div class="left">
                    <div class="lists" v-for="(element, index) in store.dcComics">
                        <h3>{{ element.id }}</h3>
                        <ul>
                            <li v-for="(elm, i) in element.links">
                                <a v-if="elm.show == true" href="#">
                                    <span>
                                        {{ elm.name }}
                                    </span>
                                </a>
                            </li>
                        </ul>
                    </div>
                </div>
            </div>
        </section>

        <!-- sign and socials -->
        <section id="sign-socials">

            <div class="container">

                <!-- sign-up -->
                <div id="sign-up">
                    <a href="#">sign-up now!</a>
                </div>

                <!-- socials -->
                <div id="socials">

                    <!-- follow us -->
                    <div id="follow-us">
                        <span>follow us</span>
                    </div>

                    <!-- icons -->
                    <div id="icons">
                        <a href="#" v-for="(element, index) in store.dcSocials" :key="index">
                            <img :src="`/img/${element.url}`" :alt="element.name">
                        </a>
                    </div>
                </div>
            </div>
        </section>
    </footer>
</template>

<style lang="scss" scoped></style>