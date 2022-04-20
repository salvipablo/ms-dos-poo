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
    let pathShow: string;

    process.stdin.on('data', (data) => {
      
      comando = data.toString();

      if (comando.trim().toUpperCase() == "EXIT") process.exit();
      
      this.op.receiveCommand(comando.trim());

      pathShow = "\x1b[37m" + this.op.getPath();
      process.stdout.write(pathShow);
    });
  }
}


/* Variables */

let app = new App();


/* Program */

app.execute();