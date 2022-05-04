import { Entity, PrimaryGeneratedColumn, Column } from "typeorm"

// enum Gender {
//     MALE= "MALE",
//     FEMALE = "FEMALE",
//     OTHERS = "MALE",
//     NOT_PROVIDED = 'NOT_PROVIDED'
// }

@Entity('users')
export class User {
    @PrimaryGeneratedColumn("uuid")
    id!: string;

    @Column()
    firstName!: string

    @Column()
    lastName!: string;

    @Column()
    age!: number;

    // @Column({type: "enum", enum: Gender, default: Gender.NOT_PROVIDED })
    // gender!: Gender
}