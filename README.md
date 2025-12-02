# Car Road static site

This repository hosts the multilingual Car Road landing page. A small Express server is provided so you can run the site locally or from the bundled `dist` output.

## Development
1. Install dependencies:
   ```bash
   npm install
   ```
2. Start the local server (defaults to http://localhost:4173):
   ```bash
   npm run dev
   ```

## Production build
Create a bundled server and copy the static HTML:
```bash
npm run build
```
The build output lives in `dist/`. Run it with:
```bash
npm start
```

The server will serve `index.html` from the built assets when available, falling back to the project root during development.
