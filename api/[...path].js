import { createRequire } from 'node:module';

const require = createRequire(import.meta.url);

// Send every /api/* request to the Express application when deployed on Vercel.
export default require('../server/server.cjs');
