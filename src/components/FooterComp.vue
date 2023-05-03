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
                        <h4>{{ element.id }}</h4>
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

                <!-- right -->
                <div id="dc-logo"></div>
            </div>
        </section>

        <!-- sign and socials -->
        <section id="socials">

            <div class="container">

                <!-- left -->
                <div></div>

                <!-- right -->
                <div></div>
            </div>
        </section>
    </footer>
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

footer {
    width: 100%;

    // links
    #links {
        height: 400px;
        background: url("/img/footer-bg.jpg");
        background-repeat: no-repeat;
        background-size: cover;

        .container {
            display: flex;
            justify-content: space-between;
            align-items: center;
            height: 100%;

            // left
            .left {
                height: 80%;
                flex-basis: 35%;
                display: flex;
                flex-direction: column;
                flex-wrap: wrap;

                .lists {
                    width: calc(100% /3);
                    margin-bottom: 10px;

                    h4 {
                        margin: 0.5rem 0;
                        text-transform: uppercase;
                        color: #fff;
                    }

                    ul {
                        li {
                            list-style-type: none;
                            padding: 0.1rem 0;
                            font-weight: 400;

                            a {
                                text-decoration: none;
                                font-size: 0.7rem;
                                color: #ababab;

                                &:hover {
                                    color: #fff
                                }
                            }
                        }
                    }
                }
            }

            // right
            #dc-logo {
                height: 100%;
                flex-basis: 50%;
                background: url("/img/dc-logo-bg.png");
                background-repeat: no-repeat;
                background-size: cover;
                background-position: center;
            }
        }

    }
}
</style>