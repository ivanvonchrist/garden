# Garden / The Mouth of Elsewhere

A procedural organism occupying a breach in causality. Move your pointer to fold it, click to feed it glyphs, and repeal seven laws of reality to alter its geometry, color, telemetry, and optional synthesized sound. Keyboard users can feed and mutate it using the buttons. Nothing is stored or sent. No dependencies or API keys.

## Local

Node.js 20 or newer. Run `npm run dev` and open http://127.0.0.1:3000. Run `npm run build` to generate `dist`.

## Vercel

Import `ivanvonchrist/garden`, select **Other** as the framework, use `npm run build` as the build command and `dist` as the output directory, then deploy. `vercel.json` configures these automatically. No environment variables needed. Connected pushes to main deploy automatically.

Alternatively: `npx vercel` for a preview and `npx vercel --prod` for production.

Animation is capped at 30 frames per second, stops in hidden tabs, and starts still for reduced-motion visitors. The stillness button pauses it at any time. Audio requires explicit activation. Optional Google Fonts have local fallbacks.

Iteration 3 adds a detachable time organ: scrub a bounded history of 240 states and fossilize up to seven outlines. Fossils remain only for this visit and resize with the viewport.
