import schema from 'fluent-schema';
import dotenv from 'dotenv';
dotenv.config();

const { EMAIL2WEBHOOK_TOKEN } = process.env;

export default schema.object().prop('token', schema.const(EMAIL2WEBHOOK_TOKEN)).required(['token']);
