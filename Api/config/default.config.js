var config = {
    env: 'dev',
    db: {

        mongo: {
            MONGO_HOST: 'cluster0-shard-00-01-bngvp.mongodb.net',
            MONGO_PORT: '27017',
            MONGO_SSL: 1,
            MONGO_DATABASE: 'kast',
            MONGO_USER: 'admin',
            MONGO_PASSWORD: 'admin',
            MONGO_AUTH_SOURCE: 'admin'
        }

    },
    server: {
        host: '0.0.0.0',
        port: 3021,
        enableDebugMode: true,
    },

};

module.exports = Object.freeze(config);