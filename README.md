# Environment variables

Copy `./.env.sample` to `./.env` end make sure all variables are set.

# Start server

```javascript
npm ci
node --experimental-loader ./resolver.mjs --experimental-modules server.mjs
```

# Build image

```bash
docker build ./ -t frontendermagazine/mailparser --label frontendermagazine
```

# Publish

```bash
docker login
docker push frontendermagazine/mailparser
```
