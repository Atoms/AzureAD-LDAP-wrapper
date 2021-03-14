require('dotenv').config();

var config = {}

// AZURE
config.AZURE_APP_ID = process.env.AZURE_APP_ID;
config.AZURE_APP_SECRET = process.env.AZURE_APP_SECRET;
config.AZURE_TENANTID = process.env.AZURE_TENANTID;

// LDAP
config.azureDomain = process.env.LDAP_DOMAIN || "example.net";
config.baseDn = process.env.LDAP_BASEDN || "dc=example,dc=net";
config.groupDnSuffix = process.env.LDAP_GROUPSDN || "cn=groups," + config.baseDn;
config.usersDnSuffix = process.env.LDAP_USERSDN || "cn=users," + config.baseDn;
config.usersGroupDnSuffix = process.env.USERSGROUPSBASEDN || "cn=users," + config.groupDnSuffix;
config.userRdn = process.env.LDAP_USERRDN || "uid";
config.dataFile = "./data/azure.json";
config.removeDomainFromCn = process.env.LDAP_REMOVEDOMAIN || true; // set to true to remove the domain e.g. "alice@example.net" will just be "alice" for login
config.LDAP_PORT = process.env.LDAP_REMOVEDOMAIN || 389;
config.LDAP_BINDUSER = process.env.LDAP_BINDUSER;

// export
module.exports = config;