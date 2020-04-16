import { Router } from 'express';
import multer from 'multer';
import multerConfig from './config/multer';

import UserController from './app/controllers/UserController';
import RecipientsController from './app/controllers/RecipientsController';
import SessionController from './app/controllers/SessionControler';
import authMiddleware from './app/middlewares/auth';
import FileController from './app/controllers/FileController';
import DeliverymanController from './app/controllers/DeliverymanController';
import PackageController from './app/controllers/PackageController';
import NotificationController from './app/controllers/NotificationController';
import DeliveriesController from './app/controllers/DeliveriesController';
import EndDateController from './app/controllers/EndDateController';
import StartDateController from './app/controllers/StartDateController';
import DeliveryProblemsController from './app/controllers/DeliveryProblemsController';

// Create routes how Router to call the methods
const routes = new Router();

routes.post('/users', UserController.store);
routes.post('/session', SessionController.store);

routes.use(authMiddleware);

routes.post('/recipients', RecipientsController.store);
routes.put('/users', UserController.update);

const upload = multer(multerConfig);

routes.post('/files', upload.single('file'), FileController.store);

routes.post('/deliveryman', DeliverymanController.store);
routes.get('/deliveryman', DeliverymanController.index);
routes.put('/deliveryman', DeliverymanController.update);
routes.delete('/deliveryman/:id', DeliverymanController.delete);

routes.post('/deliveryman/:id/package', PackageController.store);
routes.delete('/deliveryman/:id/package/:package_id', PackageController.delete);
routes.get('/deliveryman/:id/package', PackageController.index);
routes.get('/deliveryman/:id/notifications', NotificationController.index);
routes.put(
  '/deliveryman/:id/notifications/:notification_id',
  NotificationController.update
);
routes.get('/deliveryman/:id/deliveries', DeliveriesController.index);
routes.put(
  '/deliveryman/:id/package/:package_id/end_date',
  EndDateController.update
);
routes.put(
  '/deliveryman/:id/package/:package_id/start_date',
  StartDateController.update
);

routes.post('/package/:package_id/problems', DeliveryProblemsController.store);
routes.get('/package/problems', DeliveryProblemsController.index);
routes.delete(
  '/problem/:package_id/cancel-delivery',
  DeliveryProblemsController.delete
);

export default routes;
