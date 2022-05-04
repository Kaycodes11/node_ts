import {Column, Entity, OneToMany, PrimaryGeneratedColumn} from "typeorm";
import {PostToCategory} from "./postToCategory";

@Entity()
export class Post {
    @PrimaryGeneratedColumn('uuid')
    public id!: string;

    @Column('varchar')
    public title!: string;

    @Column('text')
    public descriptions!: string;

    @OneToMany(() => PostToCategory, (postToCategory) => postToCategory.post)
    public postToCategories! : PostToCategory[]
}