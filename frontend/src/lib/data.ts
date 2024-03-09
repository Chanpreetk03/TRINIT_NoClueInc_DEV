type Teacher = {
    id: string
    name: string
    languages: string[]
    experience: number
    price: number
}

export const teachers: Teacher[] = [
    {
        id: "1",
        name: "John Doe",
        languages: ["English", "Spanish"],
        experience: 5,
        price: 20,
    },
    {
        id: "2",
        name: "Jane Doe",
        languages: ["English", "French"],
        experience: 3,
        price: 15,
    },
    {
        id: "3",
        name: "Jack Smith",
        languages: ["English", "Spanish", "French"],
        experience: 7,
        price: 25,
    },
    {
        id: "4",
        name: "Jill Smith",
        languages: ["English", "Spanish", "French", "German"],
        experience: 10,
        price: 30,
    }
]
