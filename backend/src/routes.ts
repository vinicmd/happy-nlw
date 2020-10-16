import { Router } from 'express';
import multer from 'multer'

import uploadConfig from './config/upload'
import OrphanagesControler from './controllers/OrphanagesControlers'


const routes = Router();
const upload = multer(uploadConfig);

routes.get('/orphanages', OrphanagesControler.index);
routes.get('/orphanages/:id', OrphanagesControler.show);
routes.post('/orphanage', upload.array('images'), OrphanagesControler.create);



export default routes;