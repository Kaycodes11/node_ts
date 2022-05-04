import {
    Entity,
    PrimaryGeneratedColumn,
    Column,
    ManyToMany,
    JoinTable,
} from "typeorm"
import {Photo} from "./photo";

@Entity()
export class Album {
    @PrimaryGeneratedColumn("uuid")
    id!: string;

    @Column()
    name!: string

    // Many instance of Album[] has Many instance of Photo[]
    @ManyToMany(() => Photo, (photo) => photo.albums)
    @JoinTable()
    photos!: Photo[]
}