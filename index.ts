/* Imports */

import { OperatingSystem } from "./operatingSystem.js";


/* Class */

class App {
  op: OperatingSystem;

  constructor() {
    this.op = new OperatingSystem();
  }

  execute(): void {
    process.stdout.write("\x1b[37mC:\\");

    let comando: string;

    process.stdin.on('data', (data) => {
      
      comando = data.toString();

      if (comando.trim().toUpperCase() == "EXIT") process.exit();
      
      this.op.receiveCommand(comando.trim().toUpperCase());

      process.stdout.write("\x1b[37mC:\\");
    });
  }
}


/* Variables */

let app = new App();


/* Program */

app.execute();