/* Imports */

import { Storage } from "./storage.js";


/* Variables */
let comando;
let storage = new Storage();

process.stdout.write("C:\\");

process.stdin.on('data', function(data){
  comando = data.toString();

  if (comando.trim().toUpperCase() == "EXIT") process.exit();
  if (comando.trim().toUpperCase() == "DIR") console.log(storage.disk);

  process.stdout.write("C:\\");
});