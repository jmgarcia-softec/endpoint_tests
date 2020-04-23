let CONFIG = {
    env: process.env.ENV || "development"
};


console.log(CONFIG.env);
if (CONFIG.env === "local") {
    CONFIG.username = process.env.DB_USERNAME || "root";
    CONFIG.password = process.env.DB_PASSWORD || "plas";
    CONFIG.database = process.env.DB_NAME || "Tests";//
    CONFIG.host =
        process.env.DB_HOST || "localhost";
    CONFIG.db_port = process.env.DB_PORT || "3306";
    CONFIG.dialect = process.env.DB_DIALECT || "mysql";
    CONFIG.operatosAliases = process.env.operatosAliases || false;
}
if (CONFIG.env === "development") {
    CONFIG.username = process.env.DB_USERNAME || "admin";
    CONFIG.password = process.env.DB_PASSWORD || "FjWK5vNDE8m3mRd";
    CONFIG.database = process.env.DB_NAME || "ipnow";//
    CONFIG.host =
        process.env.DB_HOST || "ipnow.cqjy8md4xrgg.us-west-2.rds.amazonaws.com";
    CONFIG.db_port = process.env.DB_PORT || "3306";
    CONFIG.dialect = process.env.DB_DIALECT || "mysql";
    CONFIG.operatosAliases = process.env.operatosAliases || false;
}
// if (CONFIG.env === "test") {
//     CONFIG.username = process.env.DB_USERNAME || "root";
//     CONFIG.password = process.env.PASSWORD || "plas";
//     CONFIG.database = process.env.DATABASE || "Tests";
//     CONFIG.host =
//         process.env.HOST || "localhost";
//     CONFIG.db_port = process.env.DB_PORT || "3306";
//     CONFIG.dialect = process.env.DIALECT || "mysql";
//     CONFIG.operatosAliases = process.env.operatosAliases || false;
// }

module.exports = CONFIG;