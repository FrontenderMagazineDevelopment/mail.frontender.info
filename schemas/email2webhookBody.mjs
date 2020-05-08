import schema from 'fluent-schema';

export default schema.object()
  .prop('sender', schema.string())
  .prop('size', schema.string())
  .prop('recipient', schema.string())
  .prop('content', schema.object()
    .prop('to', schema.array())
    .prop('from', schema.array())
    .prop('cc', schema.array())
    .prop('subject', schema.string())
    .prop('body', schema.string())
    .required(['to', 'from', 'cc', 'body'])
  )
  .required(['sender', 'size', 'recipient', 'content']);
