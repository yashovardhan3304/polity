import { createRequire } from 'node:module';

const require = createRequire(import.meta.url);

// Vercel maps every /api/* request to this serverless function. Reuse the
// Express app so production and local API routes behave the same way.
export default require('../server/server.cjs');
