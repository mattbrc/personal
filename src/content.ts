interface ContentStoreItem {
    id: string;
    info: string;
    heading: string;
}

interface Content {
    store: ContentStoreItem[]
}

export const content: Content = {
    store: [
        {
            id: "00",
            info: "Why yes, that is Nicolas Cage in Con Air. While my hair is objectively better (maybe I'm biased), it is a nice psuedonymous placeholder rather than splatter my beautiful face across the internet. This site aims to share some of the things I like doing, have done, will do, and want to do. Details about how this site was made can be found under 'Site Deets'.",
            heading: "Start Here"
        },
        {
            id: "01",
            info: "About me",
            heading: "About me",
        },
        {
            id: "02",
            info: "Faster, Stronger",
            heading: "Faster, Stronger"
        },
        {
            id: "03",
            info: "Reading",
            heading: "Reading"
        },
        {
            id: "04",
            info: "Writing",
            heading: "Writing"
        },
        {
            id: "05",
            info: "Work",
            heading: "Work",
        },
        {
            id: "06",
            info: "Projects",
            heading: "Projects"
        },
        {
            id: "07",
            info: "Connect",
            heading: "Connect"
        },
        {
            id: "08",
            info: "Site Deets",
            heading: "Site Deets"
        }
    ]
}