function kazamShinchan(n, arr, k){
    var max = arr[0]
    for (var i = 0; i < n; i++){
        if (arr[i] == k){
            // console.log(i)
            return i
        }else if (arr[i] > k){
            // console.log(i)
            return i
        }
    }
}
// console.log(kazamShinchan(4, [1,3,5,6], 5))


function runProgram(input) {
    // console.log(input)
    input = input.split("\n");
    var n = +input[0]
    var arr = input[1].trim().split(" ").map(Number)
    var k = +input[2]
    console.log(kazamShinchan(n, arr, k))
  }
  if (process.env.USERNAME === "akshra") {
    runProgram(`4
1 3 5 6
5 `);
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