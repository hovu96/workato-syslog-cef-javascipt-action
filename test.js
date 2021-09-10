const action = require("./index.js").main;

const input = {
    // https://github.com/cyamato/SyslogPro/blob/master/docs/api.md#syslogprocef
    deviceVendor: 'deviceVendor',
    deviceProduct: 'deviceProduct',
    deviceVersion: 'deviceVersion',
    deviceEventClassId: 'deviceEventClassId',
    name: 'name',
    severity: 'severity',
    extensions: {},
    server: {
        // https://github.com/cyamato/SyslogPro/blob/master/docs/api.md#module_SyslogPro..Syslog
        target: 'syslog-server.com',
        protocol: "tcp",
        port: 514,
    }
};

function panic(error) {
    console.error(error);
    process.exit(1);
}

action(input).catch(panic).finally(clearInterval.bind(null, setInterval(a => a, 1E9)));
