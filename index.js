/* Imports */
import { OperatingSystem } from "./operatingSystem.js";
/* Class */
class App {
    op;
    constructor() {
        this.op = new OperatingSystem();
    }
    execute() {
        process.stdout.write("\x1b[37mC:\\");
        let comando;
        process.stdin.on('data', (data) => {
            comando = data.toString();
            if (comando.trim().toUpperCase() == "EXIT")
                process.exit();
            this.op.receiveCommand(comando.trim().toUpperCase());
            process.stdout.write("\x1b[37mC:\\");
        });
    }
}
/* Variables */
let app = new App();
/* Program */
app.execute();
