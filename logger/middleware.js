/**
 *
 * @param {Logger} logger - Instance of Logger
 * @param {*} req
 * @param {*} res
 * @param {*} next
 */
const log = (logger) => {
  return (req, _res, next) => {
    logger.log(`Got Request from ${req.hostname} to ${req.url}`);
    next();
  };
};

module.exports = log;
