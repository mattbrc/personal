interface ContentStoreItem {
    id: string;
    info: string;
}

interface Content {
    store: ContentStoreItem[]
}

export const content: Content = {
    store: [
        {
            id: "00",
            info: "Why yes, that is Nicolas Cage in Con Air. While my hair is objectively better (maybe I'm biased), it is a nice psuedonymous placeholder rather than splatter my beautiful face across the internet."
        },
        {
            id: "01",
            info: "About me"
        }
    ]
}