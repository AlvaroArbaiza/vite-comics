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

                <div class="dcCard" v-for="(element, index) in store.dcCards" :key="index">
                    <div class="img">
                        <img :src="`/img/${element.url}`" :alt="element.name">
                    </div>
                    <h3>{{ element.name }}</h3>
                </div>
            </div>
        </section>
    </main>
</template>

<style lang="scss" scoped>
* {
    box-sizing: border-box;
    padding: 0;
    margin: 0;
}

.container {
    width: 80%;
    margin: 0 auto;
}

img {
    max-width: 100%;
}


main {
    width: 100%;

    #contents {
        min-height: 200px;
        background-color: #1c1c1c;
        display: flex;
        align-items: center;

        h1 {
            color: #fff;
        }
    }

    #cards {
        height: 200px;
        background-color: #0282f9;
        display: flex;
        align-items: center;

        .container {
            width: 75%;
            display: flex;
            justify-content: space-between;
            align-items: center;

            .dcCard {
                display: flex;
                align-items: center;
                flex-basis: calc(100% / 5);

                .img {
                    flex-basis: 20%;

                    img {
                        max-height: 95px;
                    }
                }

                h3 {
                    margin-left: 10px;
                    color: #fff;
                    font-weight: 400;
                    font-size: 0.8rem;
                    text-transform: uppercase;
                }

            }
        }
    }

}
</style>