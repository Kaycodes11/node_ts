import {Column, Entity, JoinColumn, ManyToOne, OneToOne, PrimaryGeneratedColumn} from "typeorm";

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
    photo!: Photo
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