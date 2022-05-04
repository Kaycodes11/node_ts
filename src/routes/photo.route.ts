import express, { Router } from 'express';
import * as Photo from "../controllers/photo.controller";
const router: Router = Router();

router.post('/photo/new', Photo.createPhotoWithMetadata);
router.get('/photos', Photo.getPhotos);

export  default router;