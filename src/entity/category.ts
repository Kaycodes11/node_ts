import {Entity, PrimaryGeneratedColumn, Column, ManyToMany, JoinTable} from "typeorm";
import {Question} from "./question";

@Entity()
export class Category {
    @PrimaryGeneratedColumn('uuid')
    id!: number

    @Column()
    name!: string

    @ManyToMany(() => Question, (question) => question.categories)
    questions!: Question[]
}



