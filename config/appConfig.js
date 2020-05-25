let appConfig = {};

appConfig.port = 3000;
appConfig.allowCoreOrigin = "*";
appConfig.env = "dev";
appConfig.db = {
   uri : "mongodb://localhost:27017/ChatAppDB"
};
appConfig.apiVersion = "/api/v1";


module.exports = {

port: appConfig.port,
allowCoreOrigin:appConfig.allowCoreOrigin,
env:appConfig.env,
db:appConfig.db,
apiVersion:appConfig.apiVersion

} // end of module exports