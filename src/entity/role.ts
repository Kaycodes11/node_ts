import {Entity, PrimaryGeneratedColumn} from "typeorm";

@Entity('roles')
export class Role {
    @PrimaryGeneratedColumn("uuid")
    id!: string;
}