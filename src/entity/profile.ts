import {Column, CreateDateColumn, DeleteDateColumn, Entity, PrimaryGeneratedColumn, UpdateDateColumn} from "typeorm";

@Entity()
export class Profile {
    @PrimaryGeneratedColumn('uuid')
    id!: string;

    @Column('varchar')
    avatar!: string;

    @Column('text')
    bio!: string;

    @CreateDateColumn({ name: 'created_at', default: () => 'current_timestamp' })
    created_at!: Date;

    @UpdateDateColumn({ name: 'updated_at', default: () => 'current_timestamp' })
    updated_at!: Date;

    @DeleteDateColumn()
    deletedDate!: Date;
}