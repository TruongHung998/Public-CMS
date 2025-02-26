module.exports = ({ env }) => ({
  defaultConnection: 'default',
  connections: {
    default: {
      connector: 'bookshelf',
      settings: {
        client: 'postgres',
        host: env('DATABASE_HOST', 'postgres'),
        port: env.int('DATABASE_PORT', 5432),
        database: env('DATABASE_NAME', 'strapi_db'),
        username: env('DATABASE_USERNAME', 'strapi_user'),
        password: env('DATABASE_PASSWORD', 'password123'),
        ssl: env.bool('DATABASE_SSL', false),
      },
      options: {}
    },
  },
});
