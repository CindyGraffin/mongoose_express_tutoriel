import { Router } from "express";
import { userController } from "../controllers/user.controller";

const router: Router = Router()
const controller = userController;

router.get('', controller.findAll);
router.post('', controller.createOne);
router.patch('/:id', controller.updateOne);
router.put('/:id', controller.replaceOne);
router.delete('/:id', controller.deleteOne);

export default router; 