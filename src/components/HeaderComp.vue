<script>
export default {
    name: "HeaderComp",
    data() {
        return {
            dcComics: [
                {
                    id: "dc comics",
                    links: [
                        {
                            name: "Characters",
                            show: true
                        },
                        {
                            name: "Comics",
                            show: true
                        },
                        {
                            name: "Movies",
                            show: true
                        },
                        {
                            name: "TV",
                            show: true
                        },
                        {
                            name: "Games",
                            show: true
                        },
                        {
                            name: "Collectibles",
                            show: false
                        },
                        {
                            name: "Videos",
                            show: true
                        },
                        {
                            name: "Fans",
                            show: false
                        },
                        {
                            name: "News",
                            show: true
                        },
                        {
                            name: "Shop",
                            show: true
                        }
                    ]
                },
                {
                    id: "shop",
                    links: [
                        "Shop DC",
                        "Shop DC Collectibles"
                    ]
                },
                {
                    id: "dc",
                    links: [
                        "Terms Of Use",
                        "Privacy policy (New)",
                        "Ad Choices",
                        "Advertising",
                        "Jobs",
                        "Subscriptions",
                        "Talent Workshops",
                        "CPSC Certificates",
                        "Ratings",
                        "Shop Help",
                        "Contact Us"
                    ]
                },
                {
                    id: "sites",
                    links: [
                        "DC",
                        "MAD Magazine",
                        "DC Kids",
                        "DC Universe",
                        "DC Power Visa"
                    ]
                }
            ]

        };
    }
}
</script>

<template>
    <div id="header">

        <div id="logo">
            <img src="/img/dc-logo.png" alt="logo dc comics">

        </div>

        <div id="nav">
            <ul>
                <li v-for="(element, index) in dcComics[0].links" :key="index">
                    <a href="#">{{ element.name }}</a>
                </li>
            </ul>

        </div>

    </div>
</template>

<style></style>