import { Hono } from 'hono';
import { cors } from 'hono/cors';
import { logger } from 'hono/logger';
import { userRouter } from './routes/users';
import { skillRouter } from './routes/skills';
import { swapRouter } from './routes/swap';
import { feedbackRouter } from './routes/feedback';
import { adminRouter } from './routes/admin';

const app = new Hono();

app.use('*', cors());
app.use('*', logger());

// Route groups
app.route('/api/users', userRouter);
app.route('/api/skills', skillRouter);
app.route('/api/swap', swapRouter);
app.route('/api/feedback', feedbackRouter);
app.route('/api/admin', adminRouter);

// Root route
app.get('/', (c) => c.text('🚀 Skill Swap API is running!'));

export default app;
