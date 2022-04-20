export const disk = [
    { id: 0, sonOf: 0, name: "C", type: "DIR" },
    { id: 1, sonOf: 0, name: "Programs", type: "DIR" },
    { id: 2, sonOf: 0, name: "System", type: "DIR" },
    { id: 3, sonOf: 0, name: "edit.exe", type: "EXE" },
    { id: 4, sonOf: 1, name: "xtree", type: "DIR" },
    { id: 5, sonOf: 4, name: "libraries", type: "DIR" },
    { id: 6, sonOf: 4, name: "xtregold.exe", type: "EXE" },
    { id: 7, sonOf: 5, name: "xtree.dll", type: "DLL" },
    { id: 8, sonOf: 2, name: "msdos.com", type: "COM" },
    { id: 9, sonOf: 2, name: "msdosActive.dll", type: "DLL" }
];
export class Storage {
    disk;
    constructor() {
        this.disk = [
            { id: 0, sonOf: 0, name: "C", type: "DIR" },
            { id: 1, sonOf: 0, name: "Programs", type: "DIR" },
            { id: 2, sonOf: 0, name: "System", type: "DIR" },
            { id: 3, sonOf: 0, name: "edit.exe", type: "EXE" },
            { id: 4, sonOf: 1, name: "xtree", type: "DIR" },
            { id: 5, sonOf: 4, name: "libraries", type: "DIR" },
            { id: 6, sonOf: 4, name: "xtregold.exe", type: "EXE" },
            { id: 7, sonOf: 5, name: "xtree.dll", type: "DLL" },
            { id: 8, sonOf: 2, name: "msdos.com", type: "COM" },
            { id: 9, sonOf: 2, name: "msdosActive.dll", type: "DLL" }
        ];
    }
}
