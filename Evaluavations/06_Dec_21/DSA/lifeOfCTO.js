function lifeOfCTO(n, arr){
    var flag = false;
    var indexx = 0
    for (var i = 0; i < n; i++){
        if (arr[i] == 1){
            flag = true
            indexx = i;
            break
        }
    }

    if (flag){
        console.log(indexx)
    }else{
        console.log(-1)
    }
}


function runProgram(input) {
    input = input.trim().split("\n");
    var n = +input[0]
    var arr = input[1].trim().split(" ").map(Number); 
    
    lifeOfCTO(n, arr)

   
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