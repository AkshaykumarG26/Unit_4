function qualifySrudents(n, k, arr){
   let rank = [];
   rank[0] = 1;
   for(let i = 1; i < n; i++){
       if(arr[i] == arr[i-1]){
            rank[i] = rank[i-1];
       }
       else{
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
    let testCases = +input[0];
    let line = 1;
    for(let i = 1; i <= t; i++){
        let[n, k] = input[line++].trim().split(" ").map(Number);
        let arr = input[line++].trim().split(" ").map(Number);
        arr = arr.sort((a,b) => b-a);
        qualifySrudents(n, k, arr);
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