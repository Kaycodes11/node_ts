import "reflect-metadata"
import { DataSource } from "typeorm"
import {User} from "./entity/user";
import {Category} from "./entity/category";
import {Photo, PhotoMetadata} from "./entity/photo";
import {Profile} from "./entity/profile";
import {RoleEntity, Roles} from "./entity/role";



export const AppDataSource = new DataSource({
    type: "postgres",
    host: "localhost",
    port: 5432,
    username: "postgres",
    password: "123456",
    database: "interviewing",
    synchronize: true,
    logging: true,
    entities: [User, Category, Photo, PhotoMetadata, Profile, RoleEntity],
    migrations: [],
    subscribers: [],
})
