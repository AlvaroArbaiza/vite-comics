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
})