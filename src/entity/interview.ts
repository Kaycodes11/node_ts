import {Entity, JoinColumn, OneToMany, OneToOne, PrimaryGeneratedColumn, Relation} from "typeorm";
import {Job} from "./job";
import {Photo} from "./photo";
import {PostToCategory} from "./postToCategory";
import {InterviewRound} from "./interviewRound";

@Entity('interviews')
export class Interview {
    @PrimaryGeneratedColumn('uuid')
    id! : string;

    // @OneToOne(() => Interviewer)
    // @JoinColumn()
    // interviewer!: Relation<Job>

    // @OneToOne(() => Interviewee)
    // @JoinColumn()
    // interviewee!: Relation<Interviewee>

    // @OneToMany(() => Schedule)
    // @JoinColumn()
    // schedules!: Schedule[]


    @OneToOne(() => Job)
    @JoinColumn()
    job!: Relation<Job>

    @OneToMany(() => InterviewRound, (interviewRound) => interviewRound.interview)
    public interviewRounds! : InterviewRound[]
}