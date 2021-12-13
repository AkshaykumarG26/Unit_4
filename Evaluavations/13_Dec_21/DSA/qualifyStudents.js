function qualifySrudents(n, k, arr){
    let rank = [];
    rank[0] = 1;
    for(let i = 1; i < n; i++){
        if(arr[i] == arr[i-1]){
            rank[i] = rank[i-1];
        }else{
            rank[i] = i+1;
        }
    }
   let count = 0;
   for(let i = 0; i < n; i++){
       if(rank[i] <= k){
           count++;
       }
   }
   console.log(count);
}


function runProgram(input) {
    input = input.trim().split("\n");
    var testCases = +input[0]
    // console.log(input)
    var line = 1
    for (var i = 0; i < testCases; i++){
        var [n, k] = input[line++].trim().split(" ").map(Number)
        // console.log(n,k)
        var arr = input[line++].trim().split(" ").map(Number)
        // console.log(arr)
        qualifySrudents(n,k,arr)
    }
   
  }
  

  if (process.env.USERNAME === "akshra") {
    runProgram(`1
5 3
2 2 2 2 1`);
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