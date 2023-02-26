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
            info: "Why yes, that is Nicolas Cage in Con Air. While my hair is objectively better (maybe I'm biased), it is a nice psuedonymous placeholder rather than splatter my beautiful face across the internet. I'm excited by making cool things and the intersection of strength training, speed, and endurance. This site aims to share some of the things I like doing, have done, and want to do. Built with qwik, typescript, + tailwindcss",
            heading: "Start Here"
        },
        {
            id: "01",
            info: "Bigger, Faster, Stronger was a 2008 documentary about the pervasive use of steroids in sports, particularly in bodybuilding. I have always been interested in what it takes to be faster and stronger, but at a lean body fat percentage all while completely natural. I enjoy refining methods to maximize my strength, speed, endurance, and physique while balancing work, life, and sleep at the same time. Working to be just a little bit faster and a little bit stronger each day gives me a goal to strive for every day, regardless of what else is happening in life. The happy side effects are the elevated mood, boost in productivity, and stress management I think we all could benefit from.",
            heading: "Faster, Stronger"
        },
        {
            id: "02",
            info: "Some of my favorite books include authors like Cormac McCarthy (The Road, Blood Meridian) and Tim Ferriss (4 hour body, 4 hour chef), Born to Run (of which I now have multiple copies), The Art of Doing Science and Engineering by Richard Hamming (Manhattan Project, Bell Labs), Ender's Game, Surely You're Joking, Mr. Feynman, and more.",
            heading: "Reading"
        },
        {
            id: "03",
            info: "Writing",
            heading: "Writing"
        },
        {
            id: "04",
            info: "I'm currently an active duty Army Engineer Officer and graduate of Airborne and Ranger schools. Past assignments have included being a platoon leader in the 82nd Airborne Division and Deputy Engineer at 10th Special Forces Group. Prior to that, I did electromagnetic + antenna design work for the NSA in an R+D lab. My next and final assignment is in DC. Additionally, I founded a health and fitness company called Acid Gambit in 2020, for which now I'm developing a webapp with Nextjs + Supabase.",
            heading: "Work",
        },
        {
            id: "05",
            info: "Projects",
            heading: "Projects."
        },
        {
            id: "06",
            info: "Connect",
            heading: "Connect"
        },
    ]
}