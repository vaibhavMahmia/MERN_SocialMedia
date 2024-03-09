import express from 'express';
import { createPost, getPosts } from '../controllers/posts.js';

const router = express.Router();

router.get('/get-posts',getPosts);
router.post('/creste-posts',createPost);

export default router;