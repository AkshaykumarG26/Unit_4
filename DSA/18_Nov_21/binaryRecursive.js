function binaryRecursive(arr, low, high, k){
    if (high < low)
        return -1;
    if (arr[low] == k)
        return low;
    if (arr[high] == k)
        return high;
    return binaryRecursive(arr, low+1, high-1, k);
}


function runProgram(input) {
    input = input.trim().split("\n")
    var [n,k] = input[0].split(" ").map(Number)
    var arr = input[1].trim().split(" ").map(Number)
    var find = binaryRecursive(arr, 0, n-1, k)
    if (find != -1){
        console.log(1)
    }else{
        console.log(-1)
    }

  }
  if (process.env.USERNAME === "akshra") {
    runProgram(`5 0
2 -2 1 3 4`);
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