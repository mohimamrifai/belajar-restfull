import express from "express";
import {getResep, saveResep, updateResep, getResepById, deleteResep} from '../controllers/resepController.js'
const router = express.Router();


router.get('/', getResep);
router.get('/:id', getResepById);
router.post('/', saveResep);
router.patch('/:id', updateResep)
router.delete('/:id', deleteResep);


export default router;