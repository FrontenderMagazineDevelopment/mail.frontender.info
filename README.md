# Environment variables

Copy `./.env.sample` to `./.env` end make sure all variables are set.

# Start server

```bash
npm ci
node --experimental-loader ./resolver.mjs --experimental-modules server.mjs
```
or
```
npm ci
npm start
```

# Build image

```bash
docker build ./ -t frontendermagazine/mailparser --label frontendermagazine
```
or
```bash
npm run build
```

# Publish

```bash
docker login
docker push frontendermagazine/mailparser
```
or
```bash
docker login
npm run publish
```
