import {Column, Entity, PrimaryGeneratedColumn} from "typeorm";
import {GenderType} from "./user";

export type RolesType = "Guest" | "HR" | "Interviewer" | "Interviewee";

export enum Roles  {
    Guest = `Guest`,
    HR = `HR`,
    Interviewee = `Interviewee`,
    Interviewer = `Interviewer`

}

@Entity('roles')
export class RoleEntity {
    @PrimaryGeneratedColumn("uuid")
    id!: string;

    @Column({type: 'enum', enum: Roles, default: Roles.Guest, unique: true})
    title!: Roles
}