const Sequelize = require("sequelize");

/*const sequelize = new Sequelize("marketplace", "root", "1995", {
  host: "localhost",
  dialect: "mariadb",
  port: 3307
});*/

const sequelize = new Sequelize('marketplace', '4z17yqevz0re5rscusi0', 'pscale_pw_TRRXfPo5h9aN4omqN3o6aOIrBnGUth72KVVFc4qiZAI',{
  host: 'aws.connect.psdb.cloud',
  dialect: 'mysql',
  dialectOptions: {
  ssl: {
  rejectUnauthorized: true,
  }
  }
  })

sequelize
  .authenticate()
  .then(() => {
    console.log("conexão bem sucedida!!");
  })
  .catch((error) => {
    console.log(error)
    console.log("falhou a conexão ai champs!");
  });

module.exports = sequelize;
