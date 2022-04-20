export class Storage {
    disk;
    constructor() {
        this.disk = [
            { id: 0, sonOf: 0, name: "C", type: "DIR", size: 0 },
            { id: 1, sonOf: 0, name: "Programs", type: "DIR", size: 0 },
            { id: 2, sonOf: 0, name: "System", type: "DIR", size: 0 },
            { id: 3, sonOf: 0, name: "edit.exe", type: "EXE", size: 1200 },
            { id: 4, sonOf: 1, name: "xtree", type: "DIR", size: 0 },
            { id: 5, sonOf: 4, name: "libraries", type: "DIR", size: 0 },
            { id: 6, sonOf: 4, name: "xtregold.exe", type: "EXE", size: 1532 },
            { id: 7, sonOf: 5, name: "xtree.dll", type: "DLL", size: 536 },
            { id: 8, sonOf: 2, name: "msdos.com", type: "COM", size: 658 },
            { id: 9, sonOf: 2, name: "msdosActive.dll", type: "DLL", size: 759 }
        ];
    }
}
