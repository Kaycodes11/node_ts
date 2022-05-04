import express, {Handler, Request, Response, NextFunction} from "express";
import {AppDataSource} from "../data-source";
import {Photo, PhotoMetadata} from "../entity/photo";

const photoRepository = AppDataSource.manager.getRepository(Photo);
const photoMetadataRepository = AppDataSource.getRepository(PhotoMetadata);


export const getPhotos = async (req: Request, res: Response): Promise<void> => {
    const photos: Photo[] = await photoRepository.find();
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

    await photoRepository.save(photo);
    await photoMetadataRepository.save(metadata);

    console.log(`Photo and photo metadata has been saved`);
}