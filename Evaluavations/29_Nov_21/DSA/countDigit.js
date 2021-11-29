function countDigit(n, arr){
    var zeros = 0;
    var ones = 0;
    var twos = 0;
    for (var i = 0; i < n; i++){
        if (arr[i] == 0){
            zeros++
        }else if(arr[i] == 1){
            ones++
        }else{
            twos++
        }
    }
    console.log(zeros, ones, twos)
}
// countDigit(10, [0,1,0,1,1,1,0,2,2,0])



function runProgram(input) {
    // console.log(input)
    input = input.split("\n");
    var n = +input[0]
    var arr = input[1].trim().split(" ").map(Number)
    // console.log(n, arr)
    countDigit(n, arr)
  }
  if (process.env.USERNAME === "akshra") {
    runProgram(`10
0 1 0 1 1 1 0 2 2 0 `);
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