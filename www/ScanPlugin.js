var exec = require("cordova/exec");

exports.scan = function(success, error) {
    exec(success, error, "ScanPlugin", "scan", []);
};
