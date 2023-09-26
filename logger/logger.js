class Logger {
  namespace;

  /**
   *
   * @param {string} namespace - The Namespace to use for logging
   */
  constructor(namespace) {
    this.namespace = namespace;
  }

  /**
   *
   * @param {string} message - Message to log
   * @param {('DEBUG'|'INFO'|'WARN'|'ERROR')} level - Log-Level
   */
  log(message, level = "INFO") {
    const msg = `${this.generateTimestamp()} ${this.namespace} : ${message}`;
    switch (level) {
      case "DEBUG":
        console.debug(msg);
        break;
      case "INFO":
        console.info(msg);
        break;
      case "WARN":
        console.warn(msg);
        break;
      case "ERROR":
        console.error(msg);
        break;
    }
  }

  generateTimestamp() {
    const date = new Date();
    return `${date.getHours()}:${date.getMinutes()}:${date.getSeconds()}.${date.getMilliseconds()}`;
  }
}

module.exports = Logger;
