import { reactive } from 'vue'

export const store = reactive({

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
                {
                    name: "Shop DC",
                    show: true
                },
                {
                    name: "Shop DC Collectibles",
                    show: true
                }
            ]
        },
        {
            id: "dc",
            links: [
                {
                    name: "Terms Of Use",
                    show: true
                },
                {
                    name: "Privacy policy (New)",
                    show: true
                },
                {
                    name: "Ad Choices",
                    show: true
                },
                {
                    name: "Advertising",
                    show: true
                },
                {
                    name: "Jobs",
                    show: true
                },
                {
                    name: "Subscriptions",
                    show: true
                },
                {
                    name: "Talent Workshops",
                    show: true
                },
                {
                    name: "CPSC Certificates",
                    show: true
                },
                {
                    name: "Ratings",
                    show: true
                },
                {
                    name: "Shop Help",
                    show: true
                },
                {
                    name: "Contact Us",
                    show: true
                }
            ]
        },
        {
            id: "sites",
            links: [
                {
                    name: "DC",
                    show: true
                },
                {
                    name: "MAD Magazine",
                    show: true
                },
                {
                    name: "DC Kids",
                    show: true
                },
                {
                    name: "DC Universe",
                    show: true
                },
                {
                    name: "DC Power Visa",
                    show: true
                }
            ]
        }
    ],
    dcCards: [
        {
            name: "digital comics",
            url: "buy-comics-digital-comics.png"
        },
        {
            name: "dc merchandise",
            url: "buy-comics-merchandise.png"
        },
        {
            name: "subscription",
            url: "buy-comics-subscriptions.png"
        },
        {
            name: "comic shop locator",
            url: "buy-comics-shop-locator.png"
        },
        {
            name: "dc power visa",
            url: "buy-dc-power-visa.svg"
        }
    ],
    dcSocials: [
        {
            name: "digital comics",
            url: "footer-facebook.png"
        },
        {
            name: "dc merchandise",
            url: "footer-twitter.png"
        },
        {
            name: "subscription",
            url: "footer-youtube.png"
        },
        {
            name: "comic shop locator",
            url: "footer-pinterest.png"
        },
        {
            name: "dc power visa",
            url: "footer-periscope.png"
        }

    ],

    idcComics: 0,
    ind() {
        // this.index

        this.dcComics.forEach((element, index) => {

            this.idcComics = index;
        })
    }
})