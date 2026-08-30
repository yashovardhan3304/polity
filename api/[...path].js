import { createRequire } from 'node:module';

const require = createRequire(import.meta.url);

// Vercel routes every /api/* request to this serverless function.
// Reuse the Express application so local and deployed API behaviour matches.
export default require('../server/server.cjs');
