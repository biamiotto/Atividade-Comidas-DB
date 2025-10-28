import { Router } from "express";
import * as ComidasController from '../controllers/comidasController.js';

const router = Router();

router.get("/", ComidasController.listarTodos);
router.get("/:id", ComidasController.listarUm);
router.post("/", ComidasController.criar);
router.delete("/:id", ComidasController.deletar);
router.put("/:id", ComidasController.atualizar);

export default router;