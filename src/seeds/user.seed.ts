interface UserSeed {
    id?: string;
    firstName: string;
    lastName: string;
    age: number;
    email: string;
    gender: "male" | "female" | "other"
}

export const Users: UserSeed[] = [
    { firstName: "Son", lastName: "Goku", age: 18, gender: "male", email: "goku@gmail.com" },
    { firstName: "Son", lastName: "Gohan", age: 10, gender: "male", email: "gohan@gmail.com" },
    { firstName: "Son", lastName: "Goten", age: 8, gender: "male", email: "goten@gmail.com" },
    { firstName: "Just", lastName: "Vegeta", age: 20, gender: "male", email: "vegeta@gmail.com" },
    { firstName: "Just", lastName: "Trunks", age: 9, gender: "male", email: "trunks@gmail.com" },
];