/*! 
 * Copyright(c) 2014 Jan Blaha 
 * 
 * Evaluates commands from commandline and update accordinly initial config
 */

var nconf = require('nconf'),
    fs = require("fs"),
    path = require("path"),
    platform = require('os').platform(),
    childProcess = require('child_process');

module.exports = function(callback) {

    function install() {
        console.log("Platform is " + platform);

        if (platform == "win32" || platform == "win64") {
            return windowsInstall();
        }

        console.log("Installing jsreport as startup service for your platform should be described at http://jsreport.net/downloads");
    }
    
    function windowsInstall() {
        shouldContinueInitializing = false;
        
        console.log("installing windows service jsreport-server.");

        var pathToWinSer = path.resolve("node_modules\\jsreport\\node_modules\\.bin\\winser.cmd");
        childProcess.exec(pathToWinSer + " -i", function(error, stdout, stderr) {
            if (error) {
                console.log(error);
                process.exit(1);
                return;
            }

            console.log("starting windows service jsreport-server.");

            childProcess.exec("net start jsreport-server", function(error, stdout, stder) {
                if (error) {
                    console.log(error);
                    process.exit(1);
                    return;
                }

                console.log("service jsreport-server is running. go to https://localhost:" + nconf.get('port'));
                process.exit(0);
            });
        });
    }

    function windowsUninstall() {
        shouldContinueInitializing = false;
        console.log("uninstalling windows service jsreport-server.");

        var pathToWinSer = path.resolve("node_modules\\jsreport\\node_modules\\.bin\\winser.cmd");
        childProcess.exec(pathToWinSer + " -x -r", function(error, stdout, stderr) {
            if (error) {
                console.log(error);
                process.exit(1);
                return;
            }

            console.log("windows service jsreport-server uninstalled");
            process.exit(0);
        });
    }

    function port(p) {
        nconf.set('port',p);
        shouldRefreshConfig = true;
    }

    function daemon() {
        nconf.set('daemon',true);
        shouldRefreshConfig = true;
    }

    var shouldRefreshConfig = false;
    var shouldContinueInitializing = true;

    require('commander')
        .version(require("./package.json").version)
        .usage('[options]')
        .option('-i, --install', 'WINDOWS ONLY - install app as windows service, For other platforms see http://jsreport.net/on-prem/downloads', install)
        .option('-r, --uninstall', 'WINDOWS ONLY - Stop and uninstall service', windowsUninstall)
        .option('-p, --port <n>', 'Https Port', port)
        .option('-d, --daemon', 'NON WINDOWS ONLY - Start process as daemon', daemon)
        .parse(process.argv);
        
    if (shouldRefreshConfig) {
        //  async write config file
        nconf.save();
    }

    callback(null,true);
};
