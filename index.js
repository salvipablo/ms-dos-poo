/* Variables */
let comando;

process.stdout.write("C:\\");

process.stdin.on('data', function(data){
  comando = data.toString();

  if (comando.trim().toUpperCase() == "EXIT") {
    process.exit();
  }
  
  process.stdout.write("C:\\");
});