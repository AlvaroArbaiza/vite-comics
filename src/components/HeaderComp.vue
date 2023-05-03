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
        <div id="container">

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

<style lang="scss" scoped>
* {
    box-sizing: border-box;
    padding: 0;
    margin: 0;
}

header {
    width: 100%;

    #container {
        width: 80%;
        height: 100px;
        margin: 0 auto;
        display: flex;
        justify-content: space-between;
        align-items: center;

        // logo
        #logo {
            height: 80%;

            img {
                max-height: 100%;
            }
        }

        // nav
        nav {

            height: 100%;

            ul {
                height: 100%;
                display: flex;
                justify-content: space-between;

                li {
                    height: 100%;
                    list-style-type: none;
                    padding: 0 10px;
                    cursor: pointer;

                    a {
                        height: 100%;
                        display: flex;
                        align-items: center;
                        position: relative;
                        text-decoration: none;
                        text-transform: uppercase;
                        font-size: 0.8rem;
                        font-weight: 600;
                        color: #000;
                        transition: all 0.3s linear;

                        hr {
                            position: absolute;
                            width: 100%;
                            border: 3px solid #fff;
                            bottom: 0;
                            left: 0;
                            transition: all 0.3s linear;
                        }

                        &:hover hr {
                            border: 3px solid #0282f9;
                        }

                        &:hover {
                            color: #0282f9;
                        }
                    }

                }

            }
        }
    }
}
</style>