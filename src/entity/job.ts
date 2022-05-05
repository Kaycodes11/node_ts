import {Column, Entity, PrimaryGeneratedColumn} from "typeorm";

@Entity('jobs')
export class Job {
    @PrimaryGeneratedColumn('uuid')
    id! : string;

    @Column('varchar')
    title!: string;

    @Column('text')
    description!: string;

    @Column('simple-array')
    skills!: string[];

    @Column()
    experience!: number;
}