import {Column, Entity, PrimaryGeneratedColumn} from "typeorm";

@Entity('feedbacks')
export class Feedback {
    @PrimaryGeneratedColumn('uuid')
    id! : string;

    @Column('text')
    byHR!: string;

    @Column('varchar')
    byInterviewee! : string;

    @Column('varchar')
    byInterviewer!: string;
}