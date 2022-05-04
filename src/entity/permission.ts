import {Column, Entity, PrimaryGeneratedColumn} from "typeorm";

@Entity('permissions')
export class Permission {
    @PrimaryGeneratedColumn("uuid")
    id!: string;

    @Column({type: "boolean"})
    create!: boolean;

    @Column({type: "boolean"})
    read!: boolean;

    @Column({type: "boolean"})
    update!: boolean;

    @Column({type: "boolean"})
    delete!: boolean;
}