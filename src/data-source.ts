import "reflect-metadata"
import {DataSource} from "typeorm"
import {User} from "./entity/user";
import {Category} from "./entity/category";
import {Photo, PhotoMetadata} from "./entity/photo";
import {Profile} from "./entity/profile";
import {RoleEntity} from "./entity/role";
import {Author} from "./entity/author";
import {Album} from "./entity/album";
import {Question} from "./entity/question";
import {PostToCategory} from "./entity/postToCategory";
import {Post} from "./entity/post";


export const AppDataSource = new DataSource({
    type: "postgres",
    host: "localhost",
    port: 5432,
    username: "postgres",
    password: "123456",
    database: "interviewing",
    synchronize: true,
    logging: true,
    entities: [User, Category, Question, PostToCategory, Post, Photo, PhotoMetadata, Profile, RoleEntity, Author, Album],
    migrations: [],
    subscribers: [],
})


// export const MySQLDataSource : DataSource = new DataSource({
//     type: `mysql`,
//     host: `localhost`,
//     port: 3306,
//     username: "test",
//     password: "test",
//     database: "test",
//     entities: [],
// });