/* Imports */
import { OperatingSystem } from "./operatingSystem.js";
/* Variables */
let comando;
let op = new OperatingSystem();
process.stdout.write("C:\\");
process.stdin.on('data', function (data) {
    comando = data.toString();
    op.receiveCommand(comando.trim().toUpperCase());
    if (comando.trim().toUpperCase() == "EXIT")
        process.exit();
    process.stdout.write("\x1b[37mC:\\");
});
