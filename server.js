import { createRequire } from 'node:module';

const require = createRequire(import.meta.url);

// Keep Express directly imported in the root entrypoint so Vercel detects this
// repository as an Express application and deploys its routes as functions.
require('express');

export default require('./server/server.cjs');
