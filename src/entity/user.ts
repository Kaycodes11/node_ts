import {Entity, PrimaryGeneratedColumn, Column} from "typeorm"

export type GenderType = "Male" | "Female" | "Others" | "Not_Provided";

@Entity('users')
export class User {
    @PrimaryGeneratedColumn("uuid")
    id!: string;

    @Column()
    firstName!: string

    @Column()
    lastName!: string;

    @Column({unique: true})
    email!: string;

    @Column()
    age!: number;

    @Column({type: 'enum', enum: ['Male', 'Female', 'Others', 'Not_Provided'], default: 'Not_Provided'})
    gender!: GenderType
}