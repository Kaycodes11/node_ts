import express, {Handler, Request, Response, NextFunction} from "express";
import {AppDataSource} from "../data-source";
import {Photo, PhotoMetadata} from "../entity/photo";
import {Album} from "../entity/album";

const photoRepository = AppDataSource.manager.getRepository(Photo);
const photoMetadataRepository = AppDataSource.getRepository(PhotoMetadata);


export const getPhotos = async (req: Request, res: Response): Promise<void> => {
    const photos: Photo[] = await photoRepository.find();
    res.status(200).json(photos);
}

export const getPhotosWithMetadata = async (req: Request, res: Response): Promise<void> => {
    const photos: Photo[] = await photoRepository.find({relations: {metadata: true}});
    // photoRepository.createQueryBuilder('photo').innerJoinAndSelect('photo.metadata', 'metadata').getMany()
    res.status(200).json(photos);
}

export const createPhotoWithMetadata = async (req: Request, res: Response): Promise<void> => {

    // make a new photo
    const photo = new Photo()
    photo.name = "Me and Bears"
    photo.description = "I am near polar bears"
    photo.views = 1
    photo.filename = "photo-with-bears.jpg"
    photo.isPublished = true

    const metadata = new PhotoMetadata()
    metadata.height = 640
    metadata.width = 480
    metadata.compressed = true
    metadata.comment = "cybershoot"
    metadata.orientation = "portrait"
    metadata.photo = photo;

    // whichever side has cascade true like if Photo has then photo.metadata = metadata then just await photoRepository.save(photo);
    // similarly, if PhotMetadata has cascaded: true; then metadata.photo = photo; await photoMetadataRepository.save(metadata)

    await photoRepository.save(photo);
    await photoMetadataRepository.save(metadata);

    console.log(`Photo and photo metadata has been saved`);
}

export const makeAnewAlbum: Handler = async (req: Request, res: Response) => {
    // create a few albums
    const album1 = new Album()
    album1.name = "Bears"
    await AppDataSource.manager.save(album1)

    const album2 = new Album()
    album2.name = "Me"
    await AppDataSource.manager.save(album2);

    // create a new photo
    const photo = new Photo()
    photo.name = "Me and Bears"
    photo.description = "I am near polar bears"
    photo.filename = "photo-with-bears.jpg"
    photo.views = 1
    photo.isPublished = true
    photo.albums = [album1, album2]
    const saved: Photo = await AppDataSource.manager.save(photo)

    const loadedPhoto = await photoRepository.findOne({where: {id: saved.id}, relations: {albums: true}});
    console.log(loadedPhoto)

    // const photos = await AppDataSource.getRepository(Photo)
    //     .createQueryBuilder("photo") // first argument is an alias. Alias is what you are selecting - photos. You must specify it.
    //     .innerJoinAndSelect("photo.metadata", "metadata")
    //     .leftJoinAndSelect("photo.albums", "album")
    //     .where("photo.isPublished = true")
    //     .andWhere("(photo.name = :photoName OR photo.name = :bearName)")
    //     .orderBy("photo.id", "DESC")
    //     .skip(5)
    //     .take(10)
    //     .setParameters({ photoName: "My", bearName: "Mishka" })
    //     .getMany()
}