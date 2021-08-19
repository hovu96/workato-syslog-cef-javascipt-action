const SyslogPro = require('syslog-pro');

exports.main = async (options) => {
    // console.log(options);
    let cef = new SyslogPro.CEF(options)
    await cef.send();
};