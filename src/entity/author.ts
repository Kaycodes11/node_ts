import {Column, Entity, OneToMany, PrimaryGeneratedColumn, Relation} from "typeorm";
import {Photo} from "./photo";

@Entity()
export class Author {
    @PrimaryGeneratedColumn('uuid')
    id!: string;

    @Column()
    name!: string;

//    One/single author's instace can have / belong to Many Photo[]
    @OneToMany(() => Photo, photo => photo.author)
    photos!: Photo[]
}

// -------------+--------------+----------------------------+
// |                          author                         |
// +-------------+--------------+----------------------------+
// | id          | int(11)      | PRIMARY KEY AUTO_INCREMENT |
// | name        | varchar(255) |                            |
// +-------------+--------------+----------------------------+