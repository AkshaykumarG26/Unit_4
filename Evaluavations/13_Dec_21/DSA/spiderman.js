function spiderman(n, arr){
    var sum = 0;
    for (var i = 0; i < n; i++){
        // sum = arr[i] + arr[i+1]
        if (sum < arr[i] + arr[i+1]){
            // return sum
            console.log(sum)
        }else if (sum < arr[i] + arr[i+1]){
            sum = arr[i] + arr[i+2]
            // return sum
            console.log(sum)
        }
    }
    // console.log(sum)
}





function runProgram(input) {
    input = input.trim().split("\n");
    var n = +input[0]
    var arr = input[1].trim().split(" ").map(Number)

    // console.log(spiderman(n, arr))
    spiderman(n, arr)
    // console.log(n, arr)
   
  }
  

  if (process.env.USERNAME === "akshra") {
    runProgram(`4
10 30 40 20`);
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