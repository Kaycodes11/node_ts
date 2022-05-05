import {Entity, PrimaryGeneratedColumn, Column, ManyToMany, JoinTable, OneToMany} from "typeorm";
import {Question} from "./question";
import {PostToCategory} from "./postToCategory";

@Entity()
export class Category {
    @PrimaryGeneratedColumn('uuid')
    id!: string;

    @Column()
    name!: string

    @ManyToMany(() => Question, (question) => question.categories)
    questions!: Question[]

    @OneToMany(() => PostToCategory, (postToCategory) => postToCategory.category)
    public postToCategories!: PostToCategory[]

}



