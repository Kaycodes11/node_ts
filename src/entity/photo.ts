import {Column, Entity, JoinColumn, ManyToMany, ManyToOne, OneToOne, PrimaryGeneratedColumn, Relation} from "typeorm";
import {Author} from "./author";
import {Album} from "./album";

@Entity()
export class Photo {
    @PrimaryGeneratedColumn('uuid')
    id!: string;

    // @Column('text')
    // avatar!: string

    @Column('varchar')
    name!: string

    @Column('text')
    description!: string

    @Column()
    views!: number

    @Column('varchar')
    filename!: string;

    @Column('boolean')
    isPublished!: boolean

    @OneToOne(() => PhotoMetadata, (photoMetadata) => photoMetadata.photo)
    metadata!: Relation<PhotoMetadata>;

    // Many instance of Photo has single instance of Author
    @ManyToOne(() => Author, (author) => author.photos)
    author!: Author;

    // Many instance of Photo[] has Many instance of Album[]
    @ManyToMany(() => Album, (album) => album.photos)
    albums! : Album[]
}

@Entity()
export class PhotoMetadata {
    @PrimaryGeneratedColumn('uuid')
    id!: string;


    @Column("int")
    height!: number

    @Column("int")
    width!: number

    @Column()
    orientation!: string

    @Column()
    compressed!: boolean

    @Column()
    comment!: string

    @OneToOne(() => Photo)
    @JoinColumn()
    photo!: Relation<Photo>
}

// photo_metadata                      |
// +-------------+--------------+----------------------------+
// | id          | int(11)      | PRIMARY KEY AUTO_INCREMENT |
// | height      | int(11)      |                            |
// | width       | int(11)      |                            |
// | comment     | varchar(255) |                            |
// | compressed  | boolean      |                            |
// | orientation | varchar(255) |                            |
// | photoId     | int(11)      | FOREIGN KEY
// | authorId    | int(11)      | FOREIGN KEY