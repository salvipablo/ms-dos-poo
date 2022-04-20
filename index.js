/* Imports */
import { OperatingSystem } from "./operatingSystem.js";
/* Class */
class App {
    op;
    constructor() {
        this.op = new OperatingSystem();
    }
    pressEnter(comando) {
        this.op.receiveCommand(comando.trim().toUpperCase());
    }
    execute() {
        process.stdout.write("\x1b[37mC:\\");
        let comando;
        process.stdin.on('data', (data) => {
            comando = data.toString();
            if (comando.trim().toUpperCase() == "EXIT")
                process.exit();
            this.op.receiveCommand(comando.trim().toUpperCase());
            //this.pressEnter(comando);
            process.stdout.write("\x1b[37mC:\\");
        });
    }
}
/* Variables */
let app = new App();
/* Program */
app.execute();
