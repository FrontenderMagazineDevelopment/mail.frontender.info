import { fileURLToPath } from 'url';
import { dirname, resolve } from 'path';
import fastify from 'fastify';
import dotenv from 'dotenv';
import shutdown from 'fastify-graceful-shutdown';
import multipart from 'fastify-multipart';
import healthcheck from 'fastify-healthcheck';
import email2webhookQuery from '@schemas/email2webhookQuery';
import email2webhookBody from '@schemas/email2webhookBody';
import clickAllLinks from '@utils/clickAllLinks';

const __filename = fileURLToPath(import.meta.url);
const __dirname = dirname(__filename);


dotenv.config();

const { FORWARDED_EMAIL, PORT = 3000 } = process.env
const server = fastify({ logger: true });
server.register(shutdown);
server.register(multipart, {
  addToBody: true,
});
server.register(healthcheck, {
  healthcheckUrl: '/'
});

server.post('/', { 
  schema: {
    body: email2webhookBody,
    query: email2webhookQuery
  }
 }, async (request, reply) => {
  reply.code(204).send("");

  let from = request.body.content.from[0].address
  const text = request.body.content.body;
  const subject = request.body.content.subject;

  // console.log('from: ', from);
  // console.log('subject: ', subject);
  // console.log(JSON.stringify(request.body));

  if (from === FORWARDED_EMAIL) {
    const isForwarded = text.includes('---------- Forwarded message ---------')
    const fromMatch = text.match(/---------- Forwarded message ---------\nFrom:[^/<]+<([^>]+)/i);
    from = fromMatch && fromMatch.length > 1 ? fromMatch[1] : from;
    console.log('from updated to: ', from);
  }

  const isConfirmation = subject.includes('Confirm');
  if (isConfirmation) {
    await clickAllLinks(text);
    return;
  }

  let plugin;

  try {
    const module = await import(`@plugins/${from}/index.mjs`);
    plugin = module.default;
  } catch (error) {
    console.log(`Plugin ${from} not found`);
    return;
  }
  
  const links = await plugin(request.body.content.body);

  console.log(links);
});

const startServer = async () => {
  try {
    await server.listen(PORT, '0.0.0.0');
  } catch (error) {
    server.log.error(error);
    process.exit(1);
  }
}

(async () => {
  await startServer();
})();
