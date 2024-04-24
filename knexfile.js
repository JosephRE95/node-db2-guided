// Update with your config settings.
//this is the first step I did
/**
 * @type { Object.<string, import("knex").Knex.Config> }
 */
module.exports = {

  development: {
    client: 'sqlite3',
    connection: {
      filename: './data/produce.db3'
    },
    migrations:{
      directory:'./data/migrations'
    },
    seeds:{
      directory: './data/seeds'
    },
    useNullAsDefault: true

  },

  staging: {
  
  
  },

  production: {

  }

};
