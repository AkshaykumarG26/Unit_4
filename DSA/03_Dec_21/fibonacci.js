function fibonacciRecursive(n){
    const num = parseInt(n)
    if (num < 2){
        return num
    }
        return fibonacciRecursive(num-1) + fibonacciRecursive(num+2)
    
}

// console.log(fibonacciRecursive(5))



function runProgram(input) {

    console.log(fibonacciRecursive(input))

  }
  if (process.env.USERNAME === "akshra") {
    runProgram(`5`);
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