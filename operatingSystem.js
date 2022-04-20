/* Imports */
import { Storage } from "./storage.js";
/* Clase */
export class OperatingSystem {
    storage;
    commands;
    currentDirectory;
    constructor() {
        this.storage = new Storage();
        this.commands = ["DIR", "CD", "DIRECTORY", "CD..", "MKDIR"];
        this.currentDirectory = {
            id: 0,
            sonOf: 0,
            name: "C",
            type: "DIR",
            size: 0
        };
    }
    receiveCommand(command) {
        let parts = command.split(" ");
        if (!this.commands.includes(parts[0])) {
            this.informationMessages("error", "Comando no existe");
        }
        else {
            if (parts[0] == "DIR")
                this.CommandDir();
            // if (parts[0] == "directory") console.log(diskData.disk);
            // if (parts[0] == "cd") enterDirectory(parts[1]);
            // if (parts[0] == "mkdir") createDirectory(parts[1]);
            // if (parts[0] == "cd..") exitDirectory();
        }
    }
    informationMessages(type, message) {
        if (type == "error")
            console.log('\x1b[31m', message);
    }
    CommandDir() {
        let currentDirectoryId = this.currentDirectory.id;
        let currentDirectoryOrFileName = this.currentDirectory.name;
        this.storage.disk.forEach(element => {
            if (currentDirectoryId == element.sonOf &&
                currentDirectoryOrFileName != element.name) {
                let nameRell = element.name.padEnd(25, ' ');
                console.log(`${nameRell}     ${element.type == "DIR" ? "<DIR>" : element.type}`);
            }
        });
    }
}
