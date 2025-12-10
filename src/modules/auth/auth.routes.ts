import  express  from 'express';
import { authController } from './auth.controller';
import { vehicleController } from '../vehicles/vehicles.controller';
// import auth from '../../middlewares/auth';
const router = express.Router()

router.post('/signup', authController.createUser)
router.post('/signin', authController.loginUser)



export const authRoutes = router;