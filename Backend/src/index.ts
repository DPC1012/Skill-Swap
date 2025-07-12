import { Hono } from 'hono';
import { cors } from 'hono/cors';
import { logger } from 'hono/logger';
import { userRoutes } from './routes/users';
import { skillRoutes } from './routes/skills';
import { swapRoutes } from './routes/swap';
import { feedbackRoutes } from './routes/feedback';
import { adminRoutes } from './routes/admin';

const app = new Hono();

app.use('*', cors());
app.use('*', logger());

// Route groups
app.route('/api/users', userRoutes);
app.route('/api/skills', skillRoutes);
app.route('/api/swap', swapRoutes);
app.route('/api/feedback', feedbackRoutes);
app.route('/api/admin', adminRoutes);

// Root route
app.get('/', (c) => c.text('🚀 Skill Swap API is running!'));

export default app;
