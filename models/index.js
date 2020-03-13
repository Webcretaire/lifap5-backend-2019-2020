/**
 * @file all models and db infos are exported from this file
 * @author Romuald THION
 */

const UserDAO = require('./UserDAO');

/**
 * @todo Do not expose the pool directly (only used by server) out of this module
 */
const pool = require('./pool');

module.exports = { UserDAO, pool };
