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

                <!-- right -->
                <div id="dc-logo"></div>
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
                    <div id="follow-us">
                        <span>follow us</span>
                    </div>

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
                flex-basis: 40%;
                display: flex;
                flex-direction: column;
                flex-wrap: wrap;

                .lists {
                    width: calc(100% /3);
                    margin-bottom: 10px;

                    h3 {
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
                                font-size: 0.8rem;
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

    // sign and socials
    #sign-socials {
        height: 150px;
        background-color: #303030;

        .container {
            height: 100%;
            display: flex;
            justify-content: space-between;
            align-items: center;

            // sign-up
            #sign-up {
                padding: 1rem;
                cursor: pointer;
                border: 2px solid #0282f9;
                transition: all 0.2s linear;

                a {
                    color: #fff;
                    text-decoration: none;
                    text-transform: uppercase;
                    font-weight: 600;
                }

                &:hover {
                    background-color: #0282f9;
                }
            }

            // socials
            #socials {
                display: flex;
                justify-content: space-between;
                align-items: center;

                #follow-us {
                    font-size: 1.4rem;
                    text-transform: uppercase;
                    font-weight: 600;
                    color: #0282f9;
                }

                #icons {
                    display: flex;
                    justify-content: space-between;
                    gap: 1rem;
                    margin-left: 2rem;

                    a {

                        &:hover {
                            filter: brightness(2.5);
                        }
                    }
                }
            }
        }
    }
}
</style>