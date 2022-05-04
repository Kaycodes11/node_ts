import {Column, Entity, JoinTable, ManyToMany, PrimaryGeneratedColumn} from "typeorm";
import {Category} from "./category";

@Entity()
export class Question {
    @PrimaryGeneratedColumn('uuid')
    id!: string

    @Column()
    title!: string

    @Column()
    text!: string

    @ManyToMany(() => Category, (category) => category.questions)
    @JoinTable()
    categories!: Category[]
}