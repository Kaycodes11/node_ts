import {CreateDateColumn, Entity, ManyToOne, OneToMany, PrimaryGeneratedColumn} from "typeorm";
import {InterviewRound} from "./interviewRound";
import {PostToCategory} from "./postToCategory";

@Entity()
export class Schedule {
    @PrimaryGeneratedColumn('uuid')
    id! : string;

    @OneToMany(() => InterviewRound, (interviewRound) => interviewRound.schedule)
    public interviewRounds!: InterviewRound[];

    @CreateDateColumn({ name: 'createdDate', default: () => 'current_timestamp' })
    scheduledDateTime!: Date
}



