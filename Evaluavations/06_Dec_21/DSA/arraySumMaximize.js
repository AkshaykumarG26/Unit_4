function arraySumMaximize(n, arr){
    
}

console.log(arraySumMaximize(3, [2,3,1]))

function runProgram(input) {
    input = input.trim().split("\n");
    var n = +input[0]
    var arr = input[1].trim().split(" ").map(Number); 
    
    

   
  }
  

  if (process.env.USERNAME === "akshra") {
    runProgram(`5
    0 0 0 1 1`);
  } else {
    process.stdin.resume();
    process.stdin.setEncoding("ascii");
    let read = "";
    process.stdin.on("data", function (input) {
      read += input;
    });
    process.stdin.on("end", function () {
      read = read.replace(/\n$/, "");
      read = read.replace(/\n$/, "");
      runProgram(read);
    });
    process.on("SIGINT", function () {
      read = read.replace(/\n$/, "");
      runProgram(read);
      process.exit(0) ;
    });
  }