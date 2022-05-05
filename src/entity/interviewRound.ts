import {Entity, ManyToOne, OneToMany, PrimaryGeneratedColumn} from "typeorm";
import {Post} from "./post";
import {Interview} from "./interview";
import {Schedule} from "./schedule";
import {PostToCategory} from "./postToCategory";
import {Category} from "./category";

@Entity()
export class InterviewRound {
    @PrimaryGeneratedColumn('uuid')
    id!: string;

    @ManyToOne(() => Interview, (interview) => interview.interviewRounds)
    interview!: Interview

    @ManyToOne(() => Schedule, (schedule) => schedule.interviewRounds)
    schedule!: Schedule


}