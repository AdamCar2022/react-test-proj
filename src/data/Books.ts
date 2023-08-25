export type BookProps = {
    id: number;
    title: string;
    author: string;
    coverImage: string;
    progress: number;
    isReading: boolean;
    handleComplete?: (id: number) => void;
};

export const Books: BookProps[] = [
    {
        id: 1,
        title: "Nineteen Eighty-Four",
        author: "George Orwell",
        coverImage: "/nineteen-eighty-four.jpeg",
        progress: 0,
        isReading: false
    },
    {
        id: 2,
        title: "Masonry: Beyoud the Light",
        author: "William Schnoebelen",
        coverImage: "/masonry.jpeg",
        progress: 0,
        isReading: false
    },
    {
        id: 3,
        title: "Experiments with Alternate Currents of High Potential and High Frequency",
        author: "Nikola Tesla",
        coverImage: "/nikolatesla1.png",
        progress: 0,
        isReading: false
    },
    {
        id: 4,
        title: "Phoenix: Fascism in our time",
        author: "A. James Gregor",
        coverImage: "/phoenix.jpeg",
        progress: 0,
        isReading: false
    },
    {
        id: 5,
        title: "United States v. G. W. Bush et al.",
        author: "Elizabeth De La Vega",
        coverImage: "/usageorge.jpeg",
        progress: 0,
        isReading: false
    },
    {
        id: 6,
        title: "Sarai's Stripes",
        author: "Carli Urena",
        coverImage: "/sarais-stripes.jpeg",
        progress: 0,
        isReading: false
    },
    {
        id: 7,
        title: "Will Northaway & the Gathering Storm",
        author: "Susan Olasky",
        coverImage: "/will-northaway.jpeg",
        progress: 0,
        isReading: false
    },
    {
        id: 8,
        title: "Charlie Gehringer: A Biography of the Hall of Fame Tigers Second Baseman",
        author: "John C. Skipper",
        coverImage: "/charlie-gehringer.jpeg",
        progress: 0,
        isReading: false
    },
    {
        id: 9,
        title: "Crazy Town: Money. Marriage. Meth.",
        author: "Sterling R. Braswell",
        coverImage: "/crazy-town.jpeg",
        progress: 0,
        isReading: false
    },
    {
        id: 10,
        title: "I Had to Say Something: The Art of Ted Haggard's Fall",
        author: "Mike Jones",
        coverImage: "/something-to-say.jpeg",
        progress: 75,
        isReading: true
    }
];