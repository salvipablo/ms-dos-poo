/* Imports */

import { Storage } from "./storage.js";
import { fileOrDirectory } from "./types.js";

/* Clase */

export class OperatingSystem {
  storage: Storage;
  commands: any;
  currentDirectory: fileOrDirectory;
  path: fileOrDirectory[];
  maxCurrentId: number;

  constructor() {
    this.storage = new Storage();
    this.commands =  ["DIR", "CD", "DIRECTORY", "CD..", "MKDIR"];

    this.currentDirectory = {
      id: 0,
      sonOf: 0,
      name: "C", 
      type: "DIR",
      size: 0
    }

    this.path = [
      {id: 0, sonOf: 0, name: "C", type: "DIR", size: 0}
    ];

    this.maxCurrentId = 9;
  }

  receiveCommand(command: string): void {
    let parts = command.split(" ");
    
    parts[0] = parts[0].toUpperCase();

    if ( !this.commands.includes(parts[0]) ) {
      this.informationMessages("error", "Comando no existe");
    } else {
      if (parts[0] == "DIR") this.CommandDir();
      if (parts[0] == "CD") this.enterDirectory(parts[1]);
      if (parts[0] == "CD..") this.exitDirectory();
      if (parts[0] == "MKDIR") this.createDirectory(parts[1]);
      if (parts[0] == "DIRECTORY") console.log(this.storage.disk);
    }
  }

  informationMessages(type: string, message: string): void {
    if (type == "error") console.log('\x1b[31m', message);
  }

  CommandDir(): void {
    let currentDirectoryId: number = this.currentDirectory.id;
    let currentDirectoryOrFileName: string = this.currentDirectory.name;

    this.storage.disk.forEach(element => {
      if (currentDirectoryId == element.sonOf && 
        currentDirectoryOrFileName != element.name) {
          let nameRell = element.name.padEnd(25, ' ')
          console.log(`${nameRell}     ${element.type == "DIR" ? "<DIR>":element.type}`);
      }
    });
  }

  enterDirectory(nameDirectory: string): void {
    let currentDirectoryId: number = this.currentDirectory.id;

    this.storage.disk.forEach(element => {
      if (element.name == nameDirectory && element.sonOf == currentDirectoryId) {
        let fetchedDirectory: fileOrDirectory = {
          id: element.id,
          sonOf: element.sonOf,
          name: element.name,
          type: element.type,
          size: element.size
        }
        this.currentDirectory = fetchedDirectory;
        this.path.push(fetchedDirectory)
        //showPath();
      }
    });
  }

  getPath(): string {
    let html: string = "";
    this.path.forEach(element => {
      html += `${element.name == "C" ? "C:": element.name}\\`;
    });
    return html;
  }

  exitDirectory(): void {
    if (this.path.length > 1) {
      this.path.pop();
      this.getPath();
      this.currentDirectory = this.path[this.path.length-1];
    }
  }

  createDirectory(nameDirectory: string): void {
    let sonOF: number = this.currentDirectory.id;
    this.maxCurrentId += 1;
  
    let newDirectory: fileOrDirectory = {
      id: this.maxCurrentId,
      sonOf: sonOF,
      name: nameDirectory,
      type: "DIR",
      size: 0
    }
  
    this.storage.disk.push(newDirectory);
  }  
}