import {Column, Entity, PrimaryGeneratedColumn} from "typeorm";

export enum Rounds {
    THEORY = 'THEORY',
    MACHINE = 'MACHINE',
    NOT_APPLICABLE = 'NOT_APPLICABLE'
}

@Entity('rounds')
export class Round {
    @PrimaryGeneratedColumn('uuid')
    id!: string;

    @Column("enum", {enum: Rounds, default: Rounds.NOT_APPLICABLE})
    title!: Rounds
}