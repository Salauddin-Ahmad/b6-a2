import  express  from 'express';
import { vehicleController } from './vehicles.controller';
import auth from '../../middlewares/auth';

const router = express.Router()

router.post('/', auth('admin'),vehicleController.crateVehicle)

router.get('/', vehicleController.getallVehicle)
router.get('/:id', vehicleController.getSingleVehicle)
router.put('/:id', auth('admin'), vehicleController.updateSingleVehicle)
router.delete('/:id', auth('admin'), vehicleController.deleteSingleVehicle)


export const vehicleRoutes = router;