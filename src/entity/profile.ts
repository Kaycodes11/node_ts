import {Column, CreateDateColumn, DeleteDateColumn, Entity, PrimaryGeneratedColumn, UpdateDateColumn} from "typeorm";

@Entity()
export class Profile {
    @PrimaryGeneratedColumn('uuid')
    id!: string;

    @Column('varchar')
    avatar!: string;

    @Column('text')
    bio!: string;

    @CreateDateColumn({ name: 'createdDate', default: () => 'current_timestamp' })
    createdDate!: Date;

    @UpdateDateColumn({ name: 'updatedDate', default: () => 'current_timestamp' })
    updatedDate!: Date;

    @DeleteDateColumn()
    deletedDate!: Date;
}