/* Imports */

import { Storage } from "./storage.js";


/* Clase */

export class OperatingSystem {
  storage: Storage;
  commands: any;
  constructor() {
    this.storage = new Storage();
    this.commands =  ["DIR", "CD", "DIRECTORY", "CD..", "MKDIR"];
  }

  receiveCommand(command: string): void {
    let parts = command.split(" ");
    
    if ( !this.commands.includes(parts[0]) ) {
      this.informationMessages("error", "Comando no existe");
    } else {
      if (parts[0] == "DIR") this.CommandDir();
      // if (parts[0] == "directory") console.log(diskData.disk);
      // if (parts[0] == "cd") enterDirectory(parts[1]);
      // if (parts[0] == "mkdir") createDirectory(parts[1]);
      // if (parts[0] == "cd..") exitDirectory();
    }
  }

  informationMessages(type: string, message: string): void {
    if (type == "error") console.log('\x1b[31m', message);
  }

  CommandDir(): void {
    console.log(this.storage.disk);
  }
}