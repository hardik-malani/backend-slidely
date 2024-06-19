import { Router } from 'express';
import { ping, submit, read, deleteSubmission, edit } from '../controllers/formController';

const router = Router();

router.get('/ping', ping);
router.post('/submit', submit);
router.get('/read', read);
router.delete('/delete', deleteSubmission);
router.put('/edit', edit);

export default router;
