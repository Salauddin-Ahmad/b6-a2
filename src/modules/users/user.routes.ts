import  express  from 'express';
import { userController } from './user.controller';
const router = express.Router()


router.get("/", userController.getAllUser)
router.put("/:userId", userController.updateUser)
router.delete("/:userId", userController.updateUser)


export const userRoutes = router;